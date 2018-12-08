/**
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module models
 * @description
 * Application user ollection model.
 */
module.exports = {
  tableName: 'collection',
  attributes: {
    user: {
      model: 'user'
    },
    collection: {
      model: 'collection'
    },
    scores: {
      type: 'number'
    },
    /**
     * following or created
     */
    relationship: {
      type: 'string',
      defaultsTo: 'following'
    }
  }
};
