import {
  objectType,
  stringArg,
  booleanArg,
  idArg,
  enumType,
  scalarType
} from "nexus";

const Character = objectType({
  name: "Character",
  definition(t) {
    t.id("id");
    t.string("createdAt");
    t.field("user", { type: User });
    t.field("realm", { type: Realm });
    t.string("name");
    t.field("class", { type: CharacterClassEnum });
    t.field("guild", {
      type: GuildMember,
      nullable: true
    });
    t.list.field("applications", { type: GuildApplication });
  }
});
const Guild = objectType({
  name: "Guild",
  definition(t) {
    t.id("id");
    t.string("createdAt");
    t.string("name");
    t.string("avatar", { nullable: true });
    t.field("realm", { type: Realm });
    t.field("lootingSystem", { type: GuildLootingSystem });
    t.list.field("roster", { type: GuildMember });
    t.list.field("posts", { type: GuildPost });
    t.list.field("events", { type: GuildEvent });
    t.list.field("applications", { type: GuildApplication });
    t.field("applicationForm", {
      type: GuildApplicationForm,
      nullable: true
    });
  }
});
const GuildApplication = objectType({
  name: "GuildApplication",
  definition(t) {
    t.id("id");
    t.string("createdAt");
    t.field("guild", { type: Guild });
    t.field("character", { type: Character });
    t.list.field("answers", { type: GuildApplicationFormQuestionAnswer });
    t.field("status", { type: GuildApplicationStatus });
    t.string("comment", { nullable: true });
  }
});
const GuildApplicationForm = objectType({
  name: "GuildApplicationForm",
  definition(t) {
    t.id("id");
    t.string("lastUpStringdAt");
    t.field("guild", { type: Guild });
    t.list.field("questions", { type: GuildApplicationFormQuestion });
  }
});
const GuildApplicationFormQuestion = objectType({
  name: "GuildApplicationFormQuestion",
  definition(t) {
    t.id("id");
    t.field("guildApplicationForm", { type: GuildApplicationForm });
    t.string("question");
    t.float("sequence", { nullable: true });
  }
});
const GuildApplicationFormQuestionAnswer = objectType({
  name: "GuildApplicationFormQuestionAnswer",
  definition(t) {
    t.id("id");
    t.field("application", { type: GuildApplication });
    t.field("question", { type: GuildApplicationFormQuestion });
    t.string("answer");
  }
});
const GuildEvent = objectType({
  name: "GuildEvent",
  definition(t) {
    t.id("id");
    t.string("createdAt");
    t.string("title");
    t.string("startingAt");
    t.field("instance", { type: Instance });
    t.field("guild", { type: Guild });
    t.list.field("roster", { type: GuildMember });
  }
});
const GuildMember = objectType({
  name: "GuildMember",
  definition(t) {
    t.id("id");
    t.field("character", { type: Character });
    t.field("guild", { type: Guild });
    t.field("guildRole", { type: GuildRole });
    t.field("role", { type: Role });
    t.float("dkp", { nullable: true });
    t.list.field("events", { type: GuildEvent });
  }
});
const GuildPost = objectType({
  name: "GuildPost",
  definition(t) {
    t.id("id");
    t.string("createdAt");
    t.field("guild", { type: Guild });
    t.string("title");
    t.string("body");
  }
});
const Instance = objectType({
  name: "Instance",
  definition(t) {
    t.id("id");
    t.string("name");
    t.string("Abbreviation", { nullable: true });
    t.string("image", { nullable: true });
    t.string("wiki", { nullable: true });
    t.string("suggestedLevel", { nullable: true });
    t.float("playersCap", { nullable: true });
    t.string("location", { nullable: true });
  }
});
const Mutation = objectType({
  name: "Mutation",
  definition(t) {
    t.field("createUser", {
      type: User,
      nullable: true,
      args: {
        displayName: stringArg({ required: true }),
        email: stringArg({ required: true }),
        password: stringArg({ required: true }),
        confirmed: booleanArg({ required: true })
      }
    });
    t.field("deleteUser", {
      type: User,
      nullable: true,
      args: {
        id: idArg({ required: true })
      }
    });
  }
});
const Query = objectType({
  name: "Query",
  definition(t) {
    t.list.field("users", { type: User });
    t.field("user", {
      type: User,
      nullable: true,
      args: {
        id: idArg({ required: true })
      }
    });
  }
});
const Realm = objectType({
  name: "Realm",
  definition(t) {
    t.id("id");
    t.string("name");
    t.field("type", { type: RealmType });
    t.field("population", { type: RealmPopulation });
    t.list.field("characters", { type: Character });
    t.list.field("guilds", { type: Guild });
  }
});
const User = objectType({
  name: "User",
  definition(t) {
    t.id("id");
    t.date("createdAt");
    t.string("displayName");
    t.string("email");
    t.string("password");
    t.boolean("confirmed");
    t.string("avatar", { nullable: true });
    t.list.field("characters", { type: Character });
  }
});

const CharacterClassEnum = enumType({
  name: "CharacterClassEnum",
  members: [
    "DRUID",
    "HUNTER",
    "MAGE",
    "PALADIN",
    "PRIEST",
    "ROGUE",
    "SHAMAN",
    "WARLOCK",
    "WARRIOR"
  ]
});
const GuildApplicationStatus = enumType({
  name: "GuildApplicationStatus",
  members: ["ACCEPTED", "DECLINED", "NEW"]
});
const GuildLootingSystem = enumType({
  name: "GuildLootingSystem",
  members: ["DKP", "COUNCIL", "CUSTOM", "NONE"]
});
const GuildRole = enumType({
  name: "GuildRole",
  members: ["GuildMaster", "Officer", "Member", "Trail", "Alt"]
});
const RealmPopulation = enumType({
  name: "RealmPopulation",
  members: ["LOW", "NORMAL", "HIGH", "FULL"]
});
const RealmType = enumType({
  name: "RealmType",
  members: ["RP", "RPPVP", "PVP", "NORMAL", "PVE"]
});
const Role = enumType({
  name: "Role",
  members: ["TANK", "MELEE", "RANGED", "HEALER"]
});

const Date = scalarType({
  name: "Date",
  asNexusMethod: "date",
  serialize() {
    /* Todo */
  },
  parseValue() {
    /* Todo */
  },
  parseLiteral() {
    /* Todo */
  }
});
