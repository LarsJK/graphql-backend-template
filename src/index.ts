import { ApolloServer } from "apollo-server";
import * as typeDefs from "./schema.graphql";
import { resolvers } from "./resolvers";
import { prisma } from "./generated/prisma-client";
import { Context } from "./types";

const context: Context = {
  prisma
};

async function seed() {
  try {
    const workspace = await prisma.createWorkspace({
      title: "Mystore",
      workers: { create: [{ name: "Vegard" }] }
    });
    console.log(workspace);
  } catch (error) {
    console.log(error);
  }
}

// seed();

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any,
  context
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
