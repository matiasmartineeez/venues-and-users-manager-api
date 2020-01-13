exports.generic = (res, msg, code) => {
  return res.status(code).json({
    message: "Error",
    error: msg
  });
};

exports.unauthorized = (res, msg) => {
  return res.status(401).json({
    message: "Authorization failed.",
    error: msg
  });
};

exports.customError = class customError extends Error {
  constructor(args, code) {
    super(args);
    this.code = code;
    this.name = "customError";
  }
};
