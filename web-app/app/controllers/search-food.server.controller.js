"use strict";
const FoodService = require('../services').FoodService;

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
