let BaseError = require('./BaseError');

class ApiError extends BaseError {
  constructor(status, message) {
    if(!message) {
      // If just put message without status code.
      super(400, status, true);
    } else {
      super(status || 400, message, true);
    }
  }
}

module.exports = ApiError;
