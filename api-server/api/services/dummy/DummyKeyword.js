const faker = require('faker');
const THRESHOLD_DUMMY = 100;

module.exports = {
  startDummyKeyword
};

/**
 * @name startDummyKeyword
 * @description
 * Dummy keyword based threshold.
 */
async function startDummyKeyword() {
  sails.log.debug('Do:: startDummyKeyword');

  let total = await Keyword.count();

  if (total >= THRESHOLD_DUMMY) {
    sails.log.debug('Touch to max threshold dummy number.', THRESHOLD_DUMMY);
    sails.log.debug('Done:: startDummyKeyword');
    return true;
  }

  let items = getDummyKeywordList(THRESHOLD_DUMMY - total);

  for (let i in items) {
    await Keyword.create(items[i]);
  }

  sails.log.debug('Done:: startDummyKeyword');
}

function getDummyKeywordList(limit) {
  let items = [];

  while (limit > 0) {
    let item = {
      name: faker.name.title() + ' ' + faker.random.words(),
      description: faker.lorem.paragraphs(),
      type: 'search'
    };

    items.push(item);
    limit--;
  }

  return items;
}



