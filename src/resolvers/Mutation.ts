import { MutationResolvers } from "../generated/graphqlgen";

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  createUser: async (parent, args, ctx) => {
    console.log(args);

    const user = await ctx.prisma.createUser(args);
    console.log(user);
    return user;
  },
  deleteUser: (parent, args, ctx) => {
    return ctx.prisma.deleteUser({ id: args.id });
  }
};
