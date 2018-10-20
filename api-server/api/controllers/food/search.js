/**
 * @name search
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module controller
 * @description
 * Search food by keyword.
 */
module.exports = async function search(req, res) {
  let foods = await Food.find()
    .limit(req.limit || 30).skip(req.skip || 0).sort('createdAt DESC');

  for (let i in foods) {
    let keywords = await FoodKeywordRelation.find({
      food: foods[i].id
    });

    foods[i].keywords = keywords || [];
  }

  return res.json(foods);
}
