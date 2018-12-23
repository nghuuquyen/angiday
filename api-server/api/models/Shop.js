/**
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module models
 * @description
 * Application shop model.
 */
module.exports = {
  attributes: {
    name: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    address: {
      type: 'string'
    },
    foods: {
      collection: 'food',
      via: 'shop',
      through: 'foodshoprelation'
    },
    links: {
      type: 'json'
    },
    images: {
      type: 'json'
    }
  }
};
