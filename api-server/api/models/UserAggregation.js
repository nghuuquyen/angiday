/**
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module models
 * @description
 * Application user Interaction model.
 */
module.exports = {
  tableName: 'user_aggregation',
  attributes: {
    user: {
      type: 'string'
      //model: 'user'
    },
    // Format is YYYYMMDD. Ex: 20181122
    date: {
      type: 'number'
    },
    /**
     * User action log of one date. This one have format
     *
     * data[].eventLabel
     * data[].resourceId
     * data[].scores
     * data[].updatedAt
     */
    data: {
      type: 'json'
    }
  }
};
