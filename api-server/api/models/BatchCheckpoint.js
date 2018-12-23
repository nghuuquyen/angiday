/**
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module models
 * @description
 * Application batch checkpoint model.
 */
module.exports = {
  tableName: 'batch_checkpoint',
  attributes: {
    batchName: {
      type: 'string',
      unique: true,
      required: true
    },
    checkpoint: {
      type: 'ref',
      columnType: 'datetime'
    }
  }
};
