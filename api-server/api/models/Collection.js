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
 * Application collection model.
 */
module.exports = {
  tableName: 'collection',
  attributes: {
    name: {
      type: 'string'
    },
    code: {
      type: 'string',
      unique: true
    },
    description: {
      type: 'string'
    },
    imageUrl: {
      type: 'string'
    },
    foods: {
      collection: 'food',
      via: 'collection',
      through: 'foodcollectionrelation'
    }
  },
  afterCreate: async function (values, proceed) {
    //sails.log.debug('Start afterCreate collection create.', values);

    const session = driver.session();
    let inserString = `
      MERGE (c:Collection { id: '${ values.id }' })
      SET c.name = '${values.name}',
          c.code = '${values.code}',
          c.imageUrl = '${values.imageUrl}'
    `;
    //sails.log.debug('Cypher string ', inserString);

    await session.run(inserString);
    await session.close();

    return proceed();
  }
};
