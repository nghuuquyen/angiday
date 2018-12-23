module.exports = async function userTracking(req, res) {
  let userId = req.body.user;
  let foodId = req.body.food;
  let actionType = req.body.actionType;

  if (!userId) return res.badRequest('Missing user id');
  if (!foodId) return res.badRequest('Missing food id');

  let success = UserInteractiveLog.foodInteractiveLog(userId, foodId, actionType);

  if (success) return res.json({ success: true });

  return res.badRequest('Has error when save interacive log.');
}
