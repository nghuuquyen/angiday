"use strict";

const path = require('path');
const axios = require('axios');
const config = require(path.resolve('./config/config'));
const hostAPI = config.hosts.api;
const _ = require('lodash');

module.exports = {
  findOne,
  create,
  findByUsernameOrEmail,
  signin,
  getUserRecommendationFoods,
  getTopPopularFoods
};


function getUserRecommendationFoods(userId) {
  if (!userId) throw new Error('userId is undefined.');

  let configs = {
    method: 'GET',
    url: hostAPI + `/user/user-recommedation-foods/${userId}`
  };

  return axios(configs).then(res => res.data);
}

function getTopPopularFoods() {
  let configs = {
    method: 'GET',
    url: hostAPI + `/user/top-popular-foods`
  };

  return axios(configs).then(res => res.data);
}

/**
 * @name findOne
 * @description
 * Find one user by user id.
 * 
 * @param {String} id       User id string.
 * @param {Object} options  Request options.
 * @param {String} options.populate  Accepts a comma separated list of 
 *                 attributes names for which to populate record values.
 */
function findOne(id, options) {
  if (!id) throw new Error('Food is undefined.');
  if (!options) options = {};

  let configs = {
    method: 'GET',
    url: hostAPI + `/user/${id}`
  };

  if (options.populate && _.isString(options.populate)) {
    configs.url += '?populate=' + options.populate;
  }

  return axios(configs).then(res => res.data);
}

/**
 * @name findByUsernameOrEmail
 * @description
 * Find one user by username or email.
 * 
 * @param {String} usernameOrEmail User email or username string.
 */
function findByUsernameOrEmail(usernameOrEmail) {
  if (!usernameOrEmail) throw new Error('usernameOrEmail is undefined.');

  let configs = {
    method: 'GET',
    url: hostAPI + `/user/find_by_username_or_email/${usernameOrEmail}`
  };

  return axios(configs).then(res => res.data);
}

/**
 * @name findOne
 * @description
 * Find one user by user id.
 * 
 * @param {String} id       User id string.
 * @param {Object} options  Request options.
 */
function create(data, options) {
  if (!options) options = {};

  let configs = {
    method: 'POST',
    url: hostAPI + `/user`,
    data: data
  };

  return axios(configs).then(res => res.data);
}

/**
 * @name findOne
 * @description
 * Find one user by user id.
 * 
 * @param {String} id       User id string.
 * @param {Object} options  Request options.
 */
function signin(usernameOrEmail, password) {
  if (!usernameOrEmail) throw new Error('usernameOrEmail is undefined.');
  if (!password) throw new Error('password is undefined.');

  let configs = {
    method: 'POST',
    url: hostAPI + `/user/signin`,
    data: {
      usernameOrEmail: usernameOrEmail,
      password: password
    }
  };

  return axios(configs).then(res => res.data);
}
