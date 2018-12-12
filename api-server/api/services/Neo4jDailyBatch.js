const FoodBatch = require('./neo4j-batch/FoodBatch');
const ShopBatch = require('./neo4j-batch/ShopBatch');

module.exports = {
  runDailyBatchImport
}

async function runDailyBatchImport() {
  await FoodBatch.start();
  await ShopBatch.start();
}
