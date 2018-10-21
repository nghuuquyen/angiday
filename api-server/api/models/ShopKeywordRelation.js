/**
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module models
 * @description
 * Application shop and keyword relation model.
 */
module.exports = {
  tableName: 'shop_keyword_relation',
  schema: true,
  attributes: {
    keyword: {
      model: 'keyword'
    },
    shop: {
      model: 'shop'
    },
    scores: {
      type: 'number'
    }
  }
};
