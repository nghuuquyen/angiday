/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {
  /**
   * For security problem, default all routes default is deny. You need
   * manual open it.
   */
  '*': false,
  /**
   * User APIs Group
   */
  'user/create' : true,
  'user/findOne' : true,
  'user/update' : true,
  'user/find-by-username-or-email' : true,
  'user/signin' : true,
  'user/food-new-feeds' : true,
  'user/similar-food-by-food' : true,
  'user/top-popular-foods' : true,
  'user/user-recommedation-foods' : true,

  /**
   * Food APIs Group
   */
  'food/search': true,
  'food/find': true,
  'food/findOne': true,
  'food/create': true,
  'food/update': true,
  'food/destroy': true,
  'food/remove-keyword': true,
  'food/remove-shop': true,

  /**
   * Keyword APIs Group
   */
  'keyword/search': true,
  'keyword/findOne': true,
  'keyword/create': true,
  'keyword/update': true,
  'keyword/destroy': true,

  /**
   * Shop APIs Group
   */
  'shop/search': true,
  'shop/findOne': true,
  'shop/create': true,
  'shop/update': true,
  'shop/destroy': true
};
