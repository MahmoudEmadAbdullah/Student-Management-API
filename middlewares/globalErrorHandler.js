// Error handling middleware for Express applications
const errorHandler = (err, req, res, next) => {

    // Determine the HTTP status code:
    // - Use the error's statusCode if provided
    // - Default to 500 (Internal Server Error) if not specified
    const statusCode = err.statusCode || 500;

    // Set the error message:
    // - Use generic message for 500 errors to avoid leaking sensitive information
    // - Use the error's custom message for other status codes
    const message = statusCode === 500 ? 'Internal Server Error' : err.message;
    
    // Extract error details (if provided):
    // - Can contain validation errors or additional debug information
    const details = err.details || [];

    // Send standardized error response:
    // - Always returns JSON format
    // - Structure: { error: string, details: array }
    res.status(statusCode).json({
        error: message,
        details: details
    });  
};

module.exports = errorHandler;

