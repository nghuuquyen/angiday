"use strict";

const path = require('path');
const axios = require('axios');
const config = require(path.resolve('./config/config'));
const hostAPI = config.hosts.api;
const _ = require('lodash');

module.exports = {
  searchFoods,
  findOne,
  getFoodDetail
};

/**
 * @name searchFoods
 * @description 
 * Search foods by keywords.
 * @param keywords - List of keyword ids.
 */
function searchFoods(keywords) {
  const configs = {
    method: 'GET',
    url: hostAPI + `/food/search?word_ids=${keywords.join(',')}`
  };

  return axios(configs).then(res => res.data);
}

/**
 * @name findOne
 * @description
 * Find one food by food id. It also support population list shop or keyword
 * which related to selected food.
 * 
 * @param {String} foodId   Food id string.
 * @param {Object} options  Request options.
 * @param {String} options.populate  Accepts a comma separated list of 
 *                 attributes names for which to populate record values.
 */
function findOne(foodId, options) {
  if (!foodId) throw new Error('Food is undefined.');
  if (!options) options = {};

  let configs = {
    method: 'GET',
    url: hostAPI + `/food/${foodId}`
  };

  if (options.populate && _.isString(options.populate)) {
    configs.url += '?populate=' + options.populate;
  }

  return axios(configs).then(res => res.data);
}

/**
 * @name findOne
 * @description
 * Find one food by food id. It also support population list shop or keyword
 * which related to selected food.
 * 
 * @param {String} foodId   Food id string.
 * @param {Object} options  Request options.
 * @param {String} options.populate  Accepts a comma separated list of 
 *                 attributes names for which to populate record values.
 */
function getFoodDetail(foodId, userId) {
  if (!foodId) throw new Error('Food is undefined.');

  let configs = {
    method: 'GET',
    url: hostAPI + `/food/get-food-detail?food=${foodId}`
  };  

  if(userId) {
    configs.url += '&user=' + userId; 
  }

  return axios(configs).then(res => res.data);
}