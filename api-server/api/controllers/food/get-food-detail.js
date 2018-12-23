module.exports = async function getFoodDetail(req, res) {
  let userId = req.query.user;
  let foodId = req.query.food;

  if (!foodId) return res.badRequest('Missing food id.');

  let food = await Food.findOne({ id: foodId }).populate('keywords');

  if (!food) return res.badRequest('Food not found.');

  // Get all similarity foods.
  let smilarFoods = await RecommendationService.getSimilarFoodByFood(food.id);
  let recommendFoods = [];

  if (userId) {
    recommendFoods = await RecommendationService.getUserRecommedationFoods(userId);
  }

  food.smilarFoods = smilarFoods;
  food.recommendFoods = recommendFoods;

  return res.json(food);
}
