/**
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module models
 * @description
 * Application food model.
 */
module.exports = {
  attributes: {
    name: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    keywords: {
      collection: 'keyword',
      via: 'foods'
    }
  }
};
