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
    description: {
      type: 'string'
    },
    /**
     * Valid type is `search` or `criterial`
     */
    type: {
      type: 'string'
    },
    /**
     * Only effect if keyword has type `criterial`. This field will containt
     * action name which will excute to calculating addition scores for this
     * word on search results.
     */
    action: {
      model: 'keywordaction'
    },
    foods: {
      collection: 'food',
      via: 'keywords'
    },
    shops: {
      collection: 'shop',
      via: 'keywords'
    }
  }
};
