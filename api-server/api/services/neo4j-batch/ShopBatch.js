const NEO4J_USERNAME = process.env.NEO4J_USERNAME || 'neo4j';
const NEO4J_PASSWORD = process.env.NEO4J_PASSWORD || 'neo4j';
const NEO4J_CONNECT_STRING = process.env.NEO4J_CONNECTION_STRING || 'bolt://localhost:7687';

const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver(NEO4J_CONNECT_STRING, neo4j.auth.basic(NEO4J_USERNAME, NEO4J_PASSWORD));
const BATCH_NAME = 'shop_daily_import_to_neo4j'
const LIMIT_RECORD_EACH_BATCH = 500;
const _ = require('lodash');

module.exports = {
  start
}

async function start() {
  sails.log.debug('Starting', BATCH_NAME, 'batch' , new Date());

  let batchCheckpoint = await BatchCheckpoint
    .findOrCreate({ batchName: BATCH_NAME }, { batchName: BATCH_NAME, checkpoint: null });

  let queryConds = {};

  if (batchCheckpoint && batchCheckpoint.checkpoint) {
    queryConds.updatedAt = {
      '>=': batchCheckpoint.checkpoint
    };
  }

  let totalRecords = await Shop.count(queryConds);
  let processedRecords = 0;
  let lastUpdatedCheckPoint = null;

  sails.log.debug('Total record is', totalRecords);
  sails.log.debug('Checkpoint', batchCheckpoint.batchName, batchCheckpoint.checkpoint);

  while (totalRecords > 0) {
    const session = driver.session();

    let records = await Shop.find(queryConds)
      .limit(LIMIT_RECORD_EACH_BATCH)
      .sort('updatedAt ASC');

    let inserString = buildInserString(records);

    try {
      sails.log.debug('Insert data to neo4j');
      await session.run(inserString);
      await session.close();

    } catch (err) {
      sails.log.error(err);
      if (session) await session.close();
      return;
    }

    // Save last updated
    if (records.length > 0) {
      lastUpdatedCheckPoint = records[records.length - 1].updatedAt;
      // Update query condition for next query.
      queryConds.updatedAt = {
        '>=': lastUpdatedCheckPoint
      };
    }

    processedRecords += records.length;
    totalRecords -= records.length;

    sails.log.debug('records.length', records.length);
    sails.log.debug('processedRecords', processedRecords);
    sails.log.debug('totalRecords', totalRecords);
  }

  if (lastUpdatedCheckPoint) {
    sails.log.debug(BATCH_NAME, 'save checkpoint', lastUpdatedCheckPoint);
    // Save checkpoint.
    await BatchCheckpoint.update({ batchName: BATCH_NAME }, { checkpoint: lastUpdatedCheckPoint });
  }
}

function buildInserString(records) {
  let batchInserStr = `
    WITH [
  `;

  for (let i in records) {
    let shop = records[i];
    let batchItemStr = `{
      id: '${shop.id}',
      name: '${_.escape(shop.name)}',
      address: '${_.escape(shop.address)}'
    }`;

    if (i == (records.length - 1)) {
      batchInserStr += batchItemStr;
    } else {
      batchInserStr += batchItemStr + ',\n';
    }
  }

  batchInserStr += `
    ] AS batchs
    UNWIND batchs AS batch
    MERGE (s:Shop { id: batch.id })
    SET s.name = batch.name,
        s.address = batch.address,
        s.description = batch.description
  `;

  return batchInserStr;
}



