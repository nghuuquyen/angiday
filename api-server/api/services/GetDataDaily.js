/**
 * @name createMongodbIndexing
 * @module services
 * @description
 * Get food, keyword, shop, FoodKeywordRelation, ShopKeywordRelation from mongoDB to Neo4j
 */

module.exports = {
    getData: getDataDaily
};

function getDataDaily() {
  const db = Keyword.getDatastore().manager;
  const keywordCollection = db.collection(Keyword.tableName);
  const foodCollection = db.collection(Food.tableName);
  const shopCollection = db.collection(Shop.tableName);
  const foodKeywordRelationCollection = db.collection(FoodKeywordRelation.tableName);
  const shopKeywordRelationCollection = db.collection(ShopKeywordRelation.tableName);
  sails.log("get Data from mongodb");

}