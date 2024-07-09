// Import the StatusCodes from the http-status-codes module
const { StatusCodes } = require('http-status-codes');
// Import the CustomAPIError class from the custom-api module
const CustomAPIError = require('./custom-api');

// create bad request error
class BadRequestError extends CustomAPIError {
  constructor(message) {
    // Call the constructor of the parent class (CustomAPIError) with the error message
    super(message);
    // Set the status code to 400 (Bad Request)
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequestError;
