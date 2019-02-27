import { RealmResolvers } from "../generated/graphqlgen";

// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const Realm: RealmResolvers.Type = {
  ...RealmResolvers.defaultResolvers,

  characters: (parent, args, ctx) => {
    return ctx.prisma.realm({ id: parent.id }).characters();
  },
  guilds: (parent, args, ctx) => {
    return ctx.prisma.realm({ id: parent.id }).guilds();
  }
};
