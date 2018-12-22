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
 * Application user ollection model.
 */
module.exports = {
  tableName: 'user_collection',
  attributes: {
    user: {
      model: 'user'
    },
    collection: {
      model: 'collection'
    },
    scores: {
      type: 'number'
    },
    /**
     * following or created
     */
    relationship: {
      type: 'string',
      defaultsTo: 'following'
    }
  },
  afterCreate: async function (values, proceed) {
    //sails.log.debug('Start afterCreate user collection create.', values);

    const session = driver.session();
    let inserString = `
      MATCH (u:User { id: '${ values.user }' }), (c:Collection { id: '${ values.collection }' })
      MERGE (u)-[r:FOLLOW]->(c)
    `;
    //sails.log.debug('Cypher string ', inserString);

    await session.run(inserString);
    await session.close();

    return proceed();
  },
  afterDestroy: async function (values, proceed) {
    //sails.log.debug('Start afterCreate user collection create.', values);

    const session = driver.session();
    let inserString = `
      MATCH (:User { id: '${ values.user }' })-[r:FOLLOW]->(:Collection { id: '${ values.collection }' })
      DELETE r
    `;
    //sails.log.debug('Cypher string ', inserString);

    await session.run(inserString);
    await session.close();

    return proceed();
  }
};
