const faker = require('faker');
const THRESHOLD_DUMMY = 100;
const THRESHOLD_FOOD_DUMMY = 100;

module.exports = {
  startDummyCollection
};

/**
 * @name startDummyKeyword
 * @description
 * Dummy keyword based threshold.
 */
async function startDummyCollection() {
  sails.log.debug('Do:: startDummyCollection');

  let total = await Collection.count();

  if (total >= THRESHOLD_DUMMY) {
    sails.log.debug('Touch to max threshold dummy number.', THRESHOLD_DUMMY);
    sails.log.debug('Done:: startDummyCollection');
    return true;
  }

  let items = await getDummyCollectionList(THRESHOLD_DUMMY - total);

  for (let i in items) {
    await Collection.create(items[i]);
  }

  sails.log.debug('Done:: startDummyCollection');
}

async function getDummyCollectionList(limit) {
  let items = [];

  let foods = await Food.find().limit(THRESHOLD_FOOD_DUMMY);

  while (limit > 0) {
    let numberOfFoods = Math.floor(Math.random() * 100);
    let cItems = [];

    for (let j = 1; j <= numberOfFoods; j++) {
      let food = foods[Math.floor(Math.random() * foods.length)];

      cItems.push({
        id: food.id || food._id,
        name: food.name,
        type: 'food'
      });
    }

  let item = {
      name: faker.name.title() + ' ' + faker.random.words(),
      description: faker.lorem.paragraphs(),
      items: cItems
    };

    items.push(item);
    limit--;
  }

  return items;
}





