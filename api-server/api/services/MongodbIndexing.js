/**
 * @name createMongodbIndexing
 * @module services
 * @description
 * Create mongodb indexing for full text search.
 */
module.exports = {
  doIndexing: createMongodbIndexing
};

/**
 * @name createMongodbIndexing
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @description
 * Create mongodb indexing for full-text search.
 */
function createMongodbIndexing() {
  const db = Keyword.getDatastore().manager;
  const keywordCollection = db.collection(Keyword.tableName);
  const foodCollection = db.collection(Food.tableName);
  const shopCollection = db.collection(Shop.tableName);

  sails.log('Do create indexing for mongodb database.');
  // Create indexing on keyword.
  keywordCollection.createIndex({
    "name": "text",
    "description": "text"
  });

  // Create indexing on food.
  foodCollection.createIndex({
    "name": "text",
    "description": "text"
  });

  // Create indexing on shop.
  shopCollection.createIndex({
    "name": "text",
    "description": "text"
  });

  sails.log('Done create indexing for mongodb database.');
}
