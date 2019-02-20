// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { SubscriptionResolvers } from "../generated/graphqlgen";

export const Subscription: SubscriptionResolvers.Type = {
  ...SubscriptionResolvers.defaultResolvers,
  addedUser: {
    resolve: (payload: any) => {
      return payload;
    },
    subscribe: (parent, args, ctx) => {
      return ctx.prisma.$subscribe.user({ mutation_in: ["CREATED"] }).node();
    }
  },
  deletedUser: {
    resolve: (payload: any) => {
      return payload;
    },
    subscribe: (parent, args, ctx) => {
      return ctx.prisma.$subscribe
        .user({ mutation_in: ["DELETED"] })
        .previousValues();
    }
  }
};
