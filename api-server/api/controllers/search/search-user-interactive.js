const _ = require('lodash');

module.exports = async function searchUserInteractive(req, res) {
  let searchText = req.query.q;
  const db = SearchTracking.getDatastore().manager;
  const searchTrackingCollection = db.collection(SearchTracking.tableName);
  const keywordCollection = db.collection(Keyword.tableName);

  if (!searchText) return res.badRequest('Missing q params');


  let searchTrackings = await searchTrackingCollection
    .find(
      { $text: { $search: searchText } },
      { score: { $meta: "textScore" } }
    )
    .sort({ score: { $meta: "textScore" } })
    .toArray();

  let keywords_ids = [];
  let food_ids = [];
  let texts = [];

  let systemKeywords = await keywordCollection
    .find(
      { $text: { $search: searchText } },
      { score: { $meta: "textScore" } }
    )
    .sort({ score: { $meta: "textScore" } })
    .toArray();

  if (searchTrackings.length > 0) {
    for (let i in searchTrackings) {
      if (searchTrackings[i].keywords)
        keywords_ids = _.union(keywords_ids, searchTrackings[i].keywords)

      if (searchTrackings[i].foods)
        food_ids = _.union(food_ids, searchTrackings[i].foods)

      if (searchTrackings[i].texts)
        texts = _.union(texts, searchTrackings[i].texts)
    }
  }

  let foods = await Food.find({ id: { in: food_ids } });
  let keywords = await Keyword.find({ id: { in: keywords_ids } });

  return res.json({
    foods,
    keywords,
    texts,
    systemKeywords
  });
}
