  /**
* Created by Quyen Nguyen Huu on 1/28/2017.
* Email: nghuuquyen@gmail.com
*/

var md5 = require('md5');
var jwt = require('jsonwebtoken');
var Q = require('q');

var services = {};

// Public methods.
services.hashUserPassword = hashUserPassword;
services.decodedAccessToken = decodedAccessToken;
services.getTokenDataFromRequest = getTokenDataFromRequest;

module.exports = services;

/**
* Used for hash user password. It help full for compare password whether
* correct.
* <p>
* @param password
* @returns String - Hash password of current password.
*/
function hashUserPassword(password) {
  if(!password || password === '') {
    throw new Error('Password is undefined or empty.');
  }

  for(var i = 1 ; i <= 5 ; i ++) {
    (function(index) {
      password += password + index + 'bmrgkoyb';
      password = md5(password);
    })(i);
  }

  return password;
}

/**
* Used for verify user access token.
* <p>
* @param token
* @returns {*}
*/
function decodedAccessToken(token) {
  var deferred = Q.defer();

  if(!token || token.length === '' || typeof token !== 'string') {
    return Q.reject(new Error('Token not found or not valid !.'));
  }

  if(token.search('Bearer') !== -1 || token.search('bearer') !== -1) {
    token = token.substring(7, token.length);
  }

  jwt.verify(token, sails.config.oauth.secret , {
    issuer : sails.config.oauth.issuer,
    subject : sails.config.oauth.subject} , function(err , decoded) {
      if(err) return deferred.reject(err);
      else {
        return deferred.resolve(decoded);
      }
    });

    return deferred.promise;
  }

  /**
  * Used for parse token data from request send from client.
  * <p>
  * @param req
  * @returns {*}
  */
  function getTokenDataFromRequest(req) {
    var accessToken = req.headers['authorization']

    if(!accessToken && req.body) {
      accessToken = req.body.access_token;
    }

    return services.decodedAccessToken(accessToken);
  }
