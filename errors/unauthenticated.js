// Import the StatusCodes from the http-status-codes module
const { StatusCodes } = require('http-status-codes');
// Import the CustomAPIError class from the custom-api module
const CustomAPIError = require('./custom-api');

// create not authenticated error
class UnauthenticatedError extends CustomAPIError {
  constructor(message) {
    // Call the constructor of the parent class (CustomAPIError) with the error message
    super(message);
    // Set the status code to 401 (Not Authorized)
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}

module.exports = UnauthenticatedError;
