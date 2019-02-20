import { Resolvers } from "../generated/graphqlgen";

import { Query } from "./Query";
import { User } from "./User";
import { Mutation } from "./Mutation";
import { Subscription } from "./Subscription";

export const resolvers: Resolvers = {
  Query,
  User,
  Mutation,
  Subscription
};
