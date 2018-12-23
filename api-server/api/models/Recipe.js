/**
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module models
 * @description
 * Application food recipe model.
 */
module.exports = {
  tableName: 'recipe',
  attributes: {
    image: {
      type: 'json'
    },
    food: {
      model: 'food'
    },
    name: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    directions: {
      type: 'json'
    },
    ingredients: {
      type: 'json'
    },
    numberOfServings: {
      type: 'number'
    },
    preTime: {
      type: 'number'
    },
    cookTime: {
      type: 'number'
    },
    readyIn: {
      type: 'number'
    },
    recipeYield: {
      type: 'number'
    }
  }
};
