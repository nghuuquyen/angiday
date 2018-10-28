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

function getDataDaily() {
  
  getAndInsetFood(0);
  getAndInsetKeyword(0);
  getAndInsetShop(0);
  getAndInsetFoodKeywordRelation(0);
  getAndInsetFoodShopRelation(0);
  
  let getDataSchedule = schedule.scheduleJob('*/5 * * * *', function(){

    let currentTime = new Date().getTime();
    getAndInsetFood(currentTime);
    getAndInsetKeyword(currentTime);
    getAndInsetShop(currentTime);
    getAndInsetFoodKeywordRelation(currentTime);
    getAndInsetFoodShopRelation(currentTime);
  });
}

async function getAndInsetFood(timesamp) {
  
  let check = timesamp > 0 ? 
              {
                updatedAt: {
                '>=': timesamp - 5*60*1000,
                '<' : timesamp - 1*1000,
                }
              } : {}

  let foods = await Food.find(check);

  const session = driver.session();
  if(session == null) {
    console.log("Connect neo4j that bai");
    return
  }

  let tx = session.beginTransaction();

  //Insert food
  let success = false;
  for(let i = 0 ; i < foods.length; i++) {
    let food = foods[i];
    let foodItem = await tx.run("MERGE (food:Food {id: {id}}) SET food += {name: {name}, description: {description}, createdAt: {createdAt}, updatedAt: {updatedAt}} RETURN food.name AS name", 
                                {id: food.id, name: food.name, description: food.description, createdAt: food.createdAt, updatedAt: food.updatedAt});
    if(foodItem) {
      success = true;
    }
  }
  if(success){
    let foodCommit = await tx.commit();
    if(foodCommit) {
      console.log("Insert food success")
      session.close();
    }
  } else {
    console.log('rolled back');
    tx.rollback();
  }

}

async function getAndInsetKeyword(timesamp) {
  let check = timesamp > 0 ? 
  {
    updatedAt: {
    '>=': timesamp - 5*60*1000,
    '<' : timesamp - 1*1000,
    }
  } : {};
  let keywords = await Keyword.find(check);

  const session = driver.session();
  if(session == null) {
    console.log("Connect neo4j that bai");
    return
  }

  let tx = session.beginTransaction();

  //Insert food
  let success = false;
  for(let i = 0 ; i < keywords.length; i++) {
    let keyword = keywords[i];
    let keywordItem = await tx.run("MERGE (keyword:Keyword {id: {id}}) SET keyword+={name: {name}, description: {description}, createdAt: {createdAt}, updatedAt: {updatedAt}, type: {type}, action: {action}} RETURN keyword.name AS name", 
                                {id: keyword.id, name: keyword.name, description: keyword.description, createdAt: keyword.createdAt, updatedAt: keyword.updatedAt, type: keyword.type, action: keyword.action ? keyword.action : ''});
    if(keywordItem) {
      success = true;
    }
  }
  if(success){
    let keywordCommit = await tx.commit();
    if(keywordCommit) {
      console.log("Insert keyword success")
      session.close();
    }
  } else {
    console.log('rolled back');
    tx.rollback();
  }

}

async function getAndInsetShop(timesamp) {
  let check = timesamp > 0 ? 
  {
    updatedAt: {
    '>=': timesamp - 5*60*1000,
    '<' : timesamp - 1*1000,
    }
  } : {};
  let shops = await Shop.find(check);

  const session = driver.session();
  if(session == null) {
    console.log("Connect neo4j that bai");
    return
  }

  let tx = session.beginTransaction();

  //Insert food
  let success = false;
  for(let i = 0 ; i < shops.length; i++) {
    let shop = shops[i];
    let shopItem = await tx.run("MERGE (shop:Shop {id: {id}}) SET shop+={name: {name}, description: {description}, createdAt: {createdAt}, updatedAt: {updatedAt}, address: {address}} RETURN shop.name AS name", 
                                {id: shop.id, name: shop.name, description: shop.description, createdAt: shop.createdAt, updatedAt: shop.updatedAt, address: shop.address});
    if(shopItem) {
      success = true;
    }
  }
  if(success){
    let shopCommit = await tx.commit();
    if(shopCommit) {
      console.log("Insert shop success")
      session.close();
    }
  } else {
    console.log('rolled back');
    tx.rollback();
  }
}

async function getAndInsetFoodKeywordRelation(timesamp) {
  let check = timesamp > 0 ? 
  {
    updatedAt: {
    '>=': timesamp - 5*60*1000,
    '<' : timesamp - 1*1000,
    }
  } : {};
  let foodKeywordRelations  = await FoodKeywordRelation.find(check);

  const session = driver.session();
  if(session == null) {
    console.log("Connect neo4j that bai");
    return
  }

  let tx = session.beginTransaction();

  //Insert food keyword relationship
  let success = false;
  for(let i = 0 ; i < foodKeywordRelations.length; i++) {
    let foodKeywordRelation = foodKeywordRelations[i];
    let foodKeywordRelationItem = await tx.run("MATCH (f:Food), (k:Keyword) WHERE f.id = {foodID} AND k.id= {keywordID} WITH f,k MERGE (f)-[ph:PHU_HOP{id: {id}, scores: 0, createdAt: {createdAt}, updatedAt: {updatedAt}}]->(k) SET ph.scores = {scores} RETURN ph", 
                                {id: foodKeywordRelation.id, foodID: foodKeywordRelation.food, keywordID: foodKeywordRelation.keyword, createdAt: foodKeywordRelation.createdAt, updatedAt: foodKeywordRelation.updatedAt, scores: foodKeywordRelation.scores});
    if(foodKeywordRelationItem) {
      success = true;
    }
  }
  if(success){
    let foodKeywordRelationCommit = await tx.commit();
    if(foodKeywordRelationCommit) {
      console.log("Insert food keyword relation success")
      session.close();
    }
  } else {
    console.log('rolled back');
    tx.rollback();
  }

}

async function getAndInsetFoodShopRelation(timesamp) {
  let check = timesamp > 0 ? 
  {
    updatedAt: {
    '>=': timesamp - 5*60*1000,
    '<' : timesamp - 1*1000,
    }
  } : {};
  let foodShopRelations  = await FoodShopRelation.find(check);

  const session = driver.session();
  if(session == null) {
    console.log("Connect neo4j that bai");
    return
  }

  let tx = session.beginTransaction();

  //Insert food shop relationship
  let success = false;
  for(let i = 0 ; i < foodShopRelations.length; i++) {
    let foodShopRelation = foodShopRelations[i];
    let foodShopRelationItem = await tx.run("MATCH (f:Food), (s:Shop) WHERE f.id = {foodID} AND s.id= {shopID} WITH f,s MERGE (s)-[pv:PHUC_VU{id: {id}, scores: 0, createdAt: {createdAt}, updatedAt: {updatedAt}}]->(f) SET pv.scores = {scores} RETURN pv", 
                                {id: foodShopRelation.id, foodID: foodShopRelation.food, shopID: foodShopRelation.shop, createdAt: foodShopRelation.createdAt, updatedAt: foodShopRelation.updatedAt, scores: foodShopRelation.scores});
    if(foodShopRelationItem) {
      success = true;
    }
  }
  if(success){
    let foodShopRelationCommit = await tx.commit();
    if(foodShopRelationCommit) {
      console.log("Insert food shop relation success")
      session.close();
    }
  } else {
    console.log('rolled back');
    tx.rollback();
  }

}
