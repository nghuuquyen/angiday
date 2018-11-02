"use strict";

const router = require('express').Router();

// Public about page.
router.route('/search-result').get(renderSearchResultPage);
router.route('/v2/search-result').get(renderSearchResultPageV2);

/**
 * @name renderSearchResultPage
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * 
 * @description
 * Render search results page. 
 * 
 * @param req - HTTP request
 * @param res - HTTP reponse
 */
function renderSearchResultPage(req, res) {

  let queryParam = req.query.q || '';

  let foods = [
    { name: 'Bánh bèo', number_shops: 15 },
    { name: 'Bánh ướt', number_shops: 10 },
    { name: 'Bánh nậm', number_shops: 12 },
    { name: 'Bánh xèo', number_shops: 10 }
  ];
  
  let recommends = [
    { name: 'Bánh bèo', number_shops: 15 , type: 'food' },
    { name: 'Bánh ướt', number_shops: 10 , type: 'food' },
    { name: 'Bánh nậm', number_shops: 12 , type: 'food' },
    { name: 'Bánh xèo', number_shops: 10 , type: 'food' },
    { name: 'Quán ăn 1', address: 'Da Nang', type: 'shop' },
    { name: 'Quán ăn 2', address: 'Da Nang', type: 'shop' },
    { name: 'Quán ăn 3', address: 'Da Nang', type: 'shop' },
  ];

  let foodResults = foods.filter(food => {
    return food.name.search(queryParam) !== -1;
  });

  res.render('pages/search-result', {
    foods: foodResults,
    recommends
  });
}

/**
 * @name renderSearchResultPageV2
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * 
 * @description
 * Render search results page with client side render. 
 * 
 * @param req - HTTP request
 * @param res - HTTP reponse
 */
function renderSearchResultPageV2(req, res) {
  res.render('pages/search-result-v2', {
    // Do nothing
  });
}

module.exports = router;