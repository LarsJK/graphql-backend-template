import { MutationResolvers } from "../generated/graphqlgen";

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  createUser: (parent, args, ctx) => {
    console.log(args);

    const user = ctx.prisma.createUser(args);
    user.then(user => {
      console.log(user);
    });
    return user;
  },
  deleteUser: (parent, args, ctx) => {
    return ctx.prisma.deleteUser({ id: args.id });
  },

  createCharacter: (parent, args, ctx) => {
    console.log("args: ", args);
    const character = ctx.prisma.createCharacter({
      user: { connect: { id: args.input.user } },
      realm: { connect: { id: args.input.realm } },
      name: args.input.name,
      class: args.input.class!
    });
    character.then(character => {
      console.log(character);
    });
    return character;
  },
  createRealm: (parent, args, ctx) => {
    console.log("args: ", args);
    const realm = ctx.prisma.createRealm(args);
    realm.then(realm => {
      console.log(realm);
    });
    return realm;
  },
  createGuild: (parent, args, ctx) => {
    console.log("args: ", args);
    const guild = ctx.prisma.createGuild({
      realm: { connect: { id: args.input.realm } },
      name: args.input.name
    });
    guild.then(guild => {
      console.log(guild);
    });
    return guild;
  },
  joinGuild: (parent, args, ctx) => {
    return ctx.prisma.createGuildMember({
      character: { connect: { id: args.input.character } }
    });
  }
};
