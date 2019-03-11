import { prismaObjectType } from "nexus-prisma";

const Mutation = prismaObjectType({
  name: "Mutation",
  // Expose all generated `Todo`-queries
  definition: t => t.prismaFields(["*"])
});

export default Mutation;
