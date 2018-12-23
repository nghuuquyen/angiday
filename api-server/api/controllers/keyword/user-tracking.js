module.exports = async function userTracking(req, res) {
  let userId = req.body.user;
  let keywordId = req.body.keyword;
  let actionType = req.body.actionType;

  if (!userId) return res.badRequest('Missing user id');
  if (!keywordId) return res.badRequest('Missing keyword id');

  let success = UserInteractiveLog.keywordInteractiveLog(userId, keywordId, actionType);

  if (success) return res.json({ success: true });

  return res.badRequest('Has error when save interacive log.');
}
