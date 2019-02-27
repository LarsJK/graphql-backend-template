import { GuildApplicationResolvers } from "../generated/graphqlgen";

// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const GuildApplication: GuildApplicationResolvers.Type = {
  ...GuildApplicationResolvers.defaultResolvers,

  guild: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  character: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  answers: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
