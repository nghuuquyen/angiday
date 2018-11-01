/**
 * @name getDataDaily
 * @module services
 * @description
 * Get food, keyword, shop, FoodKeywordRelation, FoodShopRelation from mongoDB to Neo4j
 */

const schedule = require('node-schedule');
const neo4j = require('neo4j-driver').v1;
const driver = neo4j.driver("bolt://neo4j:7687", neo4j.auth.basic("neo4j", "annq"));

module.exports = {
  getData: getDataDaily
};

async function getDataDaily() {

  await getAndInsetFood(0);
  await getAndInsetKeyword(0);
  await getAndInsetShop(0);
  await getAndInsetFoodKeywordRelation(0);
  await getAndInsetFoodShopRelation(0);

  schedule.scheduleJob('*/5 * * * *', async function () {
    let currentTime = new Date().getTime();
    await getAndInsetFood(currentTime);
    await getAndInsetKeyword(currentTime);
    await getAndInsetShop(currentTime);
    await getAndInsetFoodKeywordRelation(currentTime);
    await getAndInsetFoodShopRelation(currentTime);
  });
}

async function getAndInsetFood(timesamp) {
  let check = timesamp > 0 ?
    {
      updatedAt: {
        '>=': timesamp - 5 * 60 * 1000,
        '<': timesamp - 1 * 1000,
      }
    } : {};

  let foods = [];

  try {
    foods = await Food.find(check);
  } catch (error) {
    sails.log.error(error);
  }

  const session = driver.session();
  if (session == null) {
    sails.log.error("Connect neo4j that bai");
    return
  }

  let tx = session.beginTransaction();

  // Insert food
  let success = false;
  for (let i = 0; i < foods.length; i++) {
    let food = foods[i];
    let foodItem = null;
    try {
      const cypherStr = `
        MERGE (food:Food {id: {id}})
        SET food += {name: {name},
            description: {description},
            createdAt: {createdAt},
            updatedAt: {updatedAt}}
        RETURN food.name AS name`;

      const params = {
        id: food.id,
        name: food.name,
        description: food.description,
        createdAt: food.createdAt,
        updatedAt: food.updatedAt
      };

      foodItem = await tx.run(cypherStr, params);
      if (foodItem) success = true;
    } catch (error) {
      sails.log.error(error);
    }
  }

  if (success) {
    let foodCommit = null;
    try {
      foodCommit = await tx.commit();
      if (foodCommit) {
        sails.log.info("Insert food to neo4j successfully.")
        session.close();
      }
    } catch (error) {
      sails.log.error(error);
    }

  } else {
    sails.log.info('rolled insert food task back.');
    tx.rollback();
  }

}

async function getAndInsetKeyword(timesamp) {
  let check = timesamp > 0 ?
    {
      updatedAt: {
        '>=': timesamp - 5 * 60 * 1000,
        '<': timesamp - 1 * 1000,
      }
    } : {};
  let keywords = [];
  try {
    keywords = await Keyword.find(check);
  } catch (error) {
    sails.log.error(error);
  }


  const session = driver.session();
  if (session == null) {
    sails.log.error("Connect neo4j that bai");
    return
  }

  let tx = session.beginTransaction();

  //Insert food
  let success = false;
  for (let i = 0; i < keywords.length; i++) {
    let keyword = keywords[i];
    let keywordItem = null;
    try {
      const cypherStr = `
        MERGE (keyword:Keyword {id: {id}})
        SET keyword+={name: {name},
            description: {description},
            createdAt: {createdAt},
            updatedAt: {updatedAt},
            type: {type}, action: {action}}
        RETURN keyword.name AS name`;

      const params = {
        id: keyword.id,
        name: keyword.name,
        description: keyword.description,
        createdAt: keyword.createdAt,
        updatedAt: keyword.updatedAt,
        type: keyword.type,
        action: keyword.action ? keyword.action : ''
      };

      keywordItem = await tx.run(cypherStr, params);
      if (keywordItem) {
        success = true;
      }
    } catch (error) {
      sails.log.error(error);
    }

  }
  if (success) {
    let keywordCommit = null;
    try {
      keywordCommit = await tx.commit();
      if (keywordCommit) {
        sails.log.info("Insert keyword success")
        session.close();
      }
    } catch (error) {
      sails.log.error(error);
    }

  } else {
    sails.log.info('rolled back');
    tx.rollback();
  }

}

async function getAndInsetShop(timesamp) {
  let check = timesamp > 0 ?
    {
      updatedAt: {
        '>=': timesamp - 5 * 60 * 1000,
        '<': timesamp - 1 * 1000,
      }
    } : {};
  let shops = [];
  try {
    shops = await Shop.find(check);
  } catch (error) {
    sails.log.error(error);
  }


  const session = driver.session();
  if (session == null) {
    sails.log.error("Connecting to Neo4j failed.");
    return;
  }

  let tx = session.beginTransaction();

  // Insert shop
  let success = false;
  for (let i = 0; i < shops.length; i++) {
    let shop = shops[i];
    let shopItem = null;
    try {
      const cypherStr = `
        MERGE (shop:Shop {id: {id}})
        SET shop+={name: {name},
            description: {description},
            createdAt: {createdAt},
            updatedAt: {updatedAt},
            address: {address}}
        RETURN shop.name AS name`;

      const params = {
        id: shop.id,
        name: shop.name,
        description: shop.description,
        createdAt: shop.createdAt,
        updatedAt: shop.updatedAt,
        address: shop.address
      };

      shopItem = await tx.run(cypherStr, params);
      if (shopItem)
        success = true;
    } catch (error) {
      sails.log.error(error);
    }

  }
  if (success) {
    let shopCommit = null;
    try {
      shopCommit = await tx.commit();
      if (shopCommit) {
        sails.log.info("Insert shop success")
        session.close();
      }
    } catch (error) {
      sails.log.error(error);
    }

  } else {
    sails.log.info('rolled back');
    tx.rollback();
  }
}

async function getAndInsetFoodKeywordRelation(timesamp) {
  let check = timesamp > 0 ?
    {
      updatedAt: {
        '>=': timesamp - 5 * 60 * 1000,
        '<': timesamp - 1 * 1000,
      }
    } : {};

  let foodKeywordRelations = [];
  try {
    foodKeywordRelations = await FoodKeywordRelation.find(check);
  } catch (error) {
    sails.log.error(error);
  }
  const session = driver.session();
  if (session == null) {
    sails.log.error("Connect neo4j that bai");
    return
  }

  let tx = session.beginTransaction();

  // Insert food keyword relationship
  let success = false;
  for (let i = 0; i < foodKeywordRelations.length; i++) {
    let foodKeywordRelation = foodKeywordRelations[i];
    try {
      const cypherStr = `
        MATCH (f:Food), (k:Keyword)
        WHERE f.id = {foodID} AND k.id= {keywordID} WITH f,k
        MERGE (f)-[ph:RELATED]->(k)
        SET ph+={ scores: {scores},
            createdAt: {createdAt},
            updatedAt: {updatedAt}} RETURN ph`;

      const params = {
        id: foodKeywordRelation.id,
        foodID: foodKeywordRelation.food,
        keywordID: foodKeywordRelation.keyword,
        createdAt: foodKeywordRelation.createdAt,
        updatedAt: foodKeywordRelation.updatedAt,
        scores: foodKeywordRelation.scores
      };
      let foodKeywordRelationItem = await tx.run(cypherStr, params);

      if (foodKeywordRelationItem) {
        success = true;
      }
    } catch (error) {
      sails.log.error(error);
    }

  }
  if (success) {
    let foodKeywordRelationCommit
    try {
      foodKeywordRelationCommit = await tx.commit();
    } catch (error) {
      sails.log.error(error);
    }

    if (foodKeywordRelationCommit) {
      sails.log.info("Insert food keyword relation success")
      session.close();
    }
  } else {
    sails.log.info('rolled back');
    tx.rollback();
  }

}

async function getAndInsetFoodShopRelation(timesamp) {
  let check = timesamp > 0 ?
    {
      updatedAt: {
        '>=': timesamp - 5 * 60 * 1000,
        '<': timesamp - 1 * 1000,
      }
    } : {};
  let foodShopRelations = [];
  try {
    foodShopRelations = await FoodShopRelation.find(check);
  } catch (error) {
    sails.log.error(error);
  }

  const session = driver.session();
  if (session == null) {
    sails.log.error("Connect neo4j that bai");
    return
  }

  let tx = session.beginTransaction();

  // Insert food shop relationship
  let success = false;
  for (let i = 0; i < foodShopRelations.length; i++) {
    let foodShopRelation = foodShopRelations[i];
    let foodShopRelationItem = null;
    try {
      const cypherStr = `
        MATCH (f:Food), (s:Shop)
        WHERE f.id = {foodID} AND s.id= {shopID} WITH f,s
        MERGE (s)-[pv:SERVED{id: {id}}]->(f)
        SET pv+={scores: {scores},
            createdAt: {createdAt},
            updatedAt: {updatedAt}}
        RETURN pv`;

      const params = {
        id: foodShopRelation.id,
        foodID: foodShopRelation.food,
        shopID: foodShopRelation.shop,
        createdAt: foodShopRelation.createdAt,
        updatedAt: foodShopRelation.updatedAt,
        scores: foodShopRelation.scores
      };

      foodShopRelationItem = await tx.run(cypherStr, params);

      if (foodShopRelationItem)
        success = true;
    } catch (error) {
      sails.log.error(error);
    }
  }

  if (success) {
    let foodShopRelationCommit = null;

    try {
      foodShopRelationCommit = await tx.commit();
      if (foodShopRelationCommit) {
        sails.log.info("Insert food shop relation success")
        session.close();
      }
    } catch (error) {
      sails.log.error(error);
    }
  } else {
    sails.log.error('rolled back');
    tx.rollback();
  }
}
