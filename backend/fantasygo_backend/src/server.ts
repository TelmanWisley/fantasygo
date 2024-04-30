import "reflect-metadata";
import { Container } from "typedi";
import { ApolloServer } from "apollo-server-express";
import express from "express";
import cors from "cors";

import { createSchema } from "./schema";
import { errorMiddleware } from "./middlewares";
import { env } from "./env";
import { Logger } from "./utils";

const bootstrap = async () => {
  try {
    const schema = await createSchema(Container);

    const app = express();
    const server = new ApolloServer({
      schema,
      context: ({ req, res }) => ({ req, res }),
      debug: true,
      formatError: errorMiddleware
    });

    await server.start();

    const corsConfig = {
      methods: "GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS",
      credentials: true,
      origin: [/localhost*/],
    };

    app.use(cors(corsConfig));
    server.applyMiddleware({ app, cors: corsConfig });

    const { port } = env;

    app.listen(port, () => {
      Logger.info(`Server is running on localhost:${port}${server.graphqlPath}`);
    });
  } catch (err) {
    Logger.error(err);
  }
};

bootstrap();
