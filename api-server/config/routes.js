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
  'GET /user/find_by_username_or_email/:usernameOrEmail': { action: 'user/find-by-username-or-email' },
  'POST /user/signin': { action: 'user/signin' },

  'GET /user/food-new-feeds/:userId': { action: 'user/food-new-feeds' },
  'GET /user/similar-food-by-food/:foodId': { action: 'user/similar-food-by-food' },
  'GET /user/top-popular-foods': { action: 'user/top-popular-foods' },
  'GET /user/user-recommedation-foods/:userId': { action: 'user/user-recommedation-foods' },

  /**
   * Food Module Routes
   */
  'DELETE /food/remove-keyword': { action: 'food/remove-keyword' },
  'DELETE /food/remove-shop': { action: 'food/remove-shop' },
  'GET /food/search': { action: 'food/search' },
  'GET /food/get-food-detail': { action: 'food/get-food-detail' },
  'POST /food/user-tracking': { action: 'food/user-tracking' },

  /**
   * Keyword Module Routes
   */
  'GET /keyword/search': { action: 'keyword/search' },
  'POST /keyword/user-tracking': { action: 'keyword/user-tracking' },
  'GET /search/user-interactive': { action: 'search/search-user-interactive' },
  'GET /search/user': { action: 'search/get-user-related' },
  'GET /search/user/download': { action: 'search/download-list-user-related' },

  /**
   * Shop Module Routes
   */
  'GET /shop/search': { action: 'shop/search' }
};
