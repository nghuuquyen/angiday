(function () {
  'use strict';

  angular.module(ApplicationConfiguration.applicationModuleName)
    .run(RunFunction);

  function RunFunction($rootScope) {
    // Config for tinyMCE text editor.
    $rootScope.tinymceOptions = {
      /*
      * Never allow editor auto convert urls because it lead to problem
      * with upload image relative URL.
      */
      convert_urls: false,
      height: 400,
      max_height: 450,
      theme: 'modern',
      image_dimensions: true,
      image_class_list: [
        { title: 'Responsive', value: 'img-responsive' }
      ],
      plugins: [
        'advlist lists autosave code codesample link image',
        'charmap print preview hr anchor contextmenu directionality table',
        'emoticons template textcolor colorpicker media fullscreen',
        'searchreplace wordcount textpattern autolink',
        'insertdatetime media table paste toc'
      ],
      templates: [
        {
          title: "Sample Template",
          description: "This Is Sample Format Of Lesson Content."
        }
      ],
      codesample_languages: [
        { text: 'HTML/XML', value: 'markup' },
        { text: 'JavaScript', value: 'javascript' },
        { text: 'CSS', value: 'css' },
        { text: 'PHP', value: 'php' },
        { text: 'Ruby', value: 'ruby' },
        { text: 'Python', value: 'python' },
        { text: 'Java', value: 'java' },
        { text: 'C', value: 'c' },
        { text: 'C#', value: 'csharp' },
        { text: 'C++', value: 'cpp' }
      ],
      textpattern_patterns: [
        { start: '*', end: '*', format: 'italic' },
        { start: '**', end: '**', format: 'bold' },
        { start: '#', format: 'h1' },
        { start: '##', format: 'h2' },
        { start: '###', format: 'h3' },
        { start: '####', format: 'h4' },
        { start: '#####', format: 'h5' },
        { start: '######', format: 'h6' },
        { start: '1. ', cmd: 'InsertOrderedList' },
        { start: '* ', cmd: 'InsertUnorderedList' },
        { start: '- ', cmd: 'InsertUnorderedList' }
      ],
      contextmenu: "formatselect | insertMediaButton paste | link image inserttable | cell row column deletetable",
      toolbar: [
        'formatselect | codesample insertMediaButton undo redo | bold italic | alignleft aligncenter alignright alignjustify |',
        'bullist numlist outdent indent paste searchreplace| link image media | code fullscreen'
      ]
    };

    // TinyMCEconfigs for simple editor.
    $rootScope.simpleTinyMCEconfigs = angular.copy($rootScope.tinymceOptions);
    $rootScope.simpleTinyMCEconfigs.toolbar = ['insertMediaButton link image codesample'];
    $rootScope.simpleTinyMCEconfigs.menu = false;
    $rootScope.simpleTinyMCEconfigs.menubar = false;
    $rootScope.simpleTinyMCEconfigs.height = 450;
  }
})();
