const faker = require('faker');
const THRESHOLD_DUMMY = 100;
const THRESHOLD_FOOD_DUMMY = 100;
const THRESHOLD_KEYWORD_DUMMY = 100;

module.exports = {
  startDummyFoodKeyword
};

/**
 * @name startDummyFoodKeyword
 * @description
 */
async function startDummyFoodKeyword() {
  sails.log.debug('Do:: startDummyFoodKeyword');

  let total = await FoodKeywordRelation.count();

  if (total >= THRESHOLD_DUMMY) {
    sails.log.debug('Touch to max threshold dummy number.', THRESHOLD_DUMMY);
    sails.log.debug('Done:: startDummyFoodKeyword');
    return true;
  }

  let items = await getDummyFoodKeywordRelationList(THRESHOLD_DUMMY - total);

  for (let i in items) {
    try {
      await FoodKeywordRelation.create(items[i]);
    } catch (err) {
      sails.log.error(err);
    }
  }

  sails.log.debug('Done:: startDummyFoodKeyword');
}

async function getDummyFoodKeywordRelationList(limit) {
  let items = [];

  let foods = await Food.find().limit(THRESHOLD_FOOD_DUMMY);
  let keywords = await Keyword.find().limit(THRESHOLD_KEYWORD_DUMMY);

  while (limit > 0) {
    // Get random one food from collection.
    let food = foods[Math.floor(Math.random() * foods.length)];
    let keyword = keywords[Math.floor(Math.random() * keywords.length)];

    let item = {
      food: food.id,
      keyword: keyword.id,
      scores: Math.round(faker.random.number())
    };

    items.push(item);
    limit--;
  }

  return items;
}



