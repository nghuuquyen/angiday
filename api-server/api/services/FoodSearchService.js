/**
 * @name getDataDaily
 * @module services
 * @description
 * Get food, keyword, shop, FoodKeywordRelation, FoodShopRelation from mongoDB to Neo4j
 */

const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver("bolt://neo4j:7687", neo4j.auth.basic("neo4j", "annq"));

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
      MATCH (f:Food)-[:RELATED]->(k:Keyword)
      WHERE k.keyword_id IN keywords
      RETURN f.food_id AS id,
             f.name AS name,
             f.description AS description,
             COLLECT(DISTINCT { id: k.keyword_id, name: k.name }) AS keywords`;
    const params = {
      keywords: keywords
    };

    searchResults = await session.run(cypherStr, params);

    // Must close session.
    session.close();

    // Transform search results.
    let foods = searchResults.records.map(record => {
      let atts = ['id', 'name', 'description', 'keywords'];
      let food = {};

      for(let i in atts) {
        food[atts[i]] = record.get(atts[i]);
      }

      return food;
    });

    return foods;

  } catch (error) {
    sails.log.error(error);
  }
}
