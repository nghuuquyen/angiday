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
   * User Module Routes
   */
  'GET /user/find_by_username_or_email/:usernameOrEmail':  { action: 'user/find-by-username-or-email' },
  'POST /user/signin':  { action: 'user/signin' },

  /**
   * Food Module Routes
   */
  'DELETE /food/remove-keyword': { action: 'food/remove-keyword' },
  'DELETE /food/remove-shop':    { action: 'food/remove-shop' },
  'GET /food/search':         { action: 'food/search' },

  /**
   * Keyword Module Routes
   */
  'GET /keyword/search': { action: 'keyword/search' },

  /**
   * Shop Module Routes
   */
  'GET /shop/search': { action: 'shop/search' }
};
