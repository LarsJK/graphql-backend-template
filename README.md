## Clean slate

`echo -n "" > datamodel.prisma && echo -n "" > src/schema.graphql && rm -rf src/generated`

## Getting started

`yarn deploy`

Deploys the changes to datamodel.prisma to the database.

`yarn gen`

Generates a new prisma client based on the deployed model as well as types for resolvers and scaffolds sample resolvers based on schema.graphql and types.ts
