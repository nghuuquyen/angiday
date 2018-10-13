"use strict";

module.exports = {
  renderFoodManagementPage
};

/**
* @name renderFoodManagementPage
* @description
* Do render food management page.
*
* @param  {object}   req  HTTP Request
* @param  {object}   res  HTTP Response
* @param  {Function} next Next middleware
*/
function renderFoodManagementPage(req, res, next) {
  res.render('pages/content-manage/food-management', {
    user : req.user
  });
}
