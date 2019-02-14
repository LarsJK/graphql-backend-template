import { GraphQLServer } from "graphql-yoga";
import * as typeDefs from "./schema.graphql";
import { resolvers } from "./resolvers";
import { prisma } from "./generated/prisma-client";
import { Context } from "./types";

const context: Context = {
  prisma
};

const server = new GraphQLServer({
  typeDefs,
  resolvers: resolvers as any,
  context
});

server.start(() => console.log("Server is running on http://localhost:4000"));
