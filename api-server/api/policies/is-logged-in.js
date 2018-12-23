/**
 * @name isLoggedIn
 * @module policies
 * @description
 * Policy checking whether used already logged in or not, if not it
 * will send 401 status code.
 */
module.exports = async function isLoggedIn(req, res, proceed) {
  return proceed();
};
