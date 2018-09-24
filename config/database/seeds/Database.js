"use strict";

const Mongoose = require('mongoose');
const User = Mongoose.model('User');

function doSeeds() {
  // Do something 
}

function doRemove() {
  // Do something 
}

module.exports = function () {
  doSeeds();
  doRemove();
};
