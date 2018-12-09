
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

  if (!eventLabel)
    throw new Error('eventLabel param is required.');
  if (!actionName)
    throw new Error('actionName param is required.');
  if (!userId)
    throw new Error('userId param is required.');
  if (!resourceId)
    throw new Error('resourceId param is required.');

  if (!isExistEventLable(eventLabel))
    throw new Error(`eventLabel ${eventLabel} doesn't support.`);
  if (!isExistAction(eventLabel, actionName))
    throw new Error(`actionName ${actionName} doesn't support.`);

  let db = UserAggregation.getDatastore().manager;
  let collection = db.collection(UserAggregation.tableName);

  // Get score calculating function from registry.
  let actionScoreCalcFunction = actionScoresHandlers[eventLabel][actionName];

  if (!actionScoreCalcFunction)
    throw new Error('Scores calculation function is not define.');

  // Step 1. Based on action data, calculating addition scores
  let additionScores = await actionScoreCalcFunction(userId, resourceId, actionData);
  if (additionScores < 0) return true;

  // Step 2. Get target aggregation record for update scores.
  let updateDocument = await collection.findOne({
    'date': date, 'user': userId
  });

  // If not found, create new one.
  if (!updateDocument) {
    sails.log.debug('Create new one aggregation record.');
    updateDocument = await collection.save({
      'date': date, 'user': userId, 'data': []
    });
  }

  // Step 3. Update exist interactive record or add new interactive record.
  let data = {
    'eventLabel': eventLabel,
    'resourceId': resourceId,
    'additionScores': additionScores
  };

  let success = await addToExistInteractiveRecord(updateDocument, data);

  if (!success) {
    return await createNewInteractiveRecord(updateDocument, data);
  }
}

/**
 * @name addToExistInteractiveRecord
 * @description
 *
 * @param {Object} targetDocument - Target update document.
 * @param {Object} data           - Data used for update
 */
async function addToExistInteractiveRecord(targetDocument, data) {
  sails.log.debug('addToExistInteractiveRecord');

  let db = UserAggregation.getDatastore().manager;
  let collection = db.collection(UserAggregation.tableName);

  let targetUpdate = {
    '_id': targetDocument._id,
    'data.resourceId': data.resourceId,
    'data.eventLabel': data.eventLabel
  };

  let updateData = {
    $inc: { 'data.$.scores': data.additionScores },
    $set: { 'data.$.updatedAt': new Date() }
  }

  let res = await collection.update(targetUpdate, updateData);

  return (res.result.n && res.result.nModified) ? true : false;
}

/**
 * @name createNewInteractiveRecord
 * @description
 *
 * @param {Object} targetDocument - Target update document.
 * @param {Object} data           - Data used for update
 */
async function createNewInteractiveRecord(targetDocument, data) {
  sails.log.debug('createNewInteractiveRecord');

  let db = UserAggregation.getDatastore().manager;
  let collection = db.collection(UserAggregation.tableName);

  let targetUpdate = {
    '_id': targetDocument._id
  };

  let updateData = {
    $push: {
      'data': {
        "resourceId": data.resourceId,
        "eventLabel": data.eventLabel,
        "scores": data.additionScores,
        "updatedAt": new Date()
      }
    }
  }

  let res = await collection.update(targetUpdate, updateData);

  return (res.result.n && res.result.nModified) ? true : false;
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
  return await Q.when(10);
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
  return await Q.when(15);
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
  return await Q.when(5);
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
  return await Q.when(10);
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
  return await Q.when(15);
}
