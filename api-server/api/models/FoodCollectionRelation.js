const NEO4J_USERNAME = process.env.NEO4J_USERNAME || 'neo4j';
const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD || 'neo4j';
const NEO4J_CONNECT_STRING = process.env.NEO4J_CONNECTION_STRING || 'bolt://localhost:7687';

const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver(NEO4J_CONNECT_STRING, neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD));
const _ = require('lodash');

/**
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module models
 * @description
 * Application food collection relation model.
 */
module.exports = {
  tableName: 'food_collection_relation',
  schema: true,
  attributes: {
    collection: {
      model: 'collection'
    },
    food: {
      model: 'food'
    },
    scores: {
      type: 'number'
    }
  },
  afterCreate: async function (values, proceed) {
    //sails.log.debug('Start afterCreate food collection relation create.', values);

    const session = driver.session();
    let inserString = `
      MATCH (c:Collection { id: '${ values.collection }' }), (f:Food { id: '${ values.food }' })
      MERGE (c)-[:HAS]->(f)
    `;
    //sails.log.debug('Cypher string ', inserString);

    await session.run(inserString);
    await session.close();

    return proceed();
  }
};
