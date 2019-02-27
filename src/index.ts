import { ApolloServer } from "apollo-server";
import * as typeDefs from "./schema.graphql";
import { prisma } from "./generated/prisma-client";
import { Context } from "./types";
import { resolvers } from "./modules";

const context: Context = {
  prisma
};

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any,
  context
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
