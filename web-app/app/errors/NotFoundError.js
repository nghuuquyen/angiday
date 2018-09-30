let BaseError = require('./BaseError');

class NotFoundError extends BaseError {
  constructor(message, isPublic) {
    super(404, message, isPublic);
  }
}

module.exports = NotFoundError;
