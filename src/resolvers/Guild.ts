import { GuildResolvers } from "../generated/graphqlgen";

// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const Guild: GuildResolvers.Type = {
  ...GuildResolvers.defaultResolvers,

  realm: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  roster: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  posts: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  events: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  applications: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  applicationForm: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
