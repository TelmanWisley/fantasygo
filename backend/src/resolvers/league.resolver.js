"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeagueResolver = void 0;
var type_graphql_1 = require("type-graphql");
var typedi_1 = require("typedi");
var utils_1 = require("../utils");
var env_1 = require("../env");
var entity_1 = require("../entity");
var LeagueResolver = function () {
    var _classDecorators = [(0, typedi_1.Service)(), (0, type_graphql_1.Resolver)(function (_type) { return entity_1.League; })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _teamMutation_decorators;
    var _leagueMutation_decorators;
    var LeagueResolver = _classThis = /** @class */ (function () {
        function LeagueResolver_1() {
            __runInitializers(this, _instanceExtraInitializers);
        }
        LeagueResolver_1.prototype.teamMutation = function (ctx, leagueType) {
            return __awaiter(this, void 0, void 0, function () {
                var url, transform, leagues;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, utils_1.verifyToken)(ctx)];
                        case 1:
                            _a.sent();
                            if (leagueType === "premier") {
                                url = env_1.env.premierUrl;
                                transform = function (_a) {
                                    var data = _a.data;
                                    var originData = data;
                                    var mapData = originData.elements.map(function (league) { return ({
                                        displayName: "".concat(league.first_name[0].toUpperCase(), ".").concat(league.second_name),
                                        firstName: league.first_name,
                                        secondName: league.second_name,
                                        team: league.team.toString(),
                                        totalPoints: league.total_points,
                                    }); });
                                    var teamArray = Array.from(new Set(mapData.map(function (item) { return item.team; })));
                                    return teamArray;
                                };
                            }
                            else if (leagueType === "champion") {
                                url = env_1.env.championUrl;
                                transform = function (_a) {
                                    var data = _a.data;
                                    var originData = data;
                                    var mapData = originData.data.value.playerList.map(function (league) {
                                        var _a = league.pFName.split(" "), firstName = _a[0], secondName = _a[1];
                                        return {
                                            displayName: league.pDName,
                                            firstName: firstName,
                                            secondName: secondName || "",
                                            team: league.tName,
                                            totalPoints: league.totPts,
                                        };
                                    });
                                    var teamArray = Array.from(new Set(mapData.map(function (item) { return item.team; })));
                                    return teamArray;
                                };
                            }
                            return [4 /*yield*/, (0, utils_1.fetchData)({
                                    url: url,
                                    transform: transform,
                                })];
                        case 2:
                            leagues = _a.sent();
                            return [2 /*return*/, leagues];
                    }
                });
            });
        };
        LeagueResolver_1.prototype.leagueMutation = function (ctx_1, leagueType_1) {
            return __awaiter(this, arguments, void 0, function (ctx, leagueType, page, limit, sort, team) {
                var url, transform, leagues;
                if (page === void 0) { page = 1; }
                if (limit === void 0) { limit = 20; }
                if (sort === void 0) { sort = true; }
                if (team === void 0) { team = ""; }
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, (0, utils_1.verifyToken)(ctx)];
                        case 1:
                            _a.sent();
                            if (leagueType === "premier") {
                                url = env_1.env.premierUrl;
                                transform = function (_a) {
                                    var data = _a.data, team = _a.team, page = _a.page, limit = _a.limit, sort = _a.sort;
                                    var originData = data;
                                    var mapData = originData.elements
                                        .map(function (league) { return ({
                                        displayName: "".concat(league.first_name[0].toUpperCase(), ".").concat(league.second_name),
                                        firstName: league.first_name,
                                        secondName: league.second_name,
                                        team: league.team.toString(),
                                        totalPoints: league.total_points,
                                    }); })
                                        .filter(function (league) { return !team || league.team === team; })
                                        .sort(function (a, b) {
                                        return sort
                                            ? b.totalPoints - a.totalPoints
                                            : a.totalPoints - b.totalPoints;
                                    });
                                    return (0, utils_1.paginate)(mapData, page, limit);
                                };
                            }
                            else if (leagueType === "champion") {
                                url = env_1.env.championUrl;
                                transform = function (_a) {
                                    var data = _a.data, team = _a.team, page = _a.page, limit = _a.limit, sort = _a.sort;
                                    var originData = data;
                                    var mapData = originData.data.value.playerList
                                        .map(function (league) {
                                        var _a = league.pFName.split(" "), firstName = _a[0], secondName = _a[1];
                                        return {
                                            displayName: league.pDName,
                                            firstName: firstName,
                                            secondName: secondName || "",
                                            team: league.tName,
                                            totalPoints: league.totPts,
                                        };
                                    })
                                        .filter(function (league) { return !team || league.team === team; })
                                        .sort(function (a, b) {
                                        return sort
                                            ? b.totalPoints - a.totalPoints
                                            : a.totalPoints - b.totalPoints;
                                    });
                                    return (0, utils_1.paginate)(mapData, page, limit);
                                };
                            }
                            else {
                                throw new Error("Invalid league type");
                            }
                            return [4 /*yield*/, (0, utils_1.fetchData)({
                                    url: url,
                                    page: page,
                                    limit: limit,
                                    sort: sort,
                                    transform: transform,
                                    team: team,
                                })];
                        case 2:
                            leagues = _a.sent();
                            return [2 /*return*/, leagues];
                    }
                });
            });
        };
        return LeagueResolver_1;
    }());
    __setFunctionName(_classThis, "LeagueResolver");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _teamMutation_decorators = [(0, type_graphql_1.Mutation)(function (_type) { return [String]; })];
        _leagueMutation_decorators = [(0, type_graphql_1.Mutation)(function (_type) { return [entity_1.League]; })];
        __esDecorate(_classThis, null, _teamMutation_decorators, { kind: "method", name: "teamMutation", static: false, private: false, access: { has: function (obj) { return "teamMutation" in obj; }, get: function (obj) { return obj.teamMutation; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _leagueMutation_decorators, { kind: "method", name: "leagueMutation", static: false, private: false, access: { has: function (obj) { return "leagueMutation" in obj; }, get: function (obj) { return obj.leagueMutation; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        LeagueResolver = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return LeagueResolver = _classThis;
}();
exports.LeagueResolver = LeagueResolver;
