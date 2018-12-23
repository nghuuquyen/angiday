/**
 * @name removeShopInFood
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module controller
 * @description
 * Remove selected shop in food.
 *
 * @path DELETE /food/remove-shop
 *
 * @query {String} shop_id     - Shop id
 * @query {String} food_id     - Food id
 *
 * @response {Boolean} success - true or false.
 */
module.exports = async function removeShopInFood(req, res) {
  const food_id = req.query.food_id;
  const shop_id = req.query.shop_id;

  if (!food_id)
    return res.badRequest('food_id is required.');

  if (!shop_id)
    return res.badRequest('shop_id is required.');

  const removeConds = {
    food: food_id,
    shop: shop_id
  };

  FoodShopRelation.destroy(removeConds)
    .then(() => {
      return res.json({ success: true });
    })
    .catch(err => {
      return res.badRequest(err);
    });
}
