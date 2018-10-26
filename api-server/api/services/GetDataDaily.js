/**
 * @name getDataDaily
 * @module services
 * @description
 * Get food, keyword, shop, FoodKeywordRelation, FoodShopRelation, ShopKeywordRelation from mongoDB to Neo4j
 */

const schedule = require('node-schedule');

module.exports = {
    getData: getDataDaily
};

function getDataDaily() {
  let getData = schedule.scheduleJob('*/1 * * * *', async function(){
    let currentTime = new Date().getTime();
    let foods = await Food.find(
      {
        updatedAt: {
          '>=': currentTime - 86400000,
          '<' : currentTime - 1000,
        }
      }
    );

    let keywords = await Keyword.find(
      {
        updatedAt: {
          '>=': currentTime - 86400000,
          '<' : currentTime - 1000,
        }
      }
    );

    let shops = await Shop.find(
      {
        updatedAt: {
          '>=': currentTime - 86400000,
          '<' : currentTime - 1000,
        }
      }
    );

    let foodKeywordRelations  = await FoodKeywordRelation.find(
      {
        updatedAt: {
          '>=': currentTime - 86400000,
          '<' : currentTime - 1000,
        }
      }
    );

    let foodShopRelations  = await FoodShopRelation.find(
      {
        updatedAt: {
          '>=': currentTime - 86400000,
          '<' : currentTime - 1000,
        }
      }
    );

    let shopKeywordRelations  = await ShopKeywordRelation.find(
      {
        updatedAt: {
          '>=': currentTime - 86400000,
          '<' : currentTime - 1000,
        }
      }
    );



  });

  sails.log("get Data from mongodb");

}