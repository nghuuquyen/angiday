/**
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module models
 * @description
 * Application keyword model.
 */
module.exports = {
  attributes: {
    name: {
      type: 'string'
    },
    /**
     * Valid type is `search` or `criterial`
     */
    type: {
      type: 'string'
    }
  }
};
