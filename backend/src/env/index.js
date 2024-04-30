"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var _env = process.env;
exports.env = {
    port: _env.PORT,
    secretKey: _env.SECRET_KEY,
    premierUrl: _env.PREMIER_URL,
    championUrl: _env.CHAMPION_URL
};
