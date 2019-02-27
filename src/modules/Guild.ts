import { GuildResolvers } from "../generated/graphqlgen";

// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const Guild: GuildResolvers.Type = {
  ...GuildResolvers.defaultResolvers,

  realm: (parent, args, ctx) => {
    return ctx.prisma.guild({ id: parent.id }).realm();
  },
  roster: (parent, args, ctx) => {
    return ctx.prisma.guild({ id: parent.id }).roster();
  },
  posts: (parent, args, ctx) => {
    return ctx.prisma.guild({ id: parent.id }).posts();
  },
  events: (parent, args, ctx) => {
    return ctx.prisma.guild({ id: parent.id }).events();
  },
  applications: (parent, args, ctx) => {
    return ctx.prisma.guild({ id: parent.id }).applications();
  },
  applicationForm: (parent, args, ctx) => {
    return ctx.prisma.guild({ id: parent.id }).applicationForm();
  }
};
