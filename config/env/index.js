'use strict';

var init = function () {
	if(process.env.NODE_ENV === 'production') {
		return require('./production');
	}

	return require('./development');
};

module.exports = init();
