'use strict';

angular.module('core').factory('Utilities', ['$window', '$timeout',
  function ($window) {
    var utilService = {};

    utilService.sessionStorageManager = {
      setValue: function (key, value) {
        $window.sessionStorage.setItem(key, JSON.stringify(value));
      },
      getValue: function (key) {
        try {
          return JSON.parse($window.sessionStorage.getItem(key));
        } catch (error) {
          return undefined;
        }
      },
      removeValue: function (key) {
        try {
          $window.sessionStorage.removeItem(key);
        } catch (error) {
          console.log(error);
        }
      }
    };

    /**
    * Get UUID string for generating object ID.
    * <p>
    * @returns {string} UUID String.
    */
    utilService.generateUUID = function () {
      var chars = '0123456789abcdef'.split('');
      var uuid = [], rnd = Math.random, r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4'; // version 4

      for (var i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | rnd() * 16;
          uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r & 0xf];
        }
      }
      return uuid.join('');
    };

    /**
    * The Fisher Yates shuffle is an algorithm for generating a random permutation.
    * <p>
    * @param array     - Array want to shuffle.
    * @returns {Array} - Shuffled array from input array.
    */
    utilService.shuffleArray = function (array) {
      array = array || [];
      var counter = array.length;

      // While there are elements in the array
      while (counter > 0) {
        // Pick a random index
        var index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        var temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
      }

      return array;
    };

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

    utilService.randomString = randomString;

    return utilService;
  }
]);

/**
* Register prototype methods.
*
*/
(function () {
  /**
  * String format method.
  * Ex. "{0} is blue, and {1} is yellow!".format("Sea", "The Sun")
  * <p>
  * @returns {String} String has formatted.
  */
  String.prototype.format = function () {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
      var regexp = new RegExp('\\{' + i + '\\}', 'gi');
      formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
  };

  /**
  * Cover text to slug.
  *
  * @return {String} slugify text.
  */
  String.prototype.slugify = function () {
    return this.toLowerCase()
      .replace(/\s+/g, '-')       // Replace spaces with -
      .replace(/[^\w\-]+/g, '')   // Remove all non-word chars
      .replace(/\-\-+/g, '-')     // Replace multiple - with single -
      .replace(/^-+/, '')         // Trim - from start of text
      .replace(/-+$/, '');        // Trim - from end of text
  };

  /**
  * Used for remove escape HTML like &lt and &gt.
  * <p>
  * @returns {String}
  */
  String.prototype.unEscapeHTML = function () {
    var formatted = this;
    formatted = formatted.replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
    return formatted;
  };
})();
