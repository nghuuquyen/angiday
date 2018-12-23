const DummyUser = require('./dummy/DummyUser');
const DummyFood = require('./dummy/DummyFood');
const DummyKeyword = require('./dummy/DummyKeyword');
const DummyCollection = require('./dummy/DummyCollection');
const DummyRecipe = require('./dummy/DummyRecipe');
const DummyFoodKeyword = require('./dummy/DummyFoodKeyword');
const DummyShopKeyword = require('./dummy/DummyShopKeyword');
const DummyFoodShop = require('./dummy/DummyFoodShop');
const DummyUserCollection = require('./dummy/DummyUserCollection');
const DummyShop = require('./dummy/DummyShop');

module.exports = {
  startDummy
}

/**
 * @name startDummy
 * @description
 * Start application dummy jobs.
 */
async function startDummy() {
  // Dummy Group 1
  await DummyUser.startDummyUsers();
  await DummyFood.startDummyFoods();
  await DummyKeyword.startDummyKeyword();
  await DummyShop.startDummyShop();

  // Dummy Group 2 (This one is depend on previous group).
  await DummyRecipe.startDummyRecipe();
  await DummyCollection.startDummyCollection();
  await DummyFoodKeyword.startDummyFoodKeyword();
  await DummyShopKeyword.startDummyShopKeyword();
  await DummyFoodShop.startDummyFoodShop();
  await DummyUserCollection.startDummyUserCollection();
}
