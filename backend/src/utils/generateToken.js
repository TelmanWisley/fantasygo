"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var env_1 = require("../env");
var generateToken = function (tokenContent) {
    var secretKey = env_1.env.secretKey;
    var token = jsonwebtoken_1.default.sign(__assign({}, tokenContent), secretKey, {
        expiresIn: "1h",
    });
    return token;
};
exports.generateToken = generateToken;
