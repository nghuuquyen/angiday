module.exports = async function getUserRecommendationFoods(req, res) {
  const userId = req.params.userId;
  let foods = await RecommendationService.getUserRecommedationFoods(userId);

  return res.json(foods);
}
