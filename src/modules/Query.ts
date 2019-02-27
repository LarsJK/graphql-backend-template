import { QueryResolvers } from "../generated/graphqlgen";

// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  users: (parent, args, ctx) => {
    return ctx.prisma.users();
  },
  user: (parent, args, ctx) => {
    return ctx.prisma.user({ id: args.id });
  },
  realms: (parent, args, ctx) => {
    return ctx.prisma.realms();
  },
  characters: (parent, args, ctx) => {
    return ctx.prisma.characters();
  },
  guild: (parent, args, ctx) => {
    return ctx.prisma.guild({ id: args.id });
  },
  guilds: (parent, args, ctx) => {
    return ctx.prisma.guilds();
  }
};
