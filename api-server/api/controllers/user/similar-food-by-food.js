module.exports = async function getSimilarFoodByFood(req, res) {
  const foodId = req.params.foodId;
  let foods = await RecommendationService.getSimilarFoodByFood(foodId);

  return res.json(foods);
}
