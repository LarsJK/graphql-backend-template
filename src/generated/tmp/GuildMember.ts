// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { GuildMemberResolvers } from "../graphqlgen";

export const GuildMember: GuildMemberResolvers.Type = {
  ...GuildMemberResolvers.defaultResolvers,

  character: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  guild: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  },
  events: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
