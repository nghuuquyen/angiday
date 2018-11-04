"use strict";

const path = require('path');
const axios = require('axios');
const config = require(path.resolve('./config/config'));
const hostAPI = config.hosts.api;

module.exports = {
  searchFoods
};

/**
 * @name searchFoods
 * @description 
 * Search foods by keywords.
 * @param keywords - List of keyword ids.
 */
function searchFoods(keywords) {
  const configs = {
    method : 'GET',
    url : hostAPI + `/food/search?word_ids=${keywords.join(',')}`
  };

  return axios(configs).then(res => res.data);
}