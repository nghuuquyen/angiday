/**
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module models
 * @description
 * Application campaign model.
 */
module.exports = {
  tableName: 'campaign',
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
