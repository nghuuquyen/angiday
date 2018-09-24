class BaseError extends Error {
  constructor(status, message, isPublic = false) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.status = status;

    // If public equals TRUE, error will send direct to client.
    this.isPublic = isPublic;
    Error.captureStackTrace(this, this.constructor.name);
  }

  toJSON () {
    return {
      name : this.name,
      message : this.message,
      status : this.status
    };
  }
}

module.exports = BaseError;
