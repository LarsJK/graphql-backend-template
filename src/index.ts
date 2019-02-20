import { ApolloServer } from "apollo-server";
import * as typeDefs from "./schema.graphql";
import { resolvers } from "./resolvers";
import { prisma } from "./generated/prisma-client";
import { Context } from "./types";

const context: Context = {
  prisma
};

prisma.createWorkspace({
  title: "Jupiter",
  workers: { create: [{ name: "Lars" }] }
});
const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any,
  context
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
