"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSchema = void 0;
var type_graphql_1 = require("type-graphql");
var resolvers_1 = require("./resolvers");
var createSchema = function (Container) {
    return (0, type_graphql_1.buildSchema)({
        container: Container,
        resolvers: [resolvers_1.LoginResolver, resolvers_1.LeagueResolver, resolvers_1.HealthResolver],
    });
};
exports.createSchema = createSchema;
