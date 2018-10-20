/**
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module models
 * @description
 * Application food keyword relation model.
 */
module.exports = {
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
