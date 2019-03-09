import { MutationResolvers } from "../generated/graphqlgen";

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  createUser: (parent, args, ctx) => {
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
    const realm = ctx.prisma.createRealm(args);
    realm.then(realm => {
      console.log(realm);
    });
    return realm;
  },
  createGuild: (parent, args, ctx) => {
    const guild = ctx.prisma.createGuild({
      realm: { connect: { id: args.input.realm } },
      name: args.input.name
    });
    guild.then(guild => {
      console.log(guild);
    });
    return guild;
  },

  createGuildMember: (parent, args, ctx) => {
    const guildMember = ctx.prisma.createGuildMember({
      character: { connect: { id: args.input.character } },
      guild: { connect: { id: args.input.guild } },
      guildRole: args.input.guildRole,
      role: args.input.role
    });
    guildMember.then(guild => {
      console.log("New guild member created: ", guild);
    });
    return guildMember;
  },
  deleteGuildMember: (parent, args, ctx) => {
    const guildMember = ctx.prisma.deleteGuildMember({ id: args.input.id });
    guildMember.then(guildMember => {
      console.log("");
    });
    return guildMember;
  }
};
