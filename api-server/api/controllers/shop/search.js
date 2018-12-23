/**
 * @name search
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module controller
 * @description
 * Search shop by shop name.
 */

const validator = require('validator');
const _ = require('lodash');

/**
 * @name search
 * @description
 * Search keyword by word name.
 *
 * @path GET /food/search
 * @query {String} keyword - Search keyword.
 *
 * @response {String} id           - Shop id string.
 * @response {String} name         - Shop name.
 * @response {String} description  - Shop description.
 * @response {String} score        - search score.
 */
module.exports = async function search(req, res) {
  const db = Keyword.getDatastore().manager;
  const shopCollection = db.collection(Shop.tableName);
  const searchKeyword = validator.escape(req.query.keyword || '');

  // Search shops by native mongodb full-text search.
  let shops = await shopCollection
    .find(
      { $text: { $search: searchKeyword } },
      { score: { $meta: "textScore" } }
    )
    .sort({ score: { $meta: "textScore" } })
    .toArray();

  // Transform results for return.
  let results = await _.map(shops, item => {
    item.id = item._id;
    return _.pick(item, ['id', 'name', 'description', 'score']);
  });

  return res.json(results);
}
