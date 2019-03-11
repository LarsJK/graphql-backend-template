const path = require("path");
import { makePrismaSchema } from "nexus-prisma";
import * as types from "./resolvers";
import datamodelInfo from "./generated/nexus-prisma";
import { prisma } from "./generated/prisma-client";

const schema = makePrismaSchema({
  types: types,

  prisma: {
    datamodelInfo,
    client: prisma
  },

  outputs: {
    schema: path.join(__dirname, "./generated/schema.graphql"),
    typegen: path.join(__dirname, "./generated/nexus.ts")
  },

  typegenAutoConfig: {
    sources: [
      {
        source: path.join(__dirname, "./types.ts"),
        alias: "types"
      }
    ],
    contextType: "types.Context"
  }
});

export default schema;
