const faker = require('faker');
const THRESHOLD_DUMMY = 100;
const THRESHOLD_FOOD_DUMMY = 100;

module.exports = {
  startDummyRecipe
};

/**
 * @name startDummyRecipe
 * @description
 * Dummy recipe based threshold.
 */
async function startDummyRecipe() {
  sails.log.debug('Do:: startDummyRecipe');

  let total = await Recipe.count();

  if (total >= THRESHOLD_DUMMY) {
    sails.log.debug('Touch to max threshold dummy number.', THRESHOLD_DUMMY);
    sails.log.debug('Done:: startDummyRecipe');
    return true;
  }

  let items = await getDummyRecipeList(THRESHOLD_DUMMY - total);

  for (let i in items) {
    try {
      await Recipe.create(items[i]);
    } catch (err) {
      console.log(err);
    }
  }

  sails.log.debug('Done:: startDummyRecipe');
}

async function getDummyRecipeList(limit) {
  let items = [];

  let foods = await Food.find().limit(THRESHOLD_FOOD_DUMMY);

  while (limit > 0) {
    // Get random one food from collection.
    let food = foods[Math.floor(Math.random() * foods.length)];

    let item = {
      image: {
        url: faker.image.food()
      },
      food: food.id || food._id,
      name: faker.name.title() + ' ' + faker.random.words(),
      description: faker.lorem.paragraphs(),
      directions: getDummyDirections(),
      ingredients: getDummyIngredients(),
      numberOfServings: Math.round(faker.random.number()),
      preTime: Math.round(faker.random.number()),
      cookTime: Math.round(faker.random.number()),
      readyIn: Math.round(faker.random.number()),
      recipeYield: Math.round(faker.random.number())
    };

    items.push(item);
    limit--;
  }

  return items;
}

function getDummyDirections() {
  let numberOfSteps = Math.floor(Math.random() * 10);
  let directions = [];

  for(let i=0; i < numberOfSteps; i++) {
    directions.push({
      title: faker.name.title(),
      content: faker.lorem.paragraphs()
    });
  }

  return directions;
}

function getDummyIngredients() {
  let numberOfIngredients = Math.floor(Math.random() * 15);
  let ingredients = [];

  for(let i=0; i < numberOfIngredients; i++) {
    ingredients.push({
      title: faker.name.title(),
      content: faker.lorem.paragraphs()
    });
  }

  return ingredients;
}



