"use strict";

module.exports = {
  hosts: {
    api: process.env.API_HOST || 'http://localhost:1337'
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
  secure: {
    ssl: false
  },
  facebook: {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: "/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'photos']
  },
  twitter: {
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
