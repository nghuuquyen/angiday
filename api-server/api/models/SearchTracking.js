/**
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module models
 * @description
 * Application search tracking model.
 */
module.exports = {
  tableName: 'search_tracking',
  attributes: {
    user: {
      type: 'string'
    },
    keywords: {
      type: 'json',
      defaultsTo: []
    },
    foods: {
      type: 'json',
      defaultsTo: []
    },
    texts: {
      type: 'json'
    }
  }
};
