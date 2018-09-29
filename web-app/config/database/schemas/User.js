'use strict';

const Mongoose 	= require('mongoose');
const crypto = require('crypto');
const hsPassword = require('../helpers/HashSaltPassword');
const DEFAULT_USER_PICTURE = "/assets/images/default-user-avatar.jpg";

/**
* A Validation function for username
* - at least 3 characters
* - only a-z0-9_-.
* - contain at least one alphanumeric character
* - not in list of illegal usernames
* - no consecutive dots: "." ok, ".." nope
* - not begin or end with "."
*/

var validateUsername = function (username) {
  var usernameRegex = /^(?=[\w.-]+$)(?!.*[._-]{2})(?!\.)(?!.*\.$).{3,34}$/;
  return (
    this.provider !== 'local' || (username && usernameRegex.test(username))
  );
};


var UserSchema = new Mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    default: '',
    required: 'Please fill in your first name'
  },
  lastName: {
    type: String,
    trim: true,
    default: '',
    required: 'Please fill in your last name'
  },
  displayName: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    index: {
      unique: true,
      /**
      * For this to work on a previously indexed field,
      * the index must be dropped & the application restarted.
      */
      sparse: true
    },
    lowercase: true,
    trim: true,
    default: ''
  },
  username: {
    type: String,
    unique: 'Username already exists',
    required: 'Please fill in a username',
    validate: [validateUsername, 'Please enter a valid username: 3+ characters long, non restricted word, characters "_-.", no consecutive dots, does not begin or end with dots, letters a-z and numbers 0-9.'],
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    default: ''
  },
  salt: {
    type: String
  },
  profileImageURL: {
    type: String,
    default: DEFAULT_USER_PICTURE
  },
  provider: {
    type: String,
    required: 'Provider is required'
  },
  providerData: {},
  additionalProvidersData: {},
  roles: {
    type: [{
      type: String,
      enum: ['user', 'admin']
    }],
    default: ['user'],
    required: 'Please provide at least one role'
  },
  updatedAt: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  /* For reset password */
  resetPasswordToken: {
    type: String
  },
  resetPasswordExpires: {
    type: Date
  }
}, {
  toJSON : {
    transform: function (doc, ret) {
      // For security problem.
      delete ret.password;
      delete ret.salt;
    }
  }
});


/**
* Before save a user document, Make sure:
* 1. User's picture is assigned, if not, assign it to default one.
* 2. Hash user's password with salt
*/
UserSchema.pre('save', function (next) {
  if (this.password && this.isModified('password')) {
    const passwordData = hsPassword.saltHashPassword(this.password);

    this.salt = passwordData.salt;
    this.password = passwordData.hash;
  }

  next();
});


/**
* Create instance method for hashing a password
*/
UserSchema.methods.hashPassword = function (password) {
  if (this.salt && password) {
    return hsPassword.hashPassword(password, this.salt);
  } else {
    return password;
  }
};

/**
* Create instance method for authenticating user
*/
UserSchema.methods.authenticate = function (password) {
  return this.password === this.hashPassword(password);
};


module.exports = Mongoose.model('User', UserSchema);
