module.exports = async function getTopPopularFoods(req, res) {
  let foods = await RecommendationService.getTopPopularFoods();

  return res.json(foods);
}
