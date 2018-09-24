'use strict';

var init = function () {
  if(process.env.NODE_ENV === 'production') {
    return require('./production');
  }

  if(process.env.NODE_ENV === 'local') {
    return require('./local');
  }

  return require('./development');
};

module.exports = init();
