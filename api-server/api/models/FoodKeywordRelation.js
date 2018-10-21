/**
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module models
 * @description
 * Application food keyword relation model.
 */
module.exports = {
  tableName: 'food_keyword_relation',
  schema: true,
  attributes: {
    keyword: {
      model: 'keyword'
    },
    food: {
      model: 'food'
    },
    scores: {
      type: 'number'
    }
  }
};
