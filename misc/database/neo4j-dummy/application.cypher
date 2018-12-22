// CQ_01:: ---- Personalized Recommendation Content-based filtering ---
// This query used in homepage to get food feeds for user. 

WITH [] AS favorite_foods 
CALL apoc.cypher.run("MATCH (u:User { id: '0000000001'})-[:INTERACTIVE]->(f:Food) RETURN COLLECT(DISTINCT f) AS foods", null) yield value
WITH apoc.coll.union(favorite_foods, value.foods) AS favorite_foods
CALL apoc.cypher.run("MATCH (u:User { id: '0000000001'})-[:FOLLOW]->(:COLLECTION)-[:HAS]->(f:Food) RETURN COLLECT(DISTINCT f) AS foods", null) yield value
WITH apoc.coll.union(favorite_foods, value.foods) AS favorite_foods
UNWIND favorite_foods AS f
MATCH (f)-[:RELATED]->(w:Keyword)<-[:RELATED]-(other:Food)
WITH f, other, COUNT(DISTINCT w) AS intersection
MATCH (f)-[:RELATED]->(fw:Keyword)
WITH f, other, intersection, COLLECT(DISTINCT fw) AS s1 
MATCH (otherFood)-[:RELATED]->(ow:Keyword)
WITH f, other, intersection, s1, COLLECT(DISTINCT ow) AS s2 

WITH f, other, intersection, s1, s2 

WITH f, other, intersection, s1 + FILTER(x in s2 WHERE NOT x IN s1) AS union, s1, s2 
WITH f, other, s1, s2, ((1.0*intersection)/SIZE(union)) AS jaccard 
WHERE jaccard > 0.5
RETURN f.id   AS food_id, 
       f.name AS food_name, 
       COLLECT({ food_id: other.id, food_name: other.name, jaccard: jaccard }) AS related_foods


// CQ_02:: --- Personalized Recommendation Collaborative Filtering (Daemon Batch Update) --- 
// This query used for application run daily for update similarity for each user in application.

MATCH (u1:User)-[r:INTERACTIVE]->(w:Keyword)
WITH u1, AVG(r.scores) AS u1_mean 

MATCH (u1)-[r1:INTERACTIVE]->(w:Keyword)<-[r2:INTERACTIVE]-(u2:User)
WITH u1, u1_mean, u2, COLLECT({r1: r1, r2: r2}) AS ratings WHERE size(ratings) > 3

MATCH (u2)-[r:INTERACTIVE]->(w:Keyword)
WITH u1, u1_mean, u2, avg(r.scores) AS u2_mean, ratings

UNWIND ratings AS r

WITH SUM( (r.r1.scores - u1_mean) * (r.r2.scores - u2_mean) ) AS nom,
     SQRT( SUM( (r.r1.scores - u1_mean)^2) * sum( (r.r2.scores - u2_mean) ^2)) AS denom,
     u1, u2 WHERE denom <> 0

WITH u1, u2, nom/denom AS pearson
MERGE (u1)-[s:SIMILARITY]->(u2)
ON CREATE SET s.pearson = pearson
ON MATCH SET s.pearson = pearson       


// CQ_03:: --- Personalized Recommendation Collaborative Filtering ---
// This query used for show suggest foods for users by pearson similarity index.

MATCH (u:User { id: '0000000001'})-[s:SIMILARITY]-(neighbor:User) 
WITH u, neighbor, s.pearson AS pearson_similarty
ORDER BY pearson_similarty DESC
LIMIT 15 // kNN – k Nearest Neighbors (k = 15)
WITH u, neighbor, pearson_similarty, [] AS suggest_foods
CALL apoc.cypher.run("MATCH (u:User { id: {userId} })-[:INTERACTIVE]->(f:Food) RETURN COLLECT(DISTINCT f) AS foods", { userId: neighbor.id }) yield value
WITH u, neighbor, pearson_similarty, apoc.coll.union(suggest_foods, value.foods) AS suggest_foods
CALL apoc.cypher.run("MATCH (u:User { id: {userId} })-[:FOLLOW]->(:COLLECTION)-[:HAS]->(f:Food) RETURN COLLECT(DISTINCT f) AS foods", { userId: neighbor.id }) yield value
WITH u, neighbor, pearson_similarty, apoc.coll.union(suggest_foods, value.foods) AS suggest_foods

RETURN u.username AS username,
       u.id       AS user_id,
       neighbor.username AS neighbor_username,
       neighbor.id       AS neighbor_id,  
       pearson_similarty AS pearson_similarty,
       suggest_foods     AS suggest_foods
ORDER BY pearson_similarty DESC