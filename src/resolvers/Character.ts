import { CharacterResolvers } from "../generated/graphqlgen";

// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const Character: CharacterResolvers.Type = {
  ...CharacterResolvers.defaultResolvers,

  user: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  realm: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  guild: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  applications: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
