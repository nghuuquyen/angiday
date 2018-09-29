module.exports = function (grunt) {
  grunt.registerTask('build', [
    'env:production', 'clean:dist', 'sass', 'uglify',
    'cssmin', 'concat', 'concat_css'
  ]);
};
