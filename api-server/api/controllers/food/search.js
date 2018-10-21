/**
 * @name search
 * @author Quyen Nguyen Huu <<nghuuquyen@gmail.com>>
 * @module controller
 * @description
 * Search food by keyword.
 */
module.exports = async function search(req, res) {
  let foods = await Food.find()
    .populate('keywords')
    .limit(req.limit || 30).skip(req.skip || 0).sort('createdAt DESC');

  return res.json(foods);
}
