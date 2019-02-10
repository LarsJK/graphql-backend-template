import { Resolvers } from "../generated/graphqlgen";

import { Query } from "./Query";
import { User } from "./User";
import { Mutation } from "./Mutation";

export const resolvers: Resolvers = {
  Query,
  User,
  Mutation
};
