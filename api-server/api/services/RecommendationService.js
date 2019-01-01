const NEO4J_USERNAME = process.env.NEO4J_USERNAME || 'neo4j';
const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD || 'neo4j';
const NEO4J_CONNECT_STRING = process.env.NEO4J_CONNECTION_STRING || 'bolt://localhost:7687';

const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver(NEO4J_CONNECT_STRING, neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD));

module.exports = {
  getFoodNewFeeds,
  getUserRecommedationFoods,
  getSimilarFoodByFood,
  getTopPopularFoods
};

async function getTopPopularFoods() {
  const session = driver.session();
  let searchResults = [];

  if (session == null) {
    sails.log.error("Connect neo4j failed");
    return
  }

  try {
    const cypherStr = `
      MATCH (:User)-[r:INTERACTIVE]->(f:Food)
      WITH DISTINCT f, SUM(r.scores) AS rank
      RETURN f.id       AS id,
             f.name     AS name,
             f.imageUrl AS imageUrl,
             rank           AS rank
      ORDER BY rank DESC
    `;

    searchResults = await session.run(cypherStr);

    // Must close session.
    session.close();

    // Transform search results.
    let foods = await searchResults.records.map(record => {
      let atts = ['id', 'name', 'imageUrl', 'rank'];
      let food = {};

      for (let i in atts) {
        food[atts[i]] = record.get(atts[i]);
      }

      return food;
    });

    for(let i in foods) {
      let fullFoodData = await Food.findOne({ id: foods[i].id });
      foods[i].description = fullFoodData.description;
    }

    return foods;
  } catch (error) {
    sails.log.error(error);
  }
}

async function getSimilarFoodByFood(foodId) {
  const session = driver.session();
  let searchResults = [];

  if (session == null) {
    sails.log.error("Connect neo4j failed");
    return
  }

  try {
    const cypherStr = `
      MATCH (f: Food { id: '${foodId}' })-[:RELATED]->(w:Keyword)<-[:RELATED]-(other:Food)
      WITH f, other, COUNT(DISTINCT w) AS intersection
      MATCH (f)-[:RELATED]->(fw:Keyword)
      WITH f, other, intersection, COLLECT(DISTINCT fw) AS s1
      MATCH (otherFood)-[:RELATED]->(ow:Keyword)
      WITH f, other, intersection, s1, COLLECT(DISTINCT ow) AS s2

      WITH f, other, intersection, s1, s2

      WITH f, other, intersection, s1 + FILTER(x in s2 WHERE NOT x IN s1) AS union, s1, s2
      WITH f, other, s1, s2, ((1.0*intersection)/SIZE(union)) AS jaccard
      WHERE jaccard > 0.1
      MATCH (:User)-[r:INTERACTIVE]->(f)
      WITH DISTINCT other, SUM(r.scores) AS rank
      RETURN other.id       AS id,
             other.name     AS name,
             other.imageUrl AS imageUrl,
             rank           AS rank
      ORDER BY rank DESC
    `;

    searchResults = await session.run(cypherStr);
    //sails.log.debug(cypherStr);

    // Must close session.
    session.close();

    // Transform search results.
    let foods = await searchResults.records.map(record => {
      let atts = ['id', 'name', 'imageUrl', 'rank'];
      let food = {};

      for (let i in atts) {
        food[atts[i]] = record.get(atts[i]);
      }

      return food;
    });

    for(let i in foods) {
      let fullFoodData = await Food.findOne({ id: foods[i].id });
      foods[i].description = fullFoodData.description;
      foods[i].imageUrl = fullFoodData.imageUrl;
    }

    return foods;
  } catch (error) {
    sails.log.error(error);
  }
}

async function getUserRecommedationFoods(userId) {
  const session = driver.session();
  let searchResults = [];

  if (session == null) {
    sails.log.error("Connect neo4j failed");
    return
  }

  try {
    const cypherStr = `
      MATCH (u1:User { id: '${userId}' })-[r:INTERACTIVE]->(w:Keyword)
      WITH u1, AVG(r.scores) AS u1_mean

      MATCH (u1)-[r1:INTERACTIVE]->(w:Keyword)<-[r2:INTERACTIVE]-(u2:User)
      WITH u1, u1_mean, u2, COLLECT({r1: r1, r2: r2}) AS ratings WHERE size(ratings) > 2

      MATCH (u2)-[r:INTERACTIVE]->(w:Keyword)
      WITH u1, u1_mean, u2, avg(r.scores) AS u2_mean, ratings

      UNWIND ratings AS r

      WITH SUM( (r.r1.scores - u1_mean) * (r.r2.scores - u2_mean) ) AS nom,
           SQRT( SUM( (r.r1.scores - u1_mean)^2) * sum( (r.r2.scores - u2_mean) ^2)) AS denom,
           u1, u2
      WHERE denom <> 0

      WITH u1, u2, nom/denom AS pearson_similarty
      WITH u1, u2, pearson_similarty
      ORDER BY pearson_similarty DESC
      LIMIT 15
      MATCH (u2)-[*0..2]-(f:Food)
      MATCH (:User)-[r:INTERACTIVE]->(f)
      WITH DISTINCT f, SUM(r.scores) AS rank
      RETURN f.id       AS id,
             f.name     AS name,
             f.imageUrl AS imageUrl,
             rank       AS rank
      ORDER BY rank DESC
    `;

    searchResults = await session.run(cypherStr);

    // Must close session.
    session.close();

    // Transform search results.
    let foods = await searchResults.records.map(record => {
      let atts = ['id', 'name', 'imageUrl', 'rank'];
      let food = {};

      for (let i in atts) {
        food[atts[i]] = record.get(atts[i]);
      }

      return food;
    });

    for(let i in foods) {
      let fullFoodData = await Food.findOne({ id: foods[i].id });
      foods[i].description = fullFoodData.description;
      foods[i].imageUrl = fullFoodData.imageUrl;
    }

    return foods;
  } catch (error) {
    sails.log.error(error);
  }
}

async function getFoodNewFeeds(userId) {
  const session = driver.session();
  let searchResults = [];

  if (session == null) {
    sails.log.error("Connect neo4j failed");
    return
  }

  try {
    const cypherStr = `
      MATCH (u1:User { id: '${userId}' })-[:FOLLOW]->(:Collection)-[:HAS]->(f:Food)
      MATCH (:User)-[r:INTERACTIVE]->(f)
      WITH DISTINCT f, SUM(r.scores) AS rank
      RETURN f.id       AS id,
             f.name     AS name,
             f.imageUrl AS imageUrl,
             rank       AS rank
      ORDER BY rank DESC
    `;

    searchResults = await session.run(cypherStr);

    // Must close session.
    session.close();

    // Transform search results.
    let foods = await searchResults.records.map(record => {
      let atts = ['id', 'name', 'imageUrl', 'rank'];
      let food = {};

      for (let i in atts) {
        food[atts[i]] = record.get(atts[i]);
      }

      return food;
    });

    for(let i in foods) {
      let fullFoodData = await Food.findOne({ id: foods[i].id });
      foods[i].description = fullFoodData.description;
      foods[i].imageUrl = fullFoodData.imageUrl;
    }

    return foods;
  } catch (error) {
    sails.log.error(error);
  }
}
