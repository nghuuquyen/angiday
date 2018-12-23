const NEO4J_USERNAME = process.env.NEO4J_USERNAME || 'neo4j';
const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD || 'neo4j';
const NEO4J_CONNECT_STRING = process.env.NEO4J_CONNECTION_STRING || 'bolt://localhost:7687';

const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver(NEO4J_CONNECT_STRING, neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD));
const _ = require('lodash');

module.exports = {
  keywordInteractiveLog,
  foodInteractiveLog
};


async function keywordInteractiveLog(username, keywordId, actionType) {
  sails.log.debug('Start: keywordInteractiveLog', username, keywordId, actionType);
  let scores = 0;
  if (actionType === 'vote') scores = 5;
  if (actionType === 'search') scores = 3;
  if (actionType === 'click') scores = 4;

  let u = await User.findOne({ or: [{ username: username }, { id: username }] });
  let k = await Keyword.findOne({ id: keywordId });
  sails.log.debug(u,k);

  if (!u || !k) return;

  const session = driver.session();
  let inserString = `
    MATCH (u:User { id: '${ u.id}' }), (k:Keyword { id: '${k.id}' })
    MERGE (u)-[r:INTERACTIVE]->(k)
    ON MATCH  SET r.scores  = r.scores + ${scores}
    ON CREATE SET r.scores = ${scores}
  `;
  sails.log.debug('Cypher string ', inserString);

  await session.run(inserString);
  await session.close();

  sails.log.debug('Done: keywordInteractiveLog', username, keywordId, actionType);

  return true;
}

async function foodInteractiveLog(username, foodId, actionType) {
  sails.log.debug('Start: foodInteractiveLog', username, foodId, actionType);
  let scores = 0;
  if (actionType === 'vote') scores = 5;
  if (actionType === 'search') scores = 3;
  if (actionType === 'click') scores = 4;

  let u = await User.findOne({ or: [{ username: username }, { id: username }] });
  let f = await Food.findOne({ id: foodId });
  sails.log.debug(u,f);

  if (!u || !f) return;

  const session = driver.session();
  let inserString = `
    MATCH (u:User { id: '${ u.id}' }), (f:Food { id: '${f.id}' })
    MERGE (u)-[r:INTERACTIVE]->(f)
    ON MATCH  SET r.scores  = r.scores + ${scores}
    ON CREATE SET r.scores = ${scores}
  `;
  sails.log.debug('Cypher string ', inserString);

  await session.run(inserString);
  await session.close();
  sails.log.debug('Done: foodInteractiveLog', username, foodId, actionType);

  return true;
}
