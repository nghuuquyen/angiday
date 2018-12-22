const NEO4J_USERNAME = process.env.NEO4J_USERNAME || 'neo4j';
const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD || 'neo4j';
const NEO4J_CONNECT_STRING = process.env.NEO4J_CONNECTION_STRING || 'bolt://localhost:7687';

const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver(NEO4J_CONNECT_STRING, neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD));
const _ = require('lodash');

/**
* User.js
*
* @description ::
*/

module.exports = {
  schema: true,
  attributes: {
    email: {
      type: 'string',
      required: true
    },
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    fullName: {
      type: 'string'
    },
    aboutMe: {
      type: 'string'
    },
    profile: {
      type: 'string'
    },
    profileImage: {
      type: 'json',
      defaultsTo: {}
    },
    profileCoverImage: {
      type: 'json',
      defaultsTo: {}
    },
    password: {
      type: 'string',
      required: true
    },
    isActive: {
      type: 'boolean',
      defaultsTo: true
    },
    roles: {
      type: 'json'
    }
  },
  beforeCreate: async function (values, proceed) {
    values.password = UserServices.hashUserPassword(values.password);
    // If user role not set, doing set default to 'user'.
    if (!values.roles) {
      values.roles = ['user'];
    }

    return proceed();
  },
  afterCreate: async function (values, proceed) {
    //sails.log.debug('Start afterCreate user create.', values);

    const session = driver.session();
    let inserString = `
          MERGE (u:User { id: '${ values.id}' })
          SET u.username = '${values.username}',
              u.fullName = '${values.fullName}',
              u.email = '${values.email}'
        `;
    //sails.log.debug('Cypher string ', inserString);

    await session.run(inserString);
    await session.close();

    return proceed();
  }
};
