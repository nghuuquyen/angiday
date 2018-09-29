'use strict';

module.exports = {
  app: {
    title: 'AnGiDay',
    description: 'Personalized Recommendation Application For Food Reference',
    keywords: 'angiday, an uong , food, food finding'
  },
  port: process.env.PORT || 3000,
  templateEngine: 'handlebars',
  // Session Cookie settings
  sessionCookie: {
    // session expiration is set by default to 24 hours
    maxAge: 24 * (60 * 60 * 1000),
    // httpOnly flag makes sure the cookie is only accessed
    // through the HTTP protocol and not JS/browser
    httpOnly: true,
    // secure cookie should be turned to true to provide additional
    // layer of security so that the cookie is set only when working
    // in HTTPS mode.
    secure: true
  },
  cache: {
    cacheHTML: process.env.CACHE_HTML || false,
    // Please take care, all values is in seconds.
    maxAge: process.env.MAX_AGE || 120 * 24 * 60 * 60, // 120 days.
    expires: process.env.EXPIRES || 120 * 24 * 60 * 60  // default is 120 days in seconds.
  },
  // sessionSecret should be changed for security measures and concerns
  sessionSecret: process.env.SESSION_SECRET || 'vU7yHYYYrxPJHtmJSs9u9koZT68PCC',
  // sessionKey is set to the generic sessionId key used by PHP applications
  // for obsecurity reasons
  sessionKey: process.env.SESSION_KEY || 'FzvRnpxfIUNjthEPHLnUhANVtYLCD1vp5',
  sessionCollection: process.env.SESSION_COLLECTION_NAME || 'qchat-sessions',
  logo: '/public/images/logo.png',
  favicon: '/public/images/favicon.ico',
  uploads: {
    // Define wherther we need remove all uploaded files, when process
    // save API content has problem or not.
    removeUploadedFileOnError: true,
    tmp: {
      dest: '.tmp/uploads/'
    },
    profileUpload: {
      dest: 'public/uploads/users/', // Profile upload destination path
      limits: {
        fileSize: 2 * 1024 * 1024  // Max file size in bytes (2 MB)
      }
    },
    images: {
      dest: 'public/uploads/images/',
      limits: {
        fileSize: 2 * 1024 * 1024 // Max file size in bytes (2 MB)
      },
      limitFiles: 50 // Maximum number files allow in one time upload.
    }
  }
};
