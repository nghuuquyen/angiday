const faker = require('faker');
const THRESHOLD_DUMMY = 10000;
const THRESHOLD_SHOP_DUMMY = 5000;
const THRESHOLD_KEYWORD_DUMMY = 5000;

module.exports = {
  startDummyShopKeyword
};

/**
 * @name startDummyShopKeyword
 * @description
 */
async function startDummyShopKeyword() {
  sails.log.debug('Do:: startDummyShopKeyword');

  let total = await ShopKeywordRelation.count();

  if (total >= THRESHOLD_DUMMY) {
    sails.log.debug('Touch to max threshold dummy number.', THRESHOLD_DUMMY);
    sails.log.debug('Done:: startDummyShopKeyword');
    return true;
  }

  let items = await getDummyShopKeywordRelationList(THRESHOLD_DUMMY - total);

  for (let i in items) {
    try {
      await ShopKeywordRelation.create(items[i]);
    } catch (err) {
      sails.log.error(err);
    }
  }

  sails.log.debug('Done:: startDummyShopKeyword');
}

async function getDummyShopKeywordRelationList(limit) {
  let items = [];

  let shops = await Shop.find().limit(THRESHOLD_SHOP_DUMMY);
  let keywords = await Keyword.find().limit(THRESHOLD_KEYWORD_DUMMY);

  while (limit > 0) {
    // Get random one food from collection.
    let shop = shops[Math.floor(Math.random() * shops.length)];
    let keyword = keywords[Math.floor(Math.random() * keywords.length)];

    let item = {
      shop: shop.id,
      keyword: keyword.id,
      scores: Math.round(faker.random.number())
    };

    items.push(item);
    limit--;
  }

  return items;
}



