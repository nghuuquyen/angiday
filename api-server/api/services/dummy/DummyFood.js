const faker = require('faker');
const THRESHOLD_DUMMY = 5000;

module.exports = {
  startDummyFoods
};

/**
 * @name startDummyFoods
 * @description
 * Dummy user based threshold.
 */
async function startDummyFoods() {
  sails.log.debug('Do:: startDummyFoods');

  let total = await Food.count();

  if (total >= THRESHOLD_DUMMY) {
    sails.log.debug('Touch to max threshold dummy number.', THRESHOLD_DUMMY);
    sails.log.debug('Done:: startDummyFoods');
    return true;
  }

  let items = getDummyFoodList(THRESHOLD_DUMMY - total);

  for (let i in items) {
    await Food.create(items[i]);
  }

  sails.log.debug('Done:: startDummyFoods');
}

function getDummyFoodList(limit) {
  let items = [];

  while (limit > 0) {
    let item = {
      name: faker.name.title(),
      description: faker.lorem.paragraphs(),
      keywords: [],
      recipes: [],
      shops: [],
      image: {
        url: faker.image.food()
      }
    };

    items.push(item);
    limit--;
  }

  return items;
}


