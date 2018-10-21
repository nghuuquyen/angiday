/**
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module models
 * @description
 * Application food and shop relation model.
 */
module.exports = {
  tableName: 'food_shop_relation',
  schema: true,
  attributes: {
    shop: {
      model: 'shop'
    },
    food: {
      model: 'food'
    },
    scores: {
      type: 'number'
    }
  }
};
