"use strict";
const hbs = require('express-hbs');
const path = require('path');

/**
* @name initViewEngine
* @description
* Setup view engine of application.
*
* @param  {object} app express instance
* @param  {object} db  mongoose instance
* @return {object}     session middleware config
*/
function initViewEngine(app, db) {
  // Set view template engine for file extension server.view.html
  app.engine('server.view.html', hbs.express4({
    extname: '.server.view.html',
    layoutsDir : 'app/views/layout',
    defaultLayout : 'app/views/layout/default.server.view.html',
    partialsDir : [
      'app/views/partials'
    ]
  }));

  // Set view engine
  app.set('view engine', 'server.view.html');

  // Set views folder
  app.set('views', path.resolve('./app/views'));

  /*
  * -----------------------
  * --- Register Helper ---
  * -----------------------
  */

  hbs.registerHelper('json', function(obj) {
    return new hbs.SafeString(JSON.stringify(obj));
  });

  hbs.registerHelper('ifCond', function (v1, operator, v2, options) {
    return checkCondition(v1, operator, v2) ? options.fn(this) : options.inverse(this);
  });

  hbs.registerHelper('raw', function(options) {
    return options.fn();
  });
}

function checkCondition(v1, operator, v2) {
  switch(operator) {
    case '===':
    return (v1 === v2);
    case '!==':
    return (v1 !== v2);
    case '<':
    return (v1 < v2);
    case '<=':
    return (v1 <= v2);
    case '>':
    return (v1 > v2);
    case '>=':
    return (v1 >= v2);
    case '&&':
    return (v1 && v2);
    case '||':
    return (v1 || v2);
    default:
    return false;
  }
}

module.exports = initViewEngine;
