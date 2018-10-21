/**
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module models
 * @description
 * Define action for keyword search.
 */
module.exports = {
  tableName: 'keyword_action',
  schema: true,
  attributes: {
    name: {
      type: 'string',
      unique: true
    },
    description: {
      type: 'string'
    }
  }
};
