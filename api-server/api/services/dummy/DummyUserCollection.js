const THRESHOLD_DUMMY = 100;
const THRESHOLD_USER_DUMMY = 100;
const THRESHOLD_COLLECTION_DUMMY = 100;

module.exports = {
  startDummyUserCollection
};

/**
 * @name startDummyUserCollection
 * @description
 */
async function startDummyUserCollection() {
  sails.log.debug('Do:: startDummyFoodKeyword');

  let total = await UserCollection.count();

  if (total >= THRESHOLD_DUMMY) {
    sails.log.debug('Touch to max threshold dummy number.', THRESHOLD_DUMMY);
    sails.log.debug('Done:: startDummyFoodKeyword');
    return true;
  }

  let items = await getDummyUserCollectionList(THRESHOLD_DUMMY - total);

  for (let i in items) {
    try {
      await UserCollection.create(items[i]);
    } catch (err) {
      sails.log.error(err);
    }
  }

  sails.log.debug('Done:: startDummyUserCollection');
}

async function getDummyUserCollectionList(limit) {
  let items = [];

  let users = await User.find().limit(THRESHOLD_USER_DUMMY);
  let collections = await Collection.find().limit(THRESHOLD_COLLECTION_DUMMY);

  while (limit > 0) {
    // Get random one food from collection.
    let user = users[Math.floor(Math.random() * users.length)];
    let collection = collections[Math.floor(Math.random() * collections.length)];

    let item = {
      user: user.id,
      collection: collection.id,
      scores: Math.floor(Math.random() * 100)
    };

    items.push(item);
    limit--;
  }

  return items;
}



