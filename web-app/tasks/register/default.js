module.exports = function (grunt) {
	grunt.registerTask('default', ['env:development' , 'lint' , 'concurrent:build' ]);
};
