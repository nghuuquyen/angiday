module.exports = async function findByUsernameOrEmail(req, res) {
  let usernameOrEmail = req.params.usernameOrEmail;

  if (!usernameOrEmail) res.badRequest('Missing usernameOrEmail param.');

  sails.log.debug(usernameOrEmail);

  let user = await User.find({
    or: [{ email: usernameOrEmail }, { username: usernameOrEmail }]
  }).limit(1);

  if (user && user[0]) return res.json(user[0]);

  return res.badRequest('User not found');
}
