/**
 * @name Neo4jService
 * @description
 * Neo4j connection and
 */
const NEO4J_HOST = process.env.NEO4J_HOST || '127.0.0.1';
const NEO4J_PORT = process.env.NEO4J_PORT || '7687';
const NEO4J_CONNECT_PROTOCOL = process.env.NEO4J_CONNECT_PROTOCOL || 'bolt';
const NEO4J_USERNAME = process.env.NEO4J_USERNAME || 'neo4j';
const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD || 'neo4j';

const CONNECT_STRING = `${NEO4J_CONNECT_PROTOCOL}://${NEO4J_HOST}:${NEO4J_PORT}`;

module.exports = {
  getConnectionString,
  getAuthConfig
};

/**
 * @name getConnectionString
 * @description
 * Get Neo4j connection string.
 */
function getConnectionString() {
  return CONNECT_STRING;
}

/**
 * @name getAuthConfig
 * @description
 * Return username and password for connection.
 */
function getAuthConfig() {
  return {
    username: NEO4J_USERNAME,
    password: NEO4J_PASSWORD
  };
}
