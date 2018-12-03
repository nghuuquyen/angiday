"use strict";

module.exports = {
  renderCMSindexPage
};

/**
* @name renderCMSindexPage
* @description
* Do render CMS index page page.
*
* @param  {object}   req  HTTP Request
* @param  {object}   res  HTTP Response
*/
function renderCMSindexPage(req, res) {
  res.render('pages/content-manage/index', {
    user : req.user
  });
}
