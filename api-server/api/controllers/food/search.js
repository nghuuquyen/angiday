/**
 * @name removeShopInFood
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module controller
 * @description
 * Search food by keywords.
 *
 * @path GET /food/search
 *
 * @query {Array}  word_ids  - List word_id separate by comma.
 *
 * @response {Array} foods        - Collection food matching.
 * @response {Array} foods.name   - Food name.
 * @response {Array} foods.id     - Food ID.
 * @response {Array} foods.words  - Food words related.
 * @response {Array} foods.shops  - Food shops served.
 * @response {Array} foods.rank   - Search rank number.
 */
module.exports = async function search(req, res) {
  let keywords = (req.query.word_ids || '').split(',');

  if (keywords.length === 0) {
    res.badRequest('word_ids is required.');
  }

  try {
    let foods = await FoodSearchService.searchFoods(keywords);
    res.json(foods);
  } catch (err) {
    res.badRequest(err);
  }
}
