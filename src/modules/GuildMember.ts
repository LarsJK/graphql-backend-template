import { GuildMemberResolvers } from "../generated/graphqlgen";

// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const GuildMember: GuildMemberResolvers.Type = {
  ...GuildMemberResolvers.defaultResolvers,

  character: (parent, args, ctx) => {
    return ctx.prisma.guildMember({ id: parent.id }).character();
  },
  guild: (parent, args, ctx) => {
    return ctx.prisma.guildMember({ id: parent.id }).guild();
  },
  events: (parent, args, ctx) => {
    return ctx.prisma.guildMember({ id: parent.id }).events();
  }
};
