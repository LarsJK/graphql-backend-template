import { QueryResolvers } from "../generated/graphqlgen";
import { prisma } from "../generated/prisma-client";

// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.


export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  users: async (parent, args, ctx) => {
    return await prisma.users();
  },
  user: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
