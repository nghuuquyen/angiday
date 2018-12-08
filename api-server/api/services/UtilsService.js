/**
* Created by Quyen Nguyen Huu on 1/28/2017.
* Email: nghuuquyen@gmail.com
*/

/**
* Return a unique identifier with the given `len`.
*
*     utils.uid(10);
*     // => "FDaS435D2z"
*
* @param {Number} len
* @return {String}
* @api private
*/

const shortid = require('shortid');
const slug = require('slug');

exports.uid = function (len) {
  var buf = []
    , chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    , charlen = chars.length;

  for (var i = 0; i < len; ++i) {
    buf.push(chars[getRandomInt(0, charlen - 1)]);
  }

  return buf.join('');
};

exports.uidLight = function (len) {
  var buf = []
    , chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    , charlen = chars.length;

  for (var i = 0; i < len; ++i) {
    buf.push(chars[getRandomInt(0, charlen - 1)]);
  }

  return buf.join('');
};

/**
* Return a random int, used by `utils.uid()`
*
* @param {Number} min
* @param {Number} max
* @return {Number}
* @api private
*/

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


/**
* Get UUID string for generating object ID.
* <p>
* @returns {string} UUID String.
*/
exports.generateUUID = function () {
  var chars = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
  var uuid = [], rnd = Math.random, r;
  uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
  uuid[14] = '4'; // version 4

  for (var i = 0; i < 36; i++) {
    if (!uuid[i]) {
      r = 0 | rnd() * 38;
      uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r & 0xf];
    }
  }
  return uuid.join('');
};


/**
* exports - description
*
* @param  {String} text a text for slug
* @return {String}      Text after slugify completed.
*/
exports.slugify = function (text) {
  if (!text) return '';

  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')       // Replace spaces with -
    .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
    .replace(/\-\-+/g, '-')     // Replace multiple - with single -
    .replace(/^-+/, '')         // Trim - from start of text
    .replace(/-+$/, '');        // Trim - from end of text
}

/**
* exports - generate slug string from text given.
*
* @param  {type} text description
* @return {type}      description
*/
exports.generateSlug = function (text) {
  if (!text) return '';
  return slug(text, { lower: true }) + '.' + shortid.generate();
}

exports.toSlug = function (text) {
  if (!text) return '';
  return slug(text, { lower: true });
}

exports.generateShortId = function () {
  shortid.characters('abcdefghijklmnopqrstuvwxyz');
  return shortid.generate();
}

/**
* @name getRequestParam
* @summary get field has name is |keyName| from |req| HTTP request object.
*
* @param  {Object} req     HTTP reques object
* @param  {object|string|number} keyName description
* @param  {object} keyName description
*
* @return {object|string|number|undefined} field has given |keyName| or
* undefined if keyName is undefined.
*/
function getRequestParam(req, keyName, defaultValue) {
  if (!keyName) return undefined;

  if (req.query && req.query[keyName]) return req.query[keyName];
  if (req.body && req.body[keyName]) return req.body[keyName];
  if (req.params && req.params[keyName]) return req.params[keyName];
  if (defaultValue) return defaultValue;

  return undefined;
}

exports.getParamFromRequest = getRequestParam;
exports.getRequestParam = getRequestParam;

/**
* @name getSingleObject
* @summary
* Get first object from array or return object if it isn't array.
*
* @param  {array|object} args description
* @return {object}       first object of array or given object.
*/
exports.toSingleObject = function (args) {
  if (Array.isArray(args) && args.length > 0) {
    return args[0];
  }

  if (!args) return {};
  return args;
}

exports.randomString = randomString;

/**
* @name randomString
* @description
* Gennerate random string with mask confis.
*
* @example randomString(4,'A#') will return
* ramdom string has length equals 4 and contain [0-9] and [A-Z]
*
* 'A' : is generate character belong to [A-Z].
* 'a' : is generate character belong to [a-z].
* '#' : is generate character belong to [0-9].
* '!' : is generate character belong '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\'.
*
* @param  {Number} length length of ramdom string.
* @param  {String} chars  configs for mark.
* @return {String}        ramdom string.
*/
function randomString(length, chars) {
  var mask = '';
  if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz';
  if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (chars.indexOf('#') > -1) mask += '0123456789';
  if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
  var result = '';
  for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)];
  return result;
}
