/**
 * @name search
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module controller
 * @description
 * Remove selected keyword in food.
 *
 * @path DELETE /food/remove-keyword
 *
 * @query {String} keyword_id  - Keyword id
 * @query {String} food_id     - food id
 *
 * @response {Boolean} success - true or false.
 */
module.exports = async function search(req, res) {
  const food_id = req.query.food_id;
  const keyword_id = req.query.keyword_id;

  if (!food_id)
    return res.badRequest('food_id is required.');

  if (!keyword_id)
    return res.badRequest('keyword_id is required.');

  const removeConds = {
    food: food_id,
    keyword: keyword_id
  };

  FoodKeywordRelation.destroy(removeConds)
    .then(() => {
      return res.json({ success: true });
    })
    .catch(err => {
      return res.badRequest(err);
    });
}
