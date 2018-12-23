const faker = require('faker');
const THRESHOLD_DUMMY = 100;

module.exports = {
  startDummyShop
};

/**
 * @name startDummyKeyword
 * @description
 * Dummy keyword based threshold.
 */
async function startDummyShop() {
  sails.log.debug('Do:: startDummyShop');

  let total = await Shop.count();

  if (total >= THRESHOLD_DUMMY) {
    sails.log.debug('Touch to max threshold dummy number.', THRESHOLD_DUMMY);
    sails.log.debug('Done:: startDummyShop');
    return true;
  }

  let items = getDummyShopList(THRESHOLD_DUMMY - total);

  for (let i in items) {
    await Shop.create(items[i]);
  }

  sails.log.debug('Done:: startDummyShop');
}

function getDummyShopList(limit) {
  let items = [];

  while (limit > 0) {
    let item = {
      name: faker.name.title(),
      description: faker.lorem.paragraphs(),
      address: faker.address.streetAddress(),
      foods: [],
      links: [],
      images: getRandomListImages()
    };

    items.push(item);
    limit--;
  }

  return items;
}

function getRandomListImages() {
  let numberOfImages = Math.floor(Math.random() * 100);
  let images = [];

  for(let i=0; i < numberOfImages; i++) {
    images.push({
      title: faker.name.title(),
      url: faker.image.food()
    });
  }

  return images;
}




