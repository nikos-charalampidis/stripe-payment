// Import the StatusCodes from the http-status-codes module
const { StatusCodes } = require('http-status-codes');
// Import the CustomAPIError class from the custom-api module
const CustomAPIError = require('./custom-api');

// create not found error 
class NotFoundError extends CustomAPIError {
  constructor(message) {
    // Call the constructor of the parent class (CustomAPIError) with the error message
    super(message);
    // Set the status code to 404 (Not Found)
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}

//
module.exports = NotFoundError;
