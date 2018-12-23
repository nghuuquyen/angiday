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

module.exports = {
  renderFoodDetailPage,
  renderFoodIndexPage
};

/**
 * @name renderFoodIndexPage
 * @description
 * Render food index page.
 * 
 * @param {Object}   req  HTTP request object.
 * @param {Object}   res  HTTP response object.
 * @param {Function} next Next middleware 
 */
function renderFoodIndexPage(req, res, next) {
  res.render('pages/food/foods', {});
}

/**
 * @name renderFoodDetailPage
 * @description
 * Render food detail page.
 * 
 * @param {Object}   req  HTTP request object.
 * @param {Object}   res  HTTP response object.
 * @param {Function} next Next middleware 
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
  let userId = null;

  if(req.user) userId = req.user.id;

  FoodService.getFoodDetail(foodId, userId)
    .then(food => {
      res.render('pages/food/food-detail', {
        food: food
      });
    })
    .catch(err => {
      next(err);
    });
}