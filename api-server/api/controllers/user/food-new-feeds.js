module.exports = async function getFoodNewFeeds(req, res) {
  const userId = req.params.userId;
  let foods = await RecommendationService.getFoodNewFeeds(userId);

  return res.json(foods);
}
