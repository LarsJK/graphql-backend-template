import { MutationResolvers } from "../generated/graphqlgen";

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  createUser: (parent, args, ctx) => {
    return ctx.prisma.createUser({ name: args.name });
  },
  deleteUser: (parent, args, ctx) => {
    return ctx.prisma.deleteUser({ id: args.id });
  }
};
