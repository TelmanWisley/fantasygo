"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = void 0;
var utils_1 = require("../utils");
var errorMiddleware = function (err) {
    utils_1.Logger.error(err);
    return {
        message: err.message,
        errorCode: err.extensions.errorCode,
        statusCode: err.extensions.code
    };
};
exports.errorMiddleware = errorMiddleware;
