const response = {
  error: (res, status, errorMessage, error) =>
    res.status(status).json({
      code: status,
      message: errorMessage,
      error,
    }),
  success: (res, status, message, data) =>
    res.status(status).json({
      code: status,
      message,
      data,
    }),
};

export default response;
