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
 * Application keyword model.
 */
module.exports = {
  attributes: {
    name: {
      type: 'string',
      unique: true
    },
    code: {
      type: 'string',
      unique: true
    },
    description: {
      type: 'string'
    },
    /**
     * Valid type is `search` or `criterial`
     */
    type: {
      type: 'string'
    },
    /**
     * Only effect if keyword has type `criterial`. This field will containt
     * action name which will excute to calculating addition scores for this
     * word on search results.
     */
    action: {
      model: 'keywordaction'
    },
    foods: {
      collection: 'food',
      via: 'keyword',
      through: 'foodkeywordrelation'
    }
  },
  afterCreate: async function (values, proceed) {
    //sails.log.debug('Start afterCreate keyword create.', values);

    const session = driver.session();
    let inserString = `
      MERGE (k:Keyword { id: '${ values.id }' })
      SET k.name = '${values.name}',
          k.code = '${values.code}'
    `;
    //sails.log.debug('Cypher string ', inserString);

    await session.run(inserString);
    await session.close();

    return proceed();
  }
};
