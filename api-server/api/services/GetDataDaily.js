/**
 * @name getDataDaily
 * @module services
 * @description
 * Get food, keyword, shop, FoodKeywordRelation, FoodShopRelation, ShopKeywordRelation from mongoDB to Neo4j
 */

const schedule = require('node-schedule');
const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "annq"));
const session = driver.session();
if(session != null) {
  console.log("Connect neo4j thanh cong");
}
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

    let tx = session.beginTransaction();
    
    foods.forEach((food) => {
      tx.run("MERGE (food:Food {_id : {_id}, name: {name}, description: {description} }) RETURN food.name AS name", {_id: food._id, name: food.name, description: food.description})
      .subscribe({
        onNext: function (record) {
          console.log(record.get('name'));
        },
        onCompleted: function () {
          console.log('First query completed');
        },
        onError: function (error) {
          console.log(error);
        }
      });
    });

    tx.commit()
    .subscribe({
      onCompleted: function () {
        console.log("Create Success")
        session.close();
      },
      onError: function (error) {
        console.log(error);
      }
    });

  });

  sails.log("get Data from mongodb");

}