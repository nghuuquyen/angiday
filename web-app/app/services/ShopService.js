"use strict";

const path = require('path');
const axios = require('axios');
const config = require(path.resolve('./config/config'));
const hostAPI = config.hosts.api;
const _ = require('lodash');

module.exports = {
  findOne
};

/**
 * @name findOne
 * @description
 * Find one shop by shop id. It also support population list shop or keyword
 * which related to selected shop.
 * 
 * @param {String} shopId   Shop id string.
 * @param {Object} options  Request options.
 * @param {String} options.populate  Accepts a comma separated list of 
 *                 attributes names for which to populate record values.
 */
function findOne(shopId, options) {
  if (!shopId) throw new Error('Food is undefined.');
  if (!options) options = {};

  let configs = {
    method: 'GET',
    url: hostAPI + `/shop/${shopId}`
  };

  if (options.populate && _.isString(options.populate)) {
    configs.url += '?populate=' + options.populate;
  }

  console.log(configs);

  return axios(configs).then(res => res.data);
}