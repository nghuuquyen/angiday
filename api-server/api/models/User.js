/**
* User.js
*
* @description ::
*/

const _ = require('lodash');

module.exports = {
  schema: true,
  attributes: {
    email: {
      type: 'string',
      required: true
    },
    username: {
      type: 'string',
      required: true,
      unique: true
    },
    fullName: {
      type: 'string'
    },
    aboutMe: {
      type: 'string'
    },
    profile: {
      type: 'string'
    },
    profileImage: {
      type: 'json',
      defaultsTo: {}
    },
    profileCoverImage: {
      type: 'json',
      defaultsTo: {}
    },
    password: {
      type: 'string',
      required: true
    },
    isActive: {
      type: 'boolean',
      defaultsTo: true
    },
    roles: {
      type: 'json'
    }
  },
  customToJSON: function () {
    return _.omit(this, ['password'])
  },
  beforeCreate: function (values, next) {
    values.password = UserServices.hashUserPassword(values.password);
    // If user role not set, doing set default to 'user'.
    if (!values.roles) {
      values.roles = ['user'];
    } else {
      next();
    }
  }
};
