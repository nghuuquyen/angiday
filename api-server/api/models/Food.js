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
 * Application food model.
 */
module.exports = {
  tableName: 'food',
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
    keywords: {
      collection: 'keyword',
      via: 'food',
      through: 'foodkeywordrelation'
    },
    recipes: {
      collection: 'recipe',
      via: 'food'
    },
    shops: {
      collection: 'shop',
      via: 'food',
      through: 'foodshoprelation'
    },
    collections: {
      collection: 'collection',
      via: 'food',
      through: 'foodcollectionrelation'
    },
    imageUrl: {
      type: 'string'
    },
    image: {
      type: 'json'
    },
    eShops: {
      type: 'json'
    },
    eRecipes: {
      type: 'json'
    }
  },
  afterCreate: async function (values, proceed) {
    //sails.log.debug('Start afterCreate food create.', values);

    const session = driver.session();
    let inserString = `
      MERGE (f:Food { id: '${ values.id }' })
      SET f.name = '${values.name}',
          f.code = '${values.code}',
          f.imageUrl = '${values.imageUrl}'
    `;
    //sails.log.debug('Cypher string ', inserString);

    await session.run(inserString);
    await session.close();

    return proceed();
  }
};
