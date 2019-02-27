import { CharacterResolvers } from "../generated/graphqlgen";
import { User } from "../generated/prisma-client";

// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const Character: CharacterResolvers.Type = {
  ...CharacterResolvers.defaultResolvers,

  user: (parent, args, ctx) => {
    return ctx.prisma.character({ id: parent.id }).user();
  },
  realm: (parent, args, ctx) => {
    return ctx.prisma.character({ id: parent.id }).realm();
  },
  guild: (parent, args, ctx) => {
    return ctx.prisma.character({ id: parent.id }).guild();
  },
  applications: (parent, args, ctx) => {
    return ctx.prisma.character({ id: parent.id }).applications();
  }
};
