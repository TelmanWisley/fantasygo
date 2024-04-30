"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var CustomLogger = /** @class */ (function () {
    function CustomLogger() {
    }
    CustomLogger.prototype.info = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.info("============================================================Info============================================================");
        console.info.apply(console, args);
    };
    CustomLogger.prototype.error = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.error("===========================================================Error===========================================================");
        console.error.apply(console, args);
    };
    return CustomLogger;
}());
exports.Logger = new CustomLogger();
