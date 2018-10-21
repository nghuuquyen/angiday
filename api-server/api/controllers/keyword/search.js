/**
 * @name search
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module controller
 * @description
 * Search keyword by word name.
 */

const validator = require('validator');
const _ = require('lodash');

/**
 * @name search
 * @description
 * Search keyword by word name.
 *
 * @path GET /keyword/search
 * @query {String} keyword - Search keyword.
 *
 * @response {String} id           - keyword id string.
 * @response {String} name         - keyword name.
 * @response {String} description  - keyword description.
 * @response {String} score        - search score.
 */
module.exports = async function search(req, res) {
  const db = Keyword.getDatastore().manager;
  const keywordCollection = db.collection(Keyword.tableName);
  const searchKeyword = validator.escape(req.query.keyword || '');

  // Search word by native mongodb full-text search.
  let words = await keywordCollection
    .find(
      { $text: { $search: searchKeyword } },
      { score: { $meta: "textScore" } }
    )
    .sort({ score: { $meta: "textScore" } })
    .toArray();

  // Transform results for return.
  let results = await _.map(words, item => {
    item.id = item._id;
    return _.pick(item, ['id', 'name', 'description', 'score']);
  });

  return res.json(results);
}
