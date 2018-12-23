module.exports = async function signin(req, res) {
  let usernameOrEmail = req.body.usernameOrEmail;
  let password = req.body.password;

  if (!usernameOrEmail) res.badRequest('Missing usernameOrEmail param.');

  sails.log.debug(usernameOrEmail);

  let user = await User.find({
    or: [{ email: usernameOrEmail }, { username: usernameOrEmail }]
  }).limit(1);

  if (user && user[0]) {
    let hashPassword = UserServices.hashUserPassword(password);

    if(hashPassword === user[0].password) {
      return res.json(user[0])
    } else {
      return res.badRequest('Username or password invalid.');
    }
  };

  return res.badRequest('Credential invalid.');
}
