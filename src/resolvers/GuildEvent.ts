import { GuildEventResolvers } from "../generated/graphqlgen";

// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const GuildEvent: GuildEventResolvers.Type = {
  ...GuildEventResolvers.defaultResolvers,

  instance: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  guild: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  roster: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
