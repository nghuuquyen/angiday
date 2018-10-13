/**
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module models
 * @description
 * Relationship between food and keyword model.
 */
module.exports = {
  attributes: {
    food: {
      model: 'food'
    },
    keyword: {
      model: 'keyword'
    },
    score: {
      type: 'number'
    }
  }
};
