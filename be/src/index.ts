import { ApolloServer } from "apollo-server-express";
import "dotenv-safe/config";
import express from "express";
import path from "path";
import { buildSchema } from "type-graphql";
import { ConnectionOptions, createConnection } from "typeorm";
import { Hello } from "./entities/Hello";
import { HelloResolver } from "./resolvers/HelloResolver";

const main = async () => {
  const config: ConnectionOptions = {
    type: "postgres",
    url: process.env.DATABASE_URL,
    logging: true,
    synchronize: true,
    migrations: [path.join(__dirname, "./migrations/*")],
    entities: [Hello],
  };
  try {
    let conn = await createConnection({ ...config });
    // await conn.runMigrations();
  } catch (error) {
    console.log("Error while connecting to the database", error);
    return error;
  }

  const app = express();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [HelloResolver],
      validate: false,
    }),
    context: ({ req, res }) => ({
      req,
      res,
    }),
  });
  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  app.listen(parseInt(process.env.PORT), () =>
    console.log(`Server is running on ${process.env.PORT} `)
  );
};

main().catch((err) => console.error(err));
