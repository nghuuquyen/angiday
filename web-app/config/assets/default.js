/**
* Created by Quyen Nguyen Huu
* Email: nghuuquyen@gmail.com
*/

'use strict';

module.exports = {
  client: {
    lib: {
      css: [
        'public/lib/bootstrap/dist/css/bootstrap.min.css',
        'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
        'public/lib/ng-tags-input/ng-tags-input.min.css'
      ],
      js: [
        'public/lib/jquery/dist/jquery.min.js',
        'public/lib/bootstrap/dist/js/bootstrap.min.js',
        'public/lib/angular/angular.min.js',
        'public/lib/angular-ui-router/release/angular-ui-router.min.js',
        'public/lib/angular-resource/angular-resource.min.js',
        'public/lib/ng-tags-input/ng-tags-input.min.js',
        'public/lib/angular-modal-service/dst/angular-modal-service.min.js'
      ],
      tests: []
    },
    css: [
      'public/dist/css/main.css',
      'client/modules/*/css/*.css',
      'client/modules/*/css/**/*.css'
    ],
    sass: [
      'client/modules/*/scss/*.scss',
      'client/modules/*/scss/**/*.scss'
    ],
    js: [
      'client/modules/core/app/config.js',
      'client/modules/core/app/init.js',
      'public/assets/js/theme.js',
      'client/modules/*/*.js',
      'client/modules/*/**/*.js'
    ],
    views: ['client/modules/*/views/**/*.html'],
    templates: ['build/templates.js']
  },
  server: {
    gruntConfig: 'Gruntfile.js',
    allJS: ['server.js', 'config/**/*.js', 'app/**/*.js'],
    views: 'app/views/*.html'
  }
};
