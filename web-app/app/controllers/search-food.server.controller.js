"use strict";
const FoodService = require('../services').FoodService;

module.exports = {
  renderSearchFoodPage
};

/**
* @name renderSearchFoodPage
* @description
* Do render search food results page.
* 
* @param  {object}   req  HTTP Request
* @param  {object}   res  HTTP Response
* @param  {Function} next Next middleware
* 
* @query {String} word_ids - Word Ids seprated by comma.
*/
function renderSearchFoodPage(req, res, next) {
  let word_ids = (req.query.word_ids || '').split(',');

  /**
   * @var Array 
   * List foods matching search results.
   */
  let foods = [];

  /**
   * @var Array 
   * List recommendation items based on user history and keywords.
   * 
   * @todo Implement recommendation by user and selected keywords.
   */
  let recommends = [];
  
  FoodService.searchFoods(word_ids)
    .then(foods => {
      res.render('pages/search-result', {
        foods,
        recommends,
        user: req.user
      });
    })
    .catch(err => {
      next(err);
    });
}
