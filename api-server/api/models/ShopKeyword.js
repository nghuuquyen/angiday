/**
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module models
 * @description
 * Relationship between shop and keyword model.
 */
module.exports = {
  attributes: {
    keyword: {
      model: 'food'
    },
    shop: {
      model: 'shop'
    },
    score: {
      type: 'number'
    }
  }
};
