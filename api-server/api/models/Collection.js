/**
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module models
 * @description
 * Application collection model.
 */
module.exports = {
  tableName: 'collection',
  attributes: {
    name: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    /**
     * items[].type - Might 'food', 'keyword', 'shop'
     * items[].id   - Object ID.
     */
    items: {
      type: 'json'
    }
  }
};
