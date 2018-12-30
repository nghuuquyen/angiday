const _ = require('lodash');
const NEO4J_USERNAME = process.env.NEO4J_USERNAME || 'neo4j';
const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD || 'neo4j';
const NEO4J_CONNECT_STRING = process.env.NEO4J_CONNECTION_STRING || 'bolt://localhost:7687';

const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver(NEO4J_CONNECT_STRING, neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD));

module.exports = async function getUserRelated(req, res) {
  const session = driver.session();
  let searchResults = [];
  let users = [];

  if (!req.query.keywords && !req.query.foods)
    return res.badRequest('Required at least on foods or keywords param');

  let keywordIds = [];
  let foodIds = [];

  if (req.query.keywords) {
    keywordIds = req.query.keywords.split(',').map(item => "'" + item + "'");
  }

  if (req.query.foods) {
    foodIds = req.query.foods.split(',').map(item => "'" + item + "'");
  }

  if (session == null) {
    sails.log.error("Connect neo4j failed");
    return
  }

  try {
    let cypherStr = '';

    if (keywordIds.length > 0 && foodIds.length > 0) {
      cypherStr = `
        MATCH (u:User)-[*..2]->(w:Keyword)
        WHERE w.id IN [${keywordIds}]
        RETURN DISTINCT u.id AS id, u.fullName AS fullName, u.username AS username, u.email AS email
        UNION
        MATCH (u:User)-[*..2]->(f:Food)
        WHERE f.id IN [${foodIds}]
        RETURN DISTINCT u.id AS id, u.fullName AS fullName, u.username AS username, u.email AS email
      `
    } else {
      if (keywordIds.length > 0) {
        cypherStr += `
          MATCH (u:User)-[*..2]->(w:Keyword)
          WHERE w.id IN [${keywordIds}]
          RETURN DISTINCT u.id AS id, u.fullName AS fullName, u.username AS username, u.email AS email
        `
      }

      if (foodIds.length > 0) {
        cypherStr += `
          MATCH (u:User)-[*..2]->(f:Food)
          WHERE f.id IN [${foodIds}]
          RETURN DISTINCT u.id AS id, u.fullName AS fullName, u.username AS username, u.email AS email
        `
      }
    }

    sails.log.debug(cypherStr);
    searchResults = await session.run(cypherStr);

    // Must close session.
    session.close();

    // Transform search results.
    users = await searchResults.records.map(record => {
      let atts = ['id', 'username', 'fullName', 'email'];
      let user = {};

      for (let i in atts) {
        user[atts[i]] = record.get(atts[i]);
      }

      return user;
    });
  } catch (error) {
    sails.log.error(error);

    return res.badRequest(error);
  }

  return res.json(users);
}
