// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { WorkspaceResolvers } from "../graphqlgen";

export const Workspace: WorkspaceResolvers.Type = {
  ...WorkspaceResolvers.defaultResolvers,

  workers: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};