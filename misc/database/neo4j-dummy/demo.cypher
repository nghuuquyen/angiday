
// Explain User Recommendation.

MATCH (u1:User { username: 'user01' })-[r:INTERACTIVE]->(w:Keyword)
WITH u1, AVG(r.scores) AS u1_mean 

MATCH (u1)-[r1:INTERACTIVE]->(w:Keyword)<-[r2:INTERACTIVE]-(u2:User)
WITH u1, u1_mean, u2, COLLECT({r1: r1, r2: r2}) AS ratings WHERE size(ratings) > 2

MATCH (u2)-[r:INTERACTIVE]->(w:Keyword)
WITH u1, u1_mean, u2, avg(r.scores) AS u2_mean, ratings

UNWIND ratings AS r

WITH SUM( (r.r1.scores - u1_mean) * (r.r2.scores - u2_mean) ) AS nom,
     SQRT( SUM( (r.r1.scores - u1_mean)^2) * sum( (r.r2.scores - u2_mean) ^2)) AS denom,
     u1, u2, ratings
WHERE denom <> 0
WITH u1, u2, nom/denom AS pearson_similarty, ratings
RETURN u1, u2, pearson_similarty, ratings
ORDER BY pearson_similarty DESC

===

// Explain Similar Food Finding

MATCH (f: Food { code: 'xoi' })-[:RELATED]->(w:Keyword)<-[:RELATED]-(other:Food)
WITH f, other, COUNT(DISTINCT w) AS intersection
MATCH (f)-[:RELATED]->(fw:Keyword)
WITH f, other, intersection, COLLECT(DISTINCT fw.code) AS s1 
MATCH (otherFood)-[:RELATED]->(ow:Keyword)
WITH f, other, intersection, s1, COLLECT(DISTINCT ow.code) AS s2 
WITH f, other, intersection, s1, s2 
WITH f, other, intersection, s1 + FILTER(x in s2 WHERE NOT x IN s1) AS union, s1, s2 
WITH f, other, s1, s2, union, ((1.0*intersection)/SIZE(union)) AS jaccard 
WHERE jaccard > 0.3
RETURN f.name AS f1_name, other.name AS f2_name , jaccard, s1, s2, union
ORDER BY jaccard DESC