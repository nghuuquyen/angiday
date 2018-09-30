"use strict";

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

module.exports = randomString;
