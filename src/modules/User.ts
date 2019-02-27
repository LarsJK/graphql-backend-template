import { UserResolvers } from "../generated/graphqlgen";
import { Character } from "../generated/prisma-client";

// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,

  characters: (parent, args, ctx) => {
    const userCharacters: Character[] = ctx.prisma
  .user({ email: parent.email })
  .characters();
  return userCharacters;
  }
};
