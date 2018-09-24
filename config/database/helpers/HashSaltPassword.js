"use strict";

const crypto = require('crypto');

module.exports = {
  saltHashPassword : saltHashPassword,
  hashPassword : hashPassword
};

/**
* @name genRandomString
* @description
* generates random string of characters
*
* @param {number} length - Length of the random string.
*/
function genRandomString(length){
  return crypto.randomBytes(Math.ceil(length/2))
  /** convert to hexadecimal format */
  .toString('hex')
  /** return required number of characters */
  .slice(0,length);
}


/**
* @name sha512
* @description
*
* hash password with sha512.
* @param {string} password - List of required fields.
* @param {string} salt - Data to be validated.
*/
function sha512(password, salt) {
  /** Hashing algorithm sha512 */
  const hash = crypto.createHmac('sha512', salt).update(password);

  return {
    salt: salt,
    hash: hash.digest('hex')
  };
}

/**
* @name saltHashPassword
* @description
* Do sha512 password hash.
* @param  {string} userpassword User password string
* @return {object} object with two properties. {salt} and  {hash}
*/
function saltHashPassword(userpassword) {
  var salt = genRandomString(16);
  var passwordData = sha512(userpassword, salt);

  return passwordData;
}

/**
* @name hashPassword
* @description
* Hash password with given {salt} string.
*
* @param  {string} password Original user string password
* @param  {string} salt     Salt string for hash
* @return {string}          password after hash with salt string
*/
function hashPassword(password, salt) {
  return sha512(password, salt).hash;
}
