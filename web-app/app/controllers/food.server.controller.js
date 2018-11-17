/**
 * @name food.server.controller
 * @module controllers
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @description
 * Food controller
 */
"use strict";
const FoodService = require('../services').FoodService;
const _ = require('lodash');

let recommends = [
  { name: 'Bánh bèo', number_shops: 15, type: 'food', id: '1' },
  { name: 'Quán ăn 1', address: 'Da Nang', type: 'shop', id: '2' },
  { name: 'Bánh nậm', number_shops: 12, type: 'food', id: '3' },
  { name: 'Quán ăn 2', address: 'Da Nang', type: 'shop', id: '4' },
  { name: 'Bánh ướt', number_shops: 10, type: 'food', id: '5' },
  { name: 'Quán ăn 3', address: 'Da Nang', type: 'shop', id: '6' },
  { name: 'Bánh xèo', number_shops: 10, type: 'food', id: '7' },
];

module.exports = {
  renderFoodDetailPage
};


/**
 * @name renderFoodDetailPage
 * @description
 * Render food detail page.
 * 
 * @param {Object} req  HTTP request object.
 * @param {Object} res  HTTP response object.
 * 
 * @path GET /food/:food_id
 * 
 * @todo 
 * Step 1. Get food id from request URL.
 * Step 2. Call API get food detail data and list shop served.
 * Step 3. Binding data to view HTML page.
 * Step 4. Return view page.
 */
function renderFoodDetailPage(req, res, next) {
  const foodId = _.escape((req.params.food_id || '').trim());

  if (!foodId) {
    throw new Error('Missing food id parameter.');
  }

  FoodService.findOne(foodId, { populate: 'shops, keywords' })
    .then(food => {
      res.render('pages/food/food-detail', {
        food: food,
        recommends: recommends
      });
    })
    .catch(err => {
      next(err);
    });
}