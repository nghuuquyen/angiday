/**
 * @name getDataDaily
 * @module services
 * @description
 * Get food, keyword, shop, FoodKeywordRelation, FoodShopRelation from mongoDB to Neo4j
 */

const NEO4J_USERNAME = process.env.NEO4J_USERNAME || 'neo4j';
const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD || 'neo4j';
const NEO4J_CONNECT_STRING = process.env.NEO4J_CONNECTION_STRING || 'bolt://localhost:7687';

const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver(NEO4J_CONNECT_STRING, neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD));

module.exports = {
  searchFoods
};

/**
 * @name searchFoods
 * @description
 * Search food by keywords.
 *
 * @param {Array} keywords  - Keyword ids
 */
async function searchFoods(keywords) {
  const session = driver.session();
  let searchResults = [];

  if (session == null) {
    sails.log.error("Connect neo4j failed");
    return
  }

  try {
    const cypherStr = `
      WITH   {keywords} AS keywords
      MATCH  (f:Food)-[:RELATED]->(k:Keyword)
      WHERE  k.id IN keywords
      MATCH (:User)-[r:INTERACTIVE]->(f)
      RETURN f.id       AS id,
             f.name     AS name,
             f.imageUrl AS imageUrl,
             SUM(r.scores) AS rank,
             COLLECT(DISTINCT { id: k.id, name: k.name }) AS keywords
      ORDER BY rank DESC
    `;
    const params = {
      keywords: keywords
    };

    searchResults = await session.run(cypherStr, params);

    // Must close session.
    session.close();

    // Transform search results.
    let foods = await searchResults.records.map(record => {
      let atts = ['id', 'name', 'keywords', 'imageUrl'];
      let food = {};

      for (let i in atts) {
        food[atts[i]] = record.get(atts[i]);
      }

      return food;
    });

    for(let i in foods) {
      let fullFoodData = await Food.findOne({ id: foods[i].id }).populate('keywords');
      foods[i].description = fullFoodData.description;
      foods[i].keywords =    fullFoodData.keywords;
    }

    return foods;

  } catch (error) {
    sails.log.error(error);
  }
}
