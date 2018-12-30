/**
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module models
 * @description
 * Application campaign model.
 */
module.exports = {
  tableName: 'campaign',
  attributes: {
    name: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    foods: {
      type: 'json',
      defaultsTo: []
    },
    keywords: {
      type: 'json',
      defaultsTo: []
    },
    owner: {
      model: 'user'
    },
    startDate: {
      type: 'string'
    },
    confirmed: {
      type: 'boolean',
      defaultsTo: false
    }
  }
};
