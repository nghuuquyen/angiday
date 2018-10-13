/**
 * @name badRequest
 * @module response
 * @description
 * Send bad request response.
 */
module.exports = function badRequest(data) {
  var res = this.res;

  // Log error to console
  if (data !== undefined) {
    sails.log.warn('Sending 400 ("Bad Request") response: \n', data);
  }

  res.status(400);
  return res.jsonx(data);
};
