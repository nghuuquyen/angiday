
# Example 1.
MATCH (m:Movie {title: "Inception"})-[:IN_GENRE]->(g:Genre)<-[:IN_GENRE]-(other:Movie)
WITH m, other, COUNT(g) AS intersection, COLLECT(g.name) AS i
MATCH (m)-[:IN_GENRE]->(mg:Genre)
WITH m,other, intersection,i, COLLECT(mg.name) AS s1
MATCH (other)-[:IN_GENRE]->(og:Genre)
WITH m,other,intersection,i, s1, COLLECT(og.name) AS s2

WITH m,other,intersection,s1,s2

WITH m,other,intersection,s1+filter(x IN s2 WHERE NOT x IN s1) AS union, s1, s2

RETURN m.title, other.title, s1,s2,((1.0*intersection)/SIZE(union)) AS jaccard ORDER BY jaccard DESC LIMIT 100

-------

# Personalized Recommendation Content-based filtering (V1)
MATCH (u:User { id: '0000000001'})-[:INTERACTIVE]->(f:Food)-[:RELATED]->(w:Keyword)<-[:RELATED]-(other:Food)
WITH f, other, COUNT(DISTINCT w) AS intersection
MATCH (f)-[:RELATED]->(fw:Keyword)
WITH f, other, intersection, COLLECT(DISTINCT fw) AS s1 
MATCH (otherFood)-[:RELATED]->(ow:Keyword)
WITH f, other, intersection, s1, COLLECT(DISTINCT ow) AS s2 

WITH f, other, intersection, s1, s2 

WITH f, other, intersection, s1 + FILTER(x in s2 WHERE NOT x IN s1) AS union, s1, s2 
WITH f, other, s1, s2, ((1.0*intersection)/SIZE(union)) AS jaccard 
RETURN f.id   AS food_id, 
       f.name AS food_name, 
       COLLECT({ food_id: other.id, food_name: other.name, jaccard: jaccard }) AS related_foods


# Personalized Recommendation Content-based filtering (V2)

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
RETURN f.id   AS food_id, 
       f.name AS food_name, 
       COLLECT({ food_id: other.id, food_name: other.name, jaccard: jaccard }) AS related_foods



--------
# Example 2.

MATCH (u1:User {name:"Cynthia Freeman"})-[r:RATED]->(m:Movie)
WITH u1, avg(r.rating) AS u1_mean

MATCH (u1)-[r1:RATED]->(m:Movie)<-[r2:RATED]-(u2)
WITH u1, u1_mean, u2, COLLECT({r1: r1, r2: r2}) AS ratings WHERE size(ratings) > 10

MATCH (u2)-[r:RATED]->(m:Movie)
WITH u1, u1_mean, u2, avg(r.rating) AS u2_mean, ratings

UNWIND ratings AS r

WITH sum( (r.r1.rating-u1_mean) * (r.r2.rating-u2_mean) ) AS nom,
     sqrt( sum( (r.r1.rating - u1_mean)^2) * sum( (r.r2.rating - u2_mean) ^2)) AS denom,
     u1, u2 WHERE denom <> 0

RETURN u1.name, u2.name, nom/denom AS pearson
ORDER BY pearson DESC LIMIT 100


# Personalized Recommendation Collaborative Filtering (v1)
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

RETURN u1.username, u2.username, nom/denom AS pearson
ORDER BY pearson DESC LIMIT 100     


# Personalized Recommendation Collaborative Filtering (v2 - Demo Batch Update)
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



-----

#Example 3
MATCH (u1:User {name:"Cynthia Freeman"})-[r:RATED]->(m:Movie)
WITH u1, avg(r.rating) AS u1_mean

MATCH (u1)-[r1:RATED]->(m:Movie)<-[r2:RATED]-(u2)
WITH u1, u1_mean, u2, COLLECT({r1: r1, r2: r2}) AS ratings WHERE size(ratings) > 10

MATCH (u2)-[r:RATED]->(m:Movie)
WITH u1, u1_mean, u2, avg(r.rating) AS u2_mean, ratings

UNWIND ratings AS r

WITH sum( (r.r1.rating-u1_mean) * (r.r2.rating-u2_mean) ) AS nom,
     sqrt( sum( (r.r1.rating - u1_mean)^2) * sum( (r.r2.rating - u2_mean) ^2)) AS denom,
     u1, u2 WHERE denom <> 0

WITH u1, u2, nom/denom AS pearson
ORDER BY pearson DESC LIMIT 10

MATCH (u2)-[r:RATED]->(m:Movie) WHERE NOT EXISTS( (u1)-[:RATED]->(m) )

RETURN m.title, SUM( pearson * r.rating) AS score
ORDER BY score DESC LIMIT 25



# Personalized Recommendation Collaborative Filtering (v3)
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