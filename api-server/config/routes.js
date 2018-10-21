/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'GET /': { view: 'pages/homepage' },
  /**
   * Food Module Routes
   */
  'DELETE /food/remove-keyword': { action: 'food/remove-keyword' },
  'DELETE /food/remove-shop': { action: 'food/remove-shop' },
  /**
   * Keyword Module Routes
   */
  'GET /keyword/search': { action: 'keyword/search' },

  /**
   * Shop Module Routes
   */
  'GET /shop/search': { action: 'shop/search' }
};
