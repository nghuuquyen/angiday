/**
 * @name shop.server.controller
 * @module controllers
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @description
 * Shop controller
 */
"use strict";
const ShopService = require('../services').ShopService;
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
  renderShopDetailPage,
  renderShopIndexPage
};

/**
 * @name renderShopIndexPage
 * @description
 * Render shop index page.
 * 
 * @param {Object}   req  HTTP request object.
 * @param {Object}   res  HTTP response object.
 * @param {Function} next Next middleware 
 */
function renderShopIndexPage(req, res, next) {
  res.render('pages/shop/shops', {});
}


/**
 * @name renderShopDetailPage
 * @description
 * Render shop detail page.
 * 
 * @param {Object} req  HTTP request object.
 * @param {Object} res  HTTP response object.
 * 
 * @path GET /shop/:shop_id
 * 
 * @todo 
 * Step 1. Get shop id from request URL.
 * Step 2. Call API get shop detail data and list food which shop served.
 * Step 3. Binding data to view HTML page.
 * Step 4. Return view page.
 */
function renderShopDetailPage(req, res, next) {
  const shopId = _.escape((req.params.shop_id || '').trim());

  if (!shopId) {
    throw new Error('Missing shop id parameter.');
  }

  ShopService.findOne(shopId, { populate: 'foods' })
    .then(shop => {
      res.render('pages/shop/shop-detail', {
        shop,
        recommends: recommends
      });
    })
    .catch(err => {
      next(err);
    });
}