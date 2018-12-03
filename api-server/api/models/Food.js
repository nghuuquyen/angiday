/**
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module models
 * @description
 * Application food model.
 */
module.exports = {
  tableName: 'food',
  attributes: {
    name: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    keywords: {
      collection: 'keyword',
      via: 'food',
      through: 'foodkeywordrelation'
    },
    recipes: {
      collection: 'recipe',
      via: 'food'
    },
    shops: {
      collection: 'shop',
      via: 'food',
      through: 'foodshoprelation'
    },
    images: {
      type: 'array'
    }
  }
};
