class Exception extends Error {
  constructor(
    message,
    httpStatusCode = null,
    ApiResponse = null,
    rawHttpClientData = null
  ) {
    super(message);
    // Ensure the name of this error is the same as the class name
    this.name = this.constructor.name;

    this.httpStatusCode = httpStatusCode;
    this.ApiResponse = ApiResponse;
    this.rawHttpClientData = rawHttpClientData;
    // This clips the constructor invocation from the stack trace.
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = Exception;
