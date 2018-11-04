"use strict";

module.exports = {
  hosts: {
    // Internal API endpoint.
    api: process.env.API_HOST || 'http://localhost:1337',
    // Public API gateway, used for client connecting to.
    apiGateway: process.env.API_GATEWAY || 'http://localhost:1337'
  },
  db: {
    // mongodb://[username:password@]host1[:port1]
    uri: process.env.MONGO_URI,
    options: {
      useMongoClient: true
    },
    // Enable mongoose debug mode
    debug: process.env.MONGODB_DEBUG || false
  },
  secure : {
    /*
    * If turn to true, please make sure you on SSL connection.
    * If not you will lost cookie because on in secure mode, cookie only
    * send on HTTPs connection.
    */
    ssl : process.env.SSL_MODE || false
  },
  sessionSecret: process.env.SESSION_SECRET,
  facebook: {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: "/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos']
  },
  twitter:{
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    callbackURL: "/auth/twitter/callback",
    profileFields: ['id', 'displayName', 'photos']
  },
  redis: {
    host: process.env.REDIS_HOSTNAME,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
  }
};
