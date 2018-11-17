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
      WITH {keywords} AS keywords
      MATCH (s:Shop)-[:SERVED]->(f:Food)-[:RELATED]->(k:Keyword)
      WHERE k.keyword_id IN keywords
      RETURN f.food_id AS id,
             f.name AS name,
             f.description AS description,
             COLLECT(DISTINCT { id: k.keyword_id, name: k.name }) AS keywords,
             COLLECT(DISTINCT { id: s.shop_id, name: s.name }) AS shops`;
    const params = {
      keywords: keywords
    };

    searchResults = await session.run(cypherStr, params);

    // Must close session.
    session.close();

    // Transform search results.
    let foods = searchResults.records.map(record => {
      let atts = ['id', 'name', 'description', 'keywords', 'shops'];
      let food = {};

      for (let i in atts) {
        food[atts[i]] = record.get(atts[i]);
      }

      return food;
    });

    return foods;

  } catch (error) {
    sails.log.error(error);
  }
}
