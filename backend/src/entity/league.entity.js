"use strict";
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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.League = void 0;
var type_graphql_1 = require("type-graphql");
var League = function () {
    var _classDecorators = [(0, type_graphql_1.ObjectType)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _firstName_decorators;
    var _firstName_initializers = [];
    var _firstName_extraInitializers = [];
    var _secondName_decorators;
    var _secondName_initializers = [];
    var _secondName_extraInitializers = [];
    var _displayName_decorators;
    var _displayName_initializers = [];
    var _displayName_extraInitializers = [];
    var _totalPoints_decorators;
    var _totalPoints_initializers = [];
    var _totalPoints_extraInitializers = [];
    var _team_decorators;
    var _team_initializers = [];
    var _team_extraInitializers = [];
    var League = _classThis = /** @class */ (function () {
        function League_1() {
            this.firstName = __runInitializers(this, _firstName_initializers, void 0);
            this.secondName = (__runInitializers(this, _firstName_extraInitializers), __runInitializers(this, _secondName_initializers, void 0));
            this.displayName = (__runInitializers(this, _secondName_extraInitializers), __runInitializers(this, _displayName_initializers, void 0));
            this.totalPoints = (__runInitializers(this, _displayName_extraInitializers), __runInitializers(this, _totalPoints_initializers, void 0));
            this.team = (__runInitializers(this, _totalPoints_extraInitializers), __runInitializers(this, _team_initializers, void 0));
            __runInitializers(this, _team_extraInitializers);
        }
        return League_1;
    }());
    __setFunctionName(_classThis, "League");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _firstName_decorators = [(0, type_graphql_1.Field)()];
        _secondName_decorators = [(0, type_graphql_1.Field)()];
        _displayName_decorators = [(0, type_graphql_1.Field)()];
        _totalPoints_decorators = [(0, type_graphql_1.Field)()];
        _team_decorators = [(0, type_graphql_1.Field)()];
        __esDecorate(null, null, _firstName_decorators, { kind: "field", name: "firstName", static: false, private: false, access: { has: function (obj) { return "firstName" in obj; }, get: function (obj) { return obj.firstName; }, set: function (obj, value) { obj.firstName = value; } }, metadata: _metadata }, _firstName_initializers, _firstName_extraInitializers);
        __esDecorate(null, null, _secondName_decorators, { kind: "field", name: "secondName", static: false, private: false, access: { has: function (obj) { return "secondName" in obj; }, get: function (obj) { return obj.secondName; }, set: function (obj, value) { obj.secondName = value; } }, metadata: _metadata }, _secondName_initializers, _secondName_extraInitializers);
        __esDecorate(null, null, _displayName_decorators, { kind: "field", name: "displayName", static: false, private: false, access: { has: function (obj) { return "displayName" in obj; }, get: function (obj) { return obj.displayName; }, set: function (obj, value) { obj.displayName = value; } }, metadata: _metadata }, _displayName_initializers, _displayName_extraInitializers);
        __esDecorate(null, null, _totalPoints_decorators, { kind: "field", name: "totalPoints", static: false, private: false, access: { has: function (obj) { return "totalPoints" in obj; }, get: function (obj) { return obj.totalPoints; }, set: function (obj, value) { obj.totalPoints = value; } }, metadata: _metadata }, _totalPoints_initializers, _totalPoints_extraInitializers);
        __esDecorate(null, null, _team_decorators, { kind: "field", name: "team", static: false, private: false, access: { has: function (obj) { return "team" in obj; }, get: function (obj) { return obj.team; }, set: function (obj, value) { obj.team = value; } }, metadata: _metadata }, _team_initializers, _team_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        League = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return League = _classThis;
}();
exports.League = League;
