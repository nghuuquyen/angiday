const faker = require('faker');
const THRESHOLD_DUMMY = 100;
const THRESHOLD_SHOP_DUMMY = 100;
const THRESHOLD_FOOD_DUMMY = 100;

module.exports = {
  startDummyFoodShop
};

/**
 * @name startDummyShopKeyword
 * @description
 * Dummy food shop relation based threshold.
 */
async function startDummyFoodShop() {
  sails.log.debug('Do:: startDummyFoodShop');

  let total = await FoodShopRelation.count();

  if (total >= THRESHOLD_DUMMY) {
    sails.log.debug('Touch to max threshold dummy number.', THRESHOLD_DUMMY);
    sails.log.debug('Done:: startDummyFoodShop');
    return true;
  }

  let items = await getDummyFoodShopRelationList(THRESHOLD_DUMMY - total);

  for (let i in items) {
    try {
      await FoodShopRelation.create(items[i]);
    } catch (err) {
      sails.log.error(err);
    }
  }

  sails.log.debug('Done:: startDummyFoodShop');
}

async function getDummyFoodShopRelationList(limit) {
  let items = [];

  let shops = await Shop.find().limit(THRESHOLD_SHOP_DUMMY);
  let foods = await Food.find().limit(THRESHOLD_FOOD_DUMMY);

  if(shops.length < 0 || foods.length < 0 ) {
    sails.log.error('Might foods and keywords still not dummy ?');
    return;
  }

  while (limit > 0) {
    // Get random one food from collection.
    let shop = shops[Math.floor(Math.random() * shops.length)];
    let food = foods[Math.floor(Math.random() * foods.length)];

    let item = {
      shop: shop.id,
      food: food.id,
      scores: Math.round(faker.random.number())
    };

    items.push(item);
    limit--;
  }

  return items;
}



