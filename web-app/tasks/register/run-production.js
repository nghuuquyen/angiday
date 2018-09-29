module.exports = function (grunt) {
    grunt.registerTask('run-prod', ['env:production', 'build', 'concurrent:build']);
};
