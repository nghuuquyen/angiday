
const _ = require('lodash');
const Q = require('q');

module.exports = {
  saveLog
};

/**
 * @var Object
 * Action socore handeler mapping.
 */
let actionScoresHandlers = {
  'food_interactive': {
    'view': calcViewFoodActionScores,
    'comment': calcCommentFoodActionScores,
    'vote': calcVoteFoodActionScores
  },
  'keyword_interactive': {
    'view': calcViewKeywordActionScores,
    'comment': calcCommentKeywordActionScores,
    'vote': calcVoteKeywordActionScores
  }
};

/**
 * @name isExistEventLable
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @description
 * Check if event label used is support or not.
 *
 * @param {String} eventLabel
 * @return Boolean
 */
function isExistEventLable(eventLabel) {
  return _.get(actionScoresHandlers, eventLabel, false) ? true : false;
}

/**
 * @name isExistAction
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @description
 * Check if event label and action name used is support or not.
 *
 * @param {String} eventLabel
 * @param {String} actionName
 * @return Boolean
 */
function isExistAction(eventLabel, actionName) {
  return _.get(actionScoresHandlers, eventLabel + '.' + actionName, false) ? true : false;
}

/**
 * @name saveLog
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @description
 *
 * @param {String} userId      User id
 * @param {String} resourceId  Interaction resource ID
 * @param {String} eventLabel  Event label
 * @param {String} actionName  Action name
 * @param {Object} actionData  Action data
 */
async function saveLog(userId, resourceId, eventLabel, actionName, date, actionData) {
  actionData = actionData || {};

  if (!eventLabel) throw new Error('eventLabel param is required.');
  if (!actionName) throw new Error('actionName param is required.');
  if (!userId) throw new Error('userId param is required.');
  if (!resourceId) throw new Error('resourceId param is required.');

  if (!isExistEventLable(eventLabel)) throw new Error(`eventLabel ${eventLabel} doesn't support.`);
  if (!isExistAction(eventLabel, actionName)) throw new Error(`actionName ${actionName} doesn't support.`);

  let actionScoreCalcFunction = actionScoresHandlers[eventLabel][actionName];

  if (!actionScoreCalcFunction) throw new Error('Scores calculation function is not define.');

  let additionScores = 0;

  try {
    additionScores = await actionScoreCalcFunction(userId, resourceId, actionData);
  } catch (err) {
    sails.log.error(err);
    return false;
  }

  // Nothing to do.
  if (additionScores < 0) return true;

  let updateTarget = {
    'date': date,
    'user': userId,
    'data.resourceId': resourceId,
    'data.eventLabel': eventLabel
  };

  let updateData = {
    $inc: { 'data.$.scores': additionScores },
    $set: { "data.$.updatedAt": new Date() }
  }

  let db = UserAggregation.getDatastore().manager;
  let rawMongoCollection = db.collection(UserAggregation.tableName);

  // Step 1. trying to update log data record.
  let res = await rawMongoCollection.update(updateTarget, updateData);

  // If update success, this will return true.
  if (res.result.n && res.result.nModified) return true;

  // Step 2. If not found record, will create new one user aggreation log.
  let createData = {
    'date': date,
    'user': userId,
    'data': [
      { 'resourceId': resourceId, 'eventLabel': eventLabel, 'scores': 0 }
    ]
  };

  res = await rawMongoCollection.save(createData);
  let isSaveSuccess = res.result.n && res.result.ok;

  if (!isSaveSuccess) {
    sails.log.error('Has problem on create new user aggreation log record.');
    return false;
  }

  res = await rawMongoCollection.update(updateTarget, updateData);
  let isUpdateSuccess = res.result.n && res.result.ok;

  if (!isUpdateSuccess) {
    sails.log.error('Has problem on update user aggreation log record.');
    return false;
  }

  return true;
}

/**
 * @name calcViewFoodActionScores
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @description
 *
 * @param {String} userId      User id
 * @param {String} resourceId  Interaction resource ID
 * @param {Object} actionData  Action data
 */
async function calcViewFoodActionScores(userId, resourceId, actionData) {
  return await Q.when(5);
}

/**
 * @name calcCommentFoodActionScores
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @description
 *
 * @param {String} userId      User id
 * @param {String} resourceId  Interaction resource ID
 * @param {Object} actionData  Action data
 */
async function calcCommentFoodActionScores(userId, resourceId, actionData) {
  return 10;
}

/**
 * @name calcVoteFoodActionScores
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @description
 *
 * @param {String} userId      User id
 * @param {String} resourceId  Interaction resource ID
 * @param {Object} actionData  Action data
 */
async function calcVoteFoodActionScores(userId, resourceId, actionData) {
  return 15;
}


/**
 * @name calcViewKeywordActionScores
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @description
 *
 * @param {String} userId      User id
 * @param {String} resourceId  Interaction resource ID
 * @param {Object} actionData  Action data
 */
async function calcViewKeywordActionScores(userId, resourceId, actionData) {
  return 5;
}

/**
 * @name calcCommentKeywordActionScores
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @description
 *
 * @param {String} userId      User id
 * @param {String} resourceId  Interaction resource ID
 * @param {Object} actionData  Action data
 */
async function calcCommentKeywordActionScores(userId, resourceId, actionData) {
  return 10;
}

/**
 * @name calcVoteKeywordActionScores
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @description
 *
 * @param {String} userId      User id
 * @param {String} resourceId  Interaction resource ID
 * @param {Object} actionData  Action data
 */
async function calcVoteKeywordActionScores(userId, resourceId, actionData) {
  return 15;
}
