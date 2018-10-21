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
   * Food APIs Group
   */
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
