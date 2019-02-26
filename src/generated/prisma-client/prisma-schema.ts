export const typeDefs = /* GraphQL */ `type AggregateCharacter {
  count: Int!
}

type AggregateGuild {
  count: Int!
}

type AggregateGuildApplication {
  count: Int!
}

type AggregateGuildApplicationForm {
  count: Int!
}

type AggregateGuildApplicationFormQuestion {
  count: Int!
}

type AggregateGuildApplicationFormQuestionAnswer {
  count: Int!
}

type AggregateGuildEvent {
  count: Int!
}

type AggregateGuildMember {
  count: Int!
}

type AggregateGuildPost {
  count: Int!
}

type AggregateInstance {
  count: Int!
}

type AggregateRealm {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Character {
  id: UUID!
  createdAt: DateTime!
  user: User!
  realm: Realm!
  name: String!
  class: CharacterClassEnum!
  guild: GuildMember
  applications(where: GuildApplicationWhereInput, orderBy: GuildApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GuildApplication!]
}

enum CharacterClassEnum {
  DRUID
  HUNTER
  MAGE
  PALADIN
  PRIEST
  ROGUE
  SHAMAN
  WARLOCK
  WARRIOR
}

type CharacterConnection {
  pageInfo: PageInfo!
  edges: [CharacterEdge]!
  aggregate: AggregateCharacter!
}

input CharacterCreateInput {
  user: UserCreateOneWithoutCharactersInput!
  realm: RealmCreateOneWithoutCharactersInput!
  name: String!
  class: CharacterClassEnum!
  guild: GuildMemberCreateOneWithoutCharacterInput
  applications: GuildApplicationCreateManyWithoutCharacterInput
}

input CharacterCreateManyWithoutRealmInput {
  create: [CharacterCreateWithoutRealmInput!]
  connect: [CharacterWhereUniqueInput!]
}

input CharacterCreateManyWithoutUserInput {
  create: [CharacterCreateWithoutUserInput!]
  connect: [CharacterWhereUniqueInput!]
}

input CharacterCreateOneWithoutApplicationsInput {
  create: CharacterCreateWithoutApplicationsInput
  connect: CharacterWhereUniqueInput
}

input CharacterCreateOneWithoutGuildInput {
  create: CharacterCreateWithoutGuildInput
  connect: CharacterWhereUniqueInput
}

input CharacterCreateWithoutApplicationsInput {
  user: UserCreateOneWithoutCharactersInput!
  realm: RealmCreateOneWithoutCharactersInput!
  name: String!
  class: CharacterClassEnum!
  guild: GuildMemberCreateOneWithoutCharacterInput
}

input CharacterCreateWithoutGuildInput {
  user: UserCreateOneWithoutCharactersInput!
  realm: RealmCreateOneWithoutCharactersInput!
  name: String!
  class: CharacterClassEnum!
  applications: GuildApplicationCreateManyWithoutCharacterInput
}

input CharacterCreateWithoutRealmInput {
  user: UserCreateOneWithoutCharactersInput!
  name: String!
  class: CharacterClassEnum!
  guild: GuildMemberCreateOneWithoutCharacterInput
  applications: GuildApplicationCreateManyWithoutCharacterInput
}

input CharacterCreateWithoutUserInput {
  realm: RealmCreateOneWithoutCharactersInput!
  name: String!
  class: CharacterClassEnum!
  guild: GuildMemberCreateOneWithoutCharacterInput
  applications: GuildApplicationCreateManyWithoutCharacterInput
}

type CharacterEdge {
  node: Character!
  cursor: String!
}

enum CharacterOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  class_ASC
  class_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CharacterPreviousValues {
  id: UUID!
  createdAt: DateTime!
  name: String!
  class: CharacterClassEnum!
}

input CharacterScalarWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  class: CharacterClassEnum
  class_not: CharacterClassEnum
  class_in: [CharacterClassEnum!]
  class_not_in: [CharacterClassEnum!]
  AND: [CharacterScalarWhereInput!]
  OR: [CharacterScalarWhereInput!]
  NOT: [CharacterScalarWhereInput!]
}

type CharacterSubscriptionPayload {
  mutation: MutationType!
  node: Character
  updatedFields: [String!]
  previousValues: CharacterPreviousValues
}

input CharacterSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CharacterWhereInput
  AND: [CharacterSubscriptionWhereInput!]
  OR: [CharacterSubscriptionWhereInput!]
  NOT: [CharacterSubscriptionWhereInput!]
}

input CharacterUpdateInput {
  user: UserUpdateOneRequiredWithoutCharactersInput
  realm: RealmUpdateOneRequiredWithoutCharactersInput
  name: String
  class: CharacterClassEnum
  guild: GuildMemberUpdateOneWithoutCharacterInput
  applications: GuildApplicationUpdateManyWithoutCharacterInput
}

input CharacterUpdateManyDataInput {
  name: String
  class: CharacterClassEnum
}

input CharacterUpdateManyMutationInput {
  name: String
  class: CharacterClassEnum
}

input CharacterUpdateManyWithoutRealmInput {
  create: [CharacterCreateWithoutRealmInput!]
  delete: [CharacterWhereUniqueInput!]
  connect: [CharacterWhereUniqueInput!]
  set: [CharacterWhereUniqueInput!]
  disconnect: [CharacterWhereUniqueInput!]
  update: [CharacterUpdateWithWhereUniqueWithoutRealmInput!]
  upsert: [CharacterUpsertWithWhereUniqueWithoutRealmInput!]
  deleteMany: [CharacterScalarWhereInput!]
  updateMany: [CharacterUpdateManyWithWhereNestedInput!]
}

input CharacterUpdateManyWithoutUserInput {
  create: [CharacterCreateWithoutUserInput!]
  delete: [CharacterWhereUniqueInput!]
  connect: [CharacterWhereUniqueInput!]
  set: [CharacterWhereUniqueInput!]
  disconnect: [CharacterWhereUniqueInput!]
  update: [CharacterUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [CharacterUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [CharacterScalarWhereInput!]
  updateMany: [CharacterUpdateManyWithWhereNestedInput!]
}

input CharacterUpdateManyWithWhereNestedInput {
  where: CharacterScalarWhereInput!
  data: CharacterUpdateManyDataInput!
}

input CharacterUpdateOneRequiredWithoutApplicationsInput {
  create: CharacterCreateWithoutApplicationsInput
  update: CharacterUpdateWithoutApplicationsDataInput
  upsert: CharacterUpsertWithoutApplicationsInput
  connect: CharacterWhereUniqueInput
}

input CharacterUpdateOneRequiredWithoutGuildInput {
  create: CharacterCreateWithoutGuildInput
  update: CharacterUpdateWithoutGuildDataInput
  upsert: CharacterUpsertWithoutGuildInput
  connect: CharacterWhereUniqueInput
}

input CharacterUpdateWithoutApplicationsDataInput {
  user: UserUpdateOneRequiredWithoutCharactersInput
  realm: RealmUpdateOneRequiredWithoutCharactersInput
  name: String
  class: CharacterClassEnum
  guild: GuildMemberUpdateOneWithoutCharacterInput
}

input CharacterUpdateWithoutGuildDataInput {
  user: UserUpdateOneRequiredWithoutCharactersInput
  realm: RealmUpdateOneRequiredWithoutCharactersInput
  name: String
  class: CharacterClassEnum
  applications: GuildApplicationUpdateManyWithoutCharacterInput
}

input CharacterUpdateWithoutRealmDataInput {
  user: UserUpdateOneRequiredWithoutCharactersInput
  name: String
  class: CharacterClassEnum
  guild: GuildMemberUpdateOneWithoutCharacterInput
  applications: GuildApplicationUpdateManyWithoutCharacterInput
}

input CharacterUpdateWithoutUserDataInput {
  realm: RealmUpdateOneRequiredWithoutCharactersInput
  name: String
  class: CharacterClassEnum
  guild: GuildMemberUpdateOneWithoutCharacterInput
  applications: GuildApplicationUpdateManyWithoutCharacterInput
}

input CharacterUpdateWithWhereUniqueWithoutRealmInput {
  where: CharacterWhereUniqueInput!
  data: CharacterUpdateWithoutRealmDataInput!
}

input CharacterUpdateWithWhereUniqueWithoutUserInput {
  where: CharacterWhereUniqueInput!
  data: CharacterUpdateWithoutUserDataInput!
}

input CharacterUpsertWithoutApplicationsInput {
  update: CharacterUpdateWithoutApplicationsDataInput!
  create: CharacterCreateWithoutApplicationsInput!
}

input CharacterUpsertWithoutGuildInput {
  update: CharacterUpdateWithoutGuildDataInput!
  create: CharacterCreateWithoutGuildInput!
}

input CharacterUpsertWithWhereUniqueWithoutRealmInput {
  where: CharacterWhereUniqueInput!
  update: CharacterUpdateWithoutRealmDataInput!
  create: CharacterCreateWithoutRealmInput!
}

input CharacterUpsertWithWhereUniqueWithoutUserInput {
  where: CharacterWhereUniqueInput!
  update: CharacterUpdateWithoutUserDataInput!
  create: CharacterCreateWithoutUserInput!
}

input CharacterWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  user: UserWhereInput
  realm: RealmWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  class: CharacterClassEnum
  class_not: CharacterClassEnum
  class_in: [CharacterClassEnum!]
  class_not_in: [CharacterClassEnum!]
  guild: GuildMemberWhereInput
  applications_every: GuildApplicationWhereInput
  applications_some: GuildApplicationWhereInput
  applications_none: GuildApplicationWhereInput
  AND: [CharacterWhereInput!]
  OR: [CharacterWhereInput!]
  NOT: [CharacterWhereInput!]
}

input CharacterWhereUniqueInput {
  id: UUID
}

scalar DateTime

type Guild {
  id: UUID!
  createdAt: DateTime!
  name: String!
  avatar: String
  realm: Realm!
  lootingSystem: GuildLootingSystem!
  roster(where: GuildMemberWhereInput, orderBy: GuildMemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GuildMember!]
  posts(where: GuildPostWhereInput, orderBy: GuildPostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GuildPost!]
  events(where: GuildEventWhereInput, orderBy: GuildEventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GuildEvent!]
  applications(where: GuildApplicationWhereInput, orderBy: GuildApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GuildApplication!]
  applicationForm: GuildApplicationForm
}

type GuildApplication {
  id: UUID!
  createdAt: DateTime!
  guild: Guild!
  character: Character!
  answers(where: GuildApplicationFormQuestionAnswerWhereInput, orderBy: GuildApplicationFormQuestionAnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GuildApplicationFormQuestionAnswer!]
  status: GuildApplicationStatus!
  comment: String
}

type GuildApplicationConnection {
  pageInfo: PageInfo!
  edges: [GuildApplicationEdge]!
  aggregate: AggregateGuildApplication!
}

input GuildApplicationCreateInput {
  guild: GuildCreateOneWithoutApplicationsInput!
  character: CharacterCreateOneWithoutApplicationsInput!
  answers: GuildApplicationFormQuestionAnswerCreateManyWithoutApplicationInput
  status: GuildApplicationStatus!
  comment: String
}

input GuildApplicationCreateManyWithoutCharacterInput {
  create: [GuildApplicationCreateWithoutCharacterInput!]
  connect: [GuildApplicationWhereUniqueInput!]
}

input GuildApplicationCreateManyWithoutGuildInput {
  create: [GuildApplicationCreateWithoutGuildInput!]
  connect: [GuildApplicationWhereUniqueInput!]
}

input GuildApplicationCreateOneWithoutAnswersInput {
  create: GuildApplicationCreateWithoutAnswersInput
  connect: GuildApplicationWhereUniqueInput
}

input GuildApplicationCreateWithoutAnswersInput {
  guild: GuildCreateOneWithoutApplicationsInput!
  character: CharacterCreateOneWithoutApplicationsInput!
  status: GuildApplicationStatus!
  comment: String
}

input GuildApplicationCreateWithoutCharacterInput {
  guild: GuildCreateOneWithoutApplicationsInput!
  answers: GuildApplicationFormQuestionAnswerCreateManyWithoutApplicationInput
  status: GuildApplicationStatus!
  comment: String
}

input GuildApplicationCreateWithoutGuildInput {
  character: CharacterCreateOneWithoutApplicationsInput!
  answers: GuildApplicationFormQuestionAnswerCreateManyWithoutApplicationInput
  status: GuildApplicationStatus!
  comment: String
}

type GuildApplicationEdge {
  node: GuildApplication!
  cursor: String!
}

type GuildApplicationForm {
  id: UUID!
  lastUpdatedAt: DateTime!
  guild: Guild!
  questions(where: GuildApplicationFormQuestionWhereInput, orderBy: GuildApplicationFormQuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GuildApplicationFormQuestion!]
}

type GuildApplicationFormConnection {
  pageInfo: PageInfo!
  edges: [GuildApplicationFormEdge]!
  aggregate: AggregateGuildApplicationForm!
}

input GuildApplicationFormCreateInput {
  lastUpdatedAt: DateTime!
  guild: GuildCreateOneWithoutApplicationFormInput!
  questions: GuildApplicationFormQuestionCreateManyWithoutGuildApplicationFormInput
}

input GuildApplicationFormCreateOneWithoutGuildInput {
  create: GuildApplicationFormCreateWithoutGuildInput
  connect: GuildApplicationFormWhereUniqueInput
}

input GuildApplicationFormCreateOneWithoutQuestionsInput {
  create: GuildApplicationFormCreateWithoutQuestionsInput
  connect: GuildApplicationFormWhereUniqueInput
}

input GuildApplicationFormCreateWithoutGuildInput {
  lastUpdatedAt: DateTime!
  questions: GuildApplicationFormQuestionCreateManyWithoutGuildApplicationFormInput
}

input GuildApplicationFormCreateWithoutQuestionsInput {
  lastUpdatedAt: DateTime!
  guild: GuildCreateOneWithoutApplicationFormInput!
}

type GuildApplicationFormEdge {
  node: GuildApplicationForm!
  cursor: String!
}

enum GuildApplicationFormOrderByInput {
  id_ASC
  id_DESC
  lastUpdatedAt_ASC
  lastUpdatedAt_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GuildApplicationFormPreviousValues {
  id: UUID!
  lastUpdatedAt: DateTime!
}

type GuildApplicationFormQuestion {
  id: UUID!
  guildApplicationForm: GuildApplicationForm!
  question: String!
  sequence: Float
}

type GuildApplicationFormQuestionAnswer {
  id: UUID!
  application: GuildApplication!
  question: GuildApplicationFormQuestion!
  answer: String!
}

type GuildApplicationFormQuestionAnswerConnection {
  pageInfo: PageInfo!
  edges: [GuildApplicationFormQuestionAnswerEdge]!
  aggregate: AggregateGuildApplicationFormQuestionAnswer!
}

input GuildApplicationFormQuestionAnswerCreateInput {
  application: GuildApplicationCreateOneWithoutAnswersInput!
  question: GuildApplicationFormQuestionCreateOneInput!
  answer: String!
}

input GuildApplicationFormQuestionAnswerCreateManyWithoutApplicationInput {
  create: [GuildApplicationFormQuestionAnswerCreateWithoutApplicationInput!]
  connect: [GuildApplicationFormQuestionAnswerWhereUniqueInput!]
}

input GuildApplicationFormQuestionAnswerCreateWithoutApplicationInput {
  question: GuildApplicationFormQuestionCreateOneInput!
  answer: String!
}

type GuildApplicationFormQuestionAnswerEdge {
  node: GuildApplicationFormQuestionAnswer!
  cursor: String!
}

enum GuildApplicationFormQuestionAnswerOrderByInput {
  id_ASC
  id_DESC
  answer_ASC
  answer_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GuildApplicationFormQuestionAnswerPreviousValues {
  id: UUID!
  answer: String!
}

input GuildApplicationFormQuestionAnswerScalarWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  answer: String
  answer_not: String
  answer_in: [String!]
  answer_not_in: [String!]
  answer_lt: String
  answer_lte: String
  answer_gt: String
  answer_gte: String
  answer_contains: String
  answer_not_contains: String
  answer_starts_with: String
  answer_not_starts_with: String
  answer_ends_with: String
  answer_not_ends_with: String
  AND: [GuildApplicationFormQuestionAnswerScalarWhereInput!]
  OR: [GuildApplicationFormQuestionAnswerScalarWhereInput!]
  NOT: [GuildApplicationFormQuestionAnswerScalarWhereInput!]
}

type GuildApplicationFormQuestionAnswerSubscriptionPayload {
  mutation: MutationType!
  node: GuildApplicationFormQuestionAnswer
  updatedFields: [String!]
  previousValues: GuildApplicationFormQuestionAnswerPreviousValues
}

input GuildApplicationFormQuestionAnswerSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GuildApplicationFormQuestionAnswerWhereInput
  AND: [GuildApplicationFormQuestionAnswerSubscriptionWhereInput!]
  OR: [GuildApplicationFormQuestionAnswerSubscriptionWhereInput!]
  NOT: [GuildApplicationFormQuestionAnswerSubscriptionWhereInput!]
}

input GuildApplicationFormQuestionAnswerUpdateInput {
  application: GuildApplicationUpdateOneRequiredWithoutAnswersInput
  question: GuildApplicationFormQuestionUpdateOneRequiredInput
  answer: String
}

input GuildApplicationFormQuestionAnswerUpdateManyDataInput {
  answer: String
}

input GuildApplicationFormQuestionAnswerUpdateManyMutationInput {
  answer: String
}

input GuildApplicationFormQuestionAnswerUpdateManyWithoutApplicationInput {
  create: [GuildApplicationFormQuestionAnswerCreateWithoutApplicationInput!]
  delete: [GuildApplicationFormQuestionAnswerWhereUniqueInput!]
  connect: [GuildApplicationFormQuestionAnswerWhereUniqueInput!]
  set: [GuildApplicationFormQuestionAnswerWhereUniqueInput!]
  disconnect: [GuildApplicationFormQuestionAnswerWhereUniqueInput!]
  update: [GuildApplicationFormQuestionAnswerUpdateWithWhereUniqueWithoutApplicationInput!]
  upsert: [GuildApplicationFormQuestionAnswerUpsertWithWhereUniqueWithoutApplicationInput!]
  deleteMany: [GuildApplicationFormQuestionAnswerScalarWhereInput!]
  updateMany: [GuildApplicationFormQuestionAnswerUpdateManyWithWhereNestedInput!]
}

input GuildApplicationFormQuestionAnswerUpdateManyWithWhereNestedInput {
  where: GuildApplicationFormQuestionAnswerScalarWhereInput!
  data: GuildApplicationFormQuestionAnswerUpdateManyDataInput!
}

input GuildApplicationFormQuestionAnswerUpdateWithoutApplicationDataInput {
  question: GuildApplicationFormQuestionUpdateOneRequiredInput
  answer: String
}

input GuildApplicationFormQuestionAnswerUpdateWithWhereUniqueWithoutApplicationInput {
  where: GuildApplicationFormQuestionAnswerWhereUniqueInput!
  data: GuildApplicationFormQuestionAnswerUpdateWithoutApplicationDataInput!
}

input GuildApplicationFormQuestionAnswerUpsertWithWhereUniqueWithoutApplicationInput {
  where: GuildApplicationFormQuestionAnswerWhereUniqueInput!
  update: GuildApplicationFormQuestionAnswerUpdateWithoutApplicationDataInput!
  create: GuildApplicationFormQuestionAnswerCreateWithoutApplicationInput!
}

input GuildApplicationFormQuestionAnswerWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  application: GuildApplicationWhereInput
  question: GuildApplicationFormQuestionWhereInput
  answer: String
  answer_not: String
  answer_in: [String!]
  answer_not_in: [String!]
  answer_lt: String
  answer_lte: String
  answer_gt: String
  answer_gte: String
  answer_contains: String
  answer_not_contains: String
  answer_starts_with: String
  answer_not_starts_with: String
  answer_ends_with: String
  answer_not_ends_with: String
  AND: [GuildApplicationFormQuestionAnswerWhereInput!]
  OR: [GuildApplicationFormQuestionAnswerWhereInput!]
  NOT: [GuildApplicationFormQuestionAnswerWhereInput!]
}

input GuildApplicationFormQuestionAnswerWhereUniqueInput {
  id: UUID
}

type GuildApplicationFormQuestionConnection {
  pageInfo: PageInfo!
  edges: [GuildApplicationFormQuestionEdge]!
  aggregate: AggregateGuildApplicationFormQuestion!
}

input GuildApplicationFormQuestionCreateInput {
  guildApplicationForm: GuildApplicationFormCreateOneWithoutQuestionsInput!
  question: String!
  sequence: Float
}

input GuildApplicationFormQuestionCreateManyWithoutGuildApplicationFormInput {
  create: [GuildApplicationFormQuestionCreateWithoutGuildApplicationFormInput!]
  connect: [GuildApplicationFormQuestionWhereUniqueInput!]
}

input GuildApplicationFormQuestionCreateOneInput {
  create: GuildApplicationFormQuestionCreateInput
  connect: GuildApplicationFormQuestionWhereUniqueInput
}

input GuildApplicationFormQuestionCreateWithoutGuildApplicationFormInput {
  question: String!
  sequence: Float
}

type GuildApplicationFormQuestionEdge {
  node: GuildApplicationFormQuestion!
  cursor: String!
}

enum GuildApplicationFormQuestionOrderByInput {
  id_ASC
  id_DESC
  question_ASC
  question_DESC
  sequence_ASC
  sequence_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GuildApplicationFormQuestionPreviousValues {
  id: UUID!
  question: String!
  sequence: Float
}

input GuildApplicationFormQuestionScalarWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  question: String
  question_not: String
  question_in: [String!]
  question_not_in: [String!]
  question_lt: String
  question_lte: String
  question_gt: String
  question_gte: String
  question_contains: String
  question_not_contains: String
  question_starts_with: String
  question_not_starts_with: String
  question_ends_with: String
  question_not_ends_with: String
  sequence: Float
  sequence_not: Float
  sequence_in: [Float!]
  sequence_not_in: [Float!]
  sequence_lt: Float
  sequence_lte: Float
  sequence_gt: Float
  sequence_gte: Float
  AND: [GuildApplicationFormQuestionScalarWhereInput!]
  OR: [GuildApplicationFormQuestionScalarWhereInput!]
  NOT: [GuildApplicationFormQuestionScalarWhereInput!]
}

type GuildApplicationFormQuestionSubscriptionPayload {
  mutation: MutationType!
  node: GuildApplicationFormQuestion
  updatedFields: [String!]
  previousValues: GuildApplicationFormQuestionPreviousValues
}

input GuildApplicationFormQuestionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GuildApplicationFormQuestionWhereInput
  AND: [GuildApplicationFormQuestionSubscriptionWhereInput!]
  OR: [GuildApplicationFormQuestionSubscriptionWhereInput!]
  NOT: [GuildApplicationFormQuestionSubscriptionWhereInput!]
}

input GuildApplicationFormQuestionUpdateDataInput {
  guildApplicationForm: GuildApplicationFormUpdateOneRequiredWithoutQuestionsInput
  question: String
  sequence: Float
}

input GuildApplicationFormQuestionUpdateInput {
  guildApplicationForm: GuildApplicationFormUpdateOneRequiredWithoutQuestionsInput
  question: String
  sequence: Float
}

input GuildApplicationFormQuestionUpdateManyDataInput {
  question: String
  sequence: Float
}

input GuildApplicationFormQuestionUpdateManyMutationInput {
  question: String
  sequence: Float
}

input GuildApplicationFormQuestionUpdateManyWithoutGuildApplicationFormInput {
  create: [GuildApplicationFormQuestionCreateWithoutGuildApplicationFormInput!]
  delete: [GuildApplicationFormQuestionWhereUniqueInput!]
  connect: [GuildApplicationFormQuestionWhereUniqueInput!]
  set: [GuildApplicationFormQuestionWhereUniqueInput!]
  disconnect: [GuildApplicationFormQuestionWhereUniqueInput!]
  update: [GuildApplicationFormQuestionUpdateWithWhereUniqueWithoutGuildApplicationFormInput!]
  upsert: [GuildApplicationFormQuestionUpsertWithWhereUniqueWithoutGuildApplicationFormInput!]
  deleteMany: [GuildApplicationFormQuestionScalarWhereInput!]
  updateMany: [GuildApplicationFormQuestionUpdateManyWithWhereNestedInput!]
}

input GuildApplicationFormQuestionUpdateManyWithWhereNestedInput {
  where: GuildApplicationFormQuestionScalarWhereInput!
  data: GuildApplicationFormQuestionUpdateManyDataInput!
}

input GuildApplicationFormQuestionUpdateOneRequiredInput {
  create: GuildApplicationFormQuestionCreateInput
  update: GuildApplicationFormQuestionUpdateDataInput
  upsert: GuildApplicationFormQuestionUpsertNestedInput
  connect: GuildApplicationFormQuestionWhereUniqueInput
}

input GuildApplicationFormQuestionUpdateWithoutGuildApplicationFormDataInput {
  question: String
  sequence: Float
}

input GuildApplicationFormQuestionUpdateWithWhereUniqueWithoutGuildApplicationFormInput {
  where: GuildApplicationFormQuestionWhereUniqueInput!
  data: GuildApplicationFormQuestionUpdateWithoutGuildApplicationFormDataInput!
}

input GuildApplicationFormQuestionUpsertNestedInput {
  update: GuildApplicationFormQuestionUpdateDataInput!
  create: GuildApplicationFormQuestionCreateInput!
}

input GuildApplicationFormQuestionUpsertWithWhereUniqueWithoutGuildApplicationFormInput {
  where: GuildApplicationFormQuestionWhereUniqueInput!
  update: GuildApplicationFormQuestionUpdateWithoutGuildApplicationFormDataInput!
  create: GuildApplicationFormQuestionCreateWithoutGuildApplicationFormInput!
}

input GuildApplicationFormQuestionWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  guildApplicationForm: GuildApplicationFormWhereInput
  question: String
  question_not: String
  question_in: [String!]
  question_not_in: [String!]
  question_lt: String
  question_lte: String
  question_gt: String
  question_gte: String
  question_contains: String
  question_not_contains: String
  question_starts_with: String
  question_not_starts_with: String
  question_ends_with: String
  question_not_ends_with: String
  sequence: Float
  sequence_not: Float
  sequence_in: [Float!]
  sequence_not_in: [Float!]
  sequence_lt: Float
  sequence_lte: Float
  sequence_gt: Float
  sequence_gte: Float
  AND: [GuildApplicationFormQuestionWhereInput!]
  OR: [GuildApplicationFormQuestionWhereInput!]
  NOT: [GuildApplicationFormQuestionWhereInput!]
}

input GuildApplicationFormQuestionWhereUniqueInput {
  id: UUID
}

type GuildApplicationFormSubscriptionPayload {
  mutation: MutationType!
  node: GuildApplicationForm
  updatedFields: [String!]
  previousValues: GuildApplicationFormPreviousValues
}

input GuildApplicationFormSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GuildApplicationFormWhereInput
  AND: [GuildApplicationFormSubscriptionWhereInput!]
  OR: [GuildApplicationFormSubscriptionWhereInput!]
  NOT: [GuildApplicationFormSubscriptionWhereInput!]
}

input GuildApplicationFormUpdateInput {
  lastUpdatedAt: DateTime
  guild: GuildUpdateOneRequiredWithoutApplicationFormInput
  questions: GuildApplicationFormQuestionUpdateManyWithoutGuildApplicationFormInput
}

input GuildApplicationFormUpdateManyMutationInput {
  lastUpdatedAt: DateTime
}

input GuildApplicationFormUpdateOneRequiredWithoutQuestionsInput {
  create: GuildApplicationFormCreateWithoutQuestionsInput
  update: GuildApplicationFormUpdateWithoutQuestionsDataInput
  upsert: GuildApplicationFormUpsertWithoutQuestionsInput
  connect: GuildApplicationFormWhereUniqueInput
}

input GuildApplicationFormUpdateOneWithoutGuildInput {
  create: GuildApplicationFormCreateWithoutGuildInput
  update: GuildApplicationFormUpdateWithoutGuildDataInput
  upsert: GuildApplicationFormUpsertWithoutGuildInput
  delete: Boolean
  disconnect: Boolean
  connect: GuildApplicationFormWhereUniqueInput
}

input GuildApplicationFormUpdateWithoutGuildDataInput {
  lastUpdatedAt: DateTime
  questions: GuildApplicationFormQuestionUpdateManyWithoutGuildApplicationFormInput
}

input GuildApplicationFormUpdateWithoutQuestionsDataInput {
  lastUpdatedAt: DateTime
  guild: GuildUpdateOneRequiredWithoutApplicationFormInput
}

input GuildApplicationFormUpsertWithoutGuildInput {
  update: GuildApplicationFormUpdateWithoutGuildDataInput!
  create: GuildApplicationFormCreateWithoutGuildInput!
}

input GuildApplicationFormUpsertWithoutQuestionsInput {
  update: GuildApplicationFormUpdateWithoutQuestionsDataInput!
  create: GuildApplicationFormCreateWithoutQuestionsInput!
}

input GuildApplicationFormWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  lastUpdatedAt: DateTime
  lastUpdatedAt_not: DateTime
  lastUpdatedAt_in: [DateTime!]
  lastUpdatedAt_not_in: [DateTime!]
  lastUpdatedAt_lt: DateTime
  lastUpdatedAt_lte: DateTime
  lastUpdatedAt_gt: DateTime
  lastUpdatedAt_gte: DateTime
  guild: GuildWhereInput
  questions_every: GuildApplicationFormQuestionWhereInput
  questions_some: GuildApplicationFormQuestionWhereInput
  questions_none: GuildApplicationFormQuestionWhereInput
  AND: [GuildApplicationFormWhereInput!]
  OR: [GuildApplicationFormWhereInput!]
  NOT: [GuildApplicationFormWhereInput!]
}

input GuildApplicationFormWhereUniqueInput {
  id: UUID
}

enum GuildApplicationOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  status_ASC
  status_DESC
  comment_ASC
  comment_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GuildApplicationPreviousValues {
  id: UUID!
  createdAt: DateTime!
  status: GuildApplicationStatus!
  comment: String
}

input GuildApplicationScalarWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  status: GuildApplicationStatus
  status_not: GuildApplicationStatus
  status_in: [GuildApplicationStatus!]
  status_not_in: [GuildApplicationStatus!]
  comment: String
  comment_not: String
  comment_in: [String!]
  comment_not_in: [String!]
  comment_lt: String
  comment_lte: String
  comment_gt: String
  comment_gte: String
  comment_contains: String
  comment_not_contains: String
  comment_starts_with: String
  comment_not_starts_with: String
  comment_ends_with: String
  comment_not_ends_with: String
  AND: [GuildApplicationScalarWhereInput!]
  OR: [GuildApplicationScalarWhereInput!]
  NOT: [GuildApplicationScalarWhereInput!]
}

enum GuildApplicationStatus {
  ACCEPTED
  DECLINED
  NEW
}

type GuildApplicationSubscriptionPayload {
  mutation: MutationType!
  node: GuildApplication
  updatedFields: [String!]
  previousValues: GuildApplicationPreviousValues
}

input GuildApplicationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GuildApplicationWhereInput
  AND: [GuildApplicationSubscriptionWhereInput!]
  OR: [GuildApplicationSubscriptionWhereInput!]
  NOT: [GuildApplicationSubscriptionWhereInput!]
}

input GuildApplicationUpdateInput {
  guild: GuildUpdateOneRequiredWithoutApplicationsInput
  character: CharacterUpdateOneRequiredWithoutApplicationsInput
  answers: GuildApplicationFormQuestionAnswerUpdateManyWithoutApplicationInput
  status: GuildApplicationStatus
  comment: String
}

input GuildApplicationUpdateManyDataInput {
  status: GuildApplicationStatus
  comment: String
}

input GuildApplicationUpdateManyMutationInput {
  status: GuildApplicationStatus
  comment: String
}

input GuildApplicationUpdateManyWithoutCharacterInput {
  create: [GuildApplicationCreateWithoutCharacterInput!]
  delete: [GuildApplicationWhereUniqueInput!]
  connect: [GuildApplicationWhereUniqueInput!]
  set: [GuildApplicationWhereUniqueInput!]
  disconnect: [GuildApplicationWhereUniqueInput!]
  update: [GuildApplicationUpdateWithWhereUniqueWithoutCharacterInput!]
  upsert: [GuildApplicationUpsertWithWhereUniqueWithoutCharacterInput!]
  deleteMany: [GuildApplicationScalarWhereInput!]
  updateMany: [GuildApplicationUpdateManyWithWhereNestedInput!]
}

input GuildApplicationUpdateManyWithoutGuildInput {
  create: [GuildApplicationCreateWithoutGuildInput!]
  delete: [GuildApplicationWhereUniqueInput!]
  connect: [GuildApplicationWhereUniqueInput!]
  set: [GuildApplicationWhereUniqueInput!]
  disconnect: [GuildApplicationWhereUniqueInput!]
  update: [GuildApplicationUpdateWithWhereUniqueWithoutGuildInput!]
  upsert: [GuildApplicationUpsertWithWhereUniqueWithoutGuildInput!]
  deleteMany: [GuildApplicationScalarWhereInput!]
  updateMany: [GuildApplicationUpdateManyWithWhereNestedInput!]
}

input GuildApplicationUpdateManyWithWhereNestedInput {
  where: GuildApplicationScalarWhereInput!
  data: GuildApplicationUpdateManyDataInput!
}

input GuildApplicationUpdateOneRequiredWithoutAnswersInput {
  create: GuildApplicationCreateWithoutAnswersInput
  update: GuildApplicationUpdateWithoutAnswersDataInput
  upsert: GuildApplicationUpsertWithoutAnswersInput
  connect: GuildApplicationWhereUniqueInput
}

input GuildApplicationUpdateWithoutAnswersDataInput {
  guild: GuildUpdateOneRequiredWithoutApplicationsInput
  character: CharacterUpdateOneRequiredWithoutApplicationsInput
  status: GuildApplicationStatus
  comment: String
}

input GuildApplicationUpdateWithoutCharacterDataInput {
  guild: GuildUpdateOneRequiredWithoutApplicationsInput
  answers: GuildApplicationFormQuestionAnswerUpdateManyWithoutApplicationInput
  status: GuildApplicationStatus
  comment: String
}

input GuildApplicationUpdateWithoutGuildDataInput {
  character: CharacterUpdateOneRequiredWithoutApplicationsInput
  answers: GuildApplicationFormQuestionAnswerUpdateManyWithoutApplicationInput
  status: GuildApplicationStatus
  comment: String
}

input GuildApplicationUpdateWithWhereUniqueWithoutCharacterInput {
  where: GuildApplicationWhereUniqueInput!
  data: GuildApplicationUpdateWithoutCharacterDataInput!
}

input GuildApplicationUpdateWithWhereUniqueWithoutGuildInput {
  where: GuildApplicationWhereUniqueInput!
  data: GuildApplicationUpdateWithoutGuildDataInput!
}

input GuildApplicationUpsertWithoutAnswersInput {
  update: GuildApplicationUpdateWithoutAnswersDataInput!
  create: GuildApplicationCreateWithoutAnswersInput!
}

input GuildApplicationUpsertWithWhereUniqueWithoutCharacterInput {
  where: GuildApplicationWhereUniqueInput!
  update: GuildApplicationUpdateWithoutCharacterDataInput!
  create: GuildApplicationCreateWithoutCharacterInput!
}

input GuildApplicationUpsertWithWhereUniqueWithoutGuildInput {
  where: GuildApplicationWhereUniqueInput!
  update: GuildApplicationUpdateWithoutGuildDataInput!
  create: GuildApplicationCreateWithoutGuildInput!
}

input GuildApplicationWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  guild: GuildWhereInput
  character: CharacterWhereInput
  answers_every: GuildApplicationFormQuestionAnswerWhereInput
  answers_some: GuildApplicationFormQuestionAnswerWhereInput
  answers_none: GuildApplicationFormQuestionAnswerWhereInput
  status: GuildApplicationStatus
  status_not: GuildApplicationStatus
  status_in: [GuildApplicationStatus!]
  status_not_in: [GuildApplicationStatus!]
  comment: String
  comment_not: String
  comment_in: [String!]
  comment_not_in: [String!]
  comment_lt: String
  comment_lte: String
  comment_gt: String
  comment_gte: String
  comment_contains: String
  comment_not_contains: String
  comment_starts_with: String
  comment_not_starts_with: String
  comment_ends_with: String
  comment_not_ends_with: String
  AND: [GuildApplicationWhereInput!]
  OR: [GuildApplicationWhereInput!]
  NOT: [GuildApplicationWhereInput!]
}

input GuildApplicationWhereUniqueInput {
  id: UUID
}

type GuildConnection {
  pageInfo: PageInfo!
  edges: [GuildEdge]!
  aggregate: AggregateGuild!
}

input GuildCreateInput {
  name: String!
  avatar: String
  realm: RealmCreateOneWithoutGuildsInput!
  lootingSystem: GuildLootingSystem
  roster: GuildMemberCreateManyWithoutGuildInput
  posts: GuildPostCreateManyWithoutGuildInput
  events: GuildEventCreateManyWithoutGuildInput
  applications: GuildApplicationCreateManyWithoutGuildInput
  applicationForm: GuildApplicationFormCreateOneWithoutGuildInput
}

input GuildCreateManyWithoutRealmInput {
  create: [GuildCreateWithoutRealmInput!]
  connect: [GuildWhereUniqueInput!]
}

input GuildCreateOneWithoutApplicationFormInput {
  create: GuildCreateWithoutApplicationFormInput
  connect: GuildWhereUniqueInput
}

input GuildCreateOneWithoutApplicationsInput {
  create: GuildCreateWithoutApplicationsInput
  connect: GuildWhereUniqueInput
}

input GuildCreateOneWithoutEventsInput {
  create: GuildCreateWithoutEventsInput
  connect: GuildWhereUniqueInput
}

input GuildCreateOneWithoutPostsInput {
  create: GuildCreateWithoutPostsInput
  connect: GuildWhereUniqueInput
}

input GuildCreateOneWithoutRosterInput {
  create: GuildCreateWithoutRosterInput
  connect: GuildWhereUniqueInput
}

input GuildCreateWithoutApplicationFormInput {
  name: String!
  avatar: String
  realm: RealmCreateOneWithoutGuildsInput!
  lootingSystem: GuildLootingSystem
  roster: GuildMemberCreateManyWithoutGuildInput
  posts: GuildPostCreateManyWithoutGuildInput
  events: GuildEventCreateManyWithoutGuildInput
  applications: GuildApplicationCreateManyWithoutGuildInput
}

input GuildCreateWithoutApplicationsInput {
  name: String!
  avatar: String
  realm: RealmCreateOneWithoutGuildsInput!
  lootingSystem: GuildLootingSystem
  roster: GuildMemberCreateManyWithoutGuildInput
  posts: GuildPostCreateManyWithoutGuildInput
  events: GuildEventCreateManyWithoutGuildInput
  applicationForm: GuildApplicationFormCreateOneWithoutGuildInput
}

input GuildCreateWithoutEventsInput {
  name: String!
  avatar: String
  realm: RealmCreateOneWithoutGuildsInput!
  lootingSystem: GuildLootingSystem
  roster: GuildMemberCreateManyWithoutGuildInput
  posts: GuildPostCreateManyWithoutGuildInput
  applications: GuildApplicationCreateManyWithoutGuildInput
  applicationForm: GuildApplicationFormCreateOneWithoutGuildInput
}

input GuildCreateWithoutPostsInput {
  name: String!
  avatar: String
  realm: RealmCreateOneWithoutGuildsInput!
  lootingSystem: GuildLootingSystem
  roster: GuildMemberCreateManyWithoutGuildInput
  events: GuildEventCreateManyWithoutGuildInput
  applications: GuildApplicationCreateManyWithoutGuildInput
  applicationForm: GuildApplicationFormCreateOneWithoutGuildInput
}

input GuildCreateWithoutRealmInput {
  name: String!
  avatar: String
  lootingSystem: GuildLootingSystem
  roster: GuildMemberCreateManyWithoutGuildInput
  posts: GuildPostCreateManyWithoutGuildInput
  events: GuildEventCreateManyWithoutGuildInput
  applications: GuildApplicationCreateManyWithoutGuildInput
  applicationForm: GuildApplicationFormCreateOneWithoutGuildInput
}

input GuildCreateWithoutRosterInput {
  name: String!
  avatar: String
  realm: RealmCreateOneWithoutGuildsInput!
  lootingSystem: GuildLootingSystem
  posts: GuildPostCreateManyWithoutGuildInput
  events: GuildEventCreateManyWithoutGuildInput
  applications: GuildApplicationCreateManyWithoutGuildInput
  applicationForm: GuildApplicationFormCreateOneWithoutGuildInput
}

type GuildEdge {
  node: Guild!
  cursor: String!
}

type GuildEvent {
  id: UUID!
  createdAt: DateTime!
  title: String!
  startingAt: DateTime!
  instance: Instance!
  guild: Guild!
  roster(where: GuildMemberWhereInput, orderBy: GuildMemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GuildMember!]
}

type GuildEventConnection {
  pageInfo: PageInfo!
  edges: [GuildEventEdge]!
  aggregate: AggregateGuildEvent!
}

input GuildEventCreateInput {
  title: String!
  startingAt: DateTime!
  instance: InstanceCreateOneInput!
  guild: GuildCreateOneWithoutEventsInput!
  roster: GuildMemberCreateManyWithoutEventsInput
}

input GuildEventCreateManyWithoutGuildInput {
  create: [GuildEventCreateWithoutGuildInput!]
  connect: [GuildEventWhereUniqueInput!]
}

input GuildEventCreateManyWithoutRosterInput {
  create: [GuildEventCreateWithoutRosterInput!]
  connect: [GuildEventWhereUniqueInput!]
}

input GuildEventCreateWithoutGuildInput {
  title: String!
  startingAt: DateTime!
  instance: InstanceCreateOneInput!
  roster: GuildMemberCreateManyWithoutEventsInput
}

input GuildEventCreateWithoutRosterInput {
  title: String!
  startingAt: DateTime!
  instance: InstanceCreateOneInput!
  guild: GuildCreateOneWithoutEventsInput!
}

type GuildEventEdge {
  node: GuildEvent!
  cursor: String!
}

enum GuildEventOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  title_ASC
  title_DESC
  startingAt_ASC
  startingAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GuildEventPreviousValues {
  id: UUID!
  createdAt: DateTime!
  title: String!
  startingAt: DateTime!
}

input GuildEventScalarWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  startingAt: DateTime
  startingAt_not: DateTime
  startingAt_in: [DateTime!]
  startingAt_not_in: [DateTime!]
  startingAt_lt: DateTime
  startingAt_lte: DateTime
  startingAt_gt: DateTime
  startingAt_gte: DateTime
  AND: [GuildEventScalarWhereInput!]
  OR: [GuildEventScalarWhereInput!]
  NOT: [GuildEventScalarWhereInput!]
}

type GuildEventSubscriptionPayload {
  mutation: MutationType!
  node: GuildEvent
  updatedFields: [String!]
  previousValues: GuildEventPreviousValues
}

input GuildEventSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GuildEventWhereInput
  AND: [GuildEventSubscriptionWhereInput!]
  OR: [GuildEventSubscriptionWhereInput!]
  NOT: [GuildEventSubscriptionWhereInput!]
}

input GuildEventUpdateInput {
  title: String
  startingAt: DateTime
  instance: InstanceUpdateOneRequiredInput
  guild: GuildUpdateOneRequiredWithoutEventsInput
  roster: GuildMemberUpdateManyWithoutEventsInput
}

input GuildEventUpdateManyDataInput {
  title: String
  startingAt: DateTime
}

input GuildEventUpdateManyMutationInput {
  title: String
  startingAt: DateTime
}

input GuildEventUpdateManyWithoutGuildInput {
  create: [GuildEventCreateWithoutGuildInput!]
  delete: [GuildEventWhereUniqueInput!]
  connect: [GuildEventWhereUniqueInput!]
  set: [GuildEventWhereUniqueInput!]
  disconnect: [GuildEventWhereUniqueInput!]
  update: [GuildEventUpdateWithWhereUniqueWithoutGuildInput!]
  upsert: [GuildEventUpsertWithWhereUniqueWithoutGuildInput!]
  deleteMany: [GuildEventScalarWhereInput!]
  updateMany: [GuildEventUpdateManyWithWhereNestedInput!]
}

input GuildEventUpdateManyWithoutRosterInput {
  create: [GuildEventCreateWithoutRosterInput!]
  delete: [GuildEventWhereUniqueInput!]
  connect: [GuildEventWhereUniqueInput!]
  set: [GuildEventWhereUniqueInput!]
  disconnect: [GuildEventWhereUniqueInput!]
  update: [GuildEventUpdateWithWhereUniqueWithoutRosterInput!]
  upsert: [GuildEventUpsertWithWhereUniqueWithoutRosterInput!]
  deleteMany: [GuildEventScalarWhereInput!]
  updateMany: [GuildEventUpdateManyWithWhereNestedInput!]
}

input GuildEventUpdateManyWithWhereNestedInput {
  where: GuildEventScalarWhereInput!
  data: GuildEventUpdateManyDataInput!
}

input GuildEventUpdateWithoutGuildDataInput {
  title: String
  startingAt: DateTime
  instance: InstanceUpdateOneRequiredInput
  roster: GuildMemberUpdateManyWithoutEventsInput
}

input GuildEventUpdateWithoutRosterDataInput {
  title: String
  startingAt: DateTime
  instance: InstanceUpdateOneRequiredInput
  guild: GuildUpdateOneRequiredWithoutEventsInput
}

input GuildEventUpdateWithWhereUniqueWithoutGuildInput {
  where: GuildEventWhereUniqueInput!
  data: GuildEventUpdateWithoutGuildDataInput!
}

input GuildEventUpdateWithWhereUniqueWithoutRosterInput {
  where: GuildEventWhereUniqueInput!
  data: GuildEventUpdateWithoutRosterDataInput!
}

input GuildEventUpsertWithWhereUniqueWithoutGuildInput {
  where: GuildEventWhereUniqueInput!
  update: GuildEventUpdateWithoutGuildDataInput!
  create: GuildEventCreateWithoutGuildInput!
}

input GuildEventUpsertWithWhereUniqueWithoutRosterInput {
  where: GuildEventWhereUniqueInput!
  update: GuildEventUpdateWithoutRosterDataInput!
  create: GuildEventCreateWithoutRosterInput!
}

input GuildEventWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  startingAt: DateTime
  startingAt_not: DateTime
  startingAt_in: [DateTime!]
  startingAt_not_in: [DateTime!]
  startingAt_lt: DateTime
  startingAt_lte: DateTime
  startingAt_gt: DateTime
  startingAt_gte: DateTime
  instance: InstanceWhereInput
  guild: GuildWhereInput
  roster_every: GuildMemberWhereInput
  roster_some: GuildMemberWhereInput
  roster_none: GuildMemberWhereInput
  AND: [GuildEventWhereInput!]
  OR: [GuildEventWhereInput!]
  NOT: [GuildEventWhereInput!]
}

input GuildEventWhereUniqueInput {
  id: UUID
}

enum GuildLootingSystem {
  DKP
  COUNCIL
  CUSTOM
  NONE
}

type GuildMember {
  id: UUID!
  character: Character!
  guild: Guild!
  guildRole: GuildRole!
  role: Role!
  dkp: Float
  events(where: GuildEventWhereInput, orderBy: GuildEventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GuildEvent!]
}

type GuildMemberConnection {
  pageInfo: PageInfo!
  edges: [GuildMemberEdge]!
  aggregate: AggregateGuildMember!
}

input GuildMemberCreateInput {
  character: CharacterCreateOneWithoutGuildInput!
  guild: GuildCreateOneWithoutRosterInput!
  guildRole: GuildRole!
  role: Role!
  dkp: Float
  events: GuildEventCreateManyWithoutRosterInput
}

input GuildMemberCreateManyWithoutEventsInput {
  create: [GuildMemberCreateWithoutEventsInput!]
  connect: [GuildMemberWhereUniqueInput!]
}

input GuildMemberCreateManyWithoutGuildInput {
  create: [GuildMemberCreateWithoutGuildInput!]
  connect: [GuildMemberWhereUniqueInput!]
}

input GuildMemberCreateOneWithoutCharacterInput {
  create: GuildMemberCreateWithoutCharacterInput
  connect: GuildMemberWhereUniqueInput
}

input GuildMemberCreateWithoutCharacterInput {
  guild: GuildCreateOneWithoutRosterInput!
  guildRole: GuildRole!
  role: Role!
  dkp: Float
  events: GuildEventCreateManyWithoutRosterInput
}

input GuildMemberCreateWithoutEventsInput {
  character: CharacterCreateOneWithoutGuildInput!
  guild: GuildCreateOneWithoutRosterInput!
  guildRole: GuildRole!
  role: Role!
  dkp: Float
}

input GuildMemberCreateWithoutGuildInput {
  character: CharacterCreateOneWithoutGuildInput!
  guildRole: GuildRole!
  role: Role!
  dkp: Float
  events: GuildEventCreateManyWithoutRosterInput
}

type GuildMemberEdge {
  node: GuildMember!
  cursor: String!
}

enum GuildMemberOrderByInput {
  id_ASC
  id_DESC
  guildRole_ASC
  guildRole_DESC
  role_ASC
  role_DESC
  dkp_ASC
  dkp_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GuildMemberPreviousValues {
  id: UUID!
  guildRole: GuildRole!
  role: Role!
  dkp: Float
}

input GuildMemberScalarWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  guildRole: GuildRole
  guildRole_not: GuildRole
  guildRole_in: [GuildRole!]
  guildRole_not_in: [GuildRole!]
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  dkp: Float
  dkp_not: Float
  dkp_in: [Float!]
  dkp_not_in: [Float!]
  dkp_lt: Float
  dkp_lte: Float
  dkp_gt: Float
  dkp_gte: Float
  AND: [GuildMemberScalarWhereInput!]
  OR: [GuildMemberScalarWhereInput!]
  NOT: [GuildMemberScalarWhereInput!]
}

type GuildMemberSubscriptionPayload {
  mutation: MutationType!
  node: GuildMember
  updatedFields: [String!]
  previousValues: GuildMemberPreviousValues
}

input GuildMemberSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GuildMemberWhereInput
  AND: [GuildMemberSubscriptionWhereInput!]
  OR: [GuildMemberSubscriptionWhereInput!]
  NOT: [GuildMemberSubscriptionWhereInput!]
}

input GuildMemberUpdateInput {
  character: CharacterUpdateOneRequiredWithoutGuildInput
  guild: GuildUpdateOneRequiredWithoutRosterInput
  guildRole: GuildRole
  role: Role
  dkp: Float
  events: GuildEventUpdateManyWithoutRosterInput
}

input GuildMemberUpdateManyDataInput {
  guildRole: GuildRole
  role: Role
  dkp: Float
}

input GuildMemberUpdateManyMutationInput {
  guildRole: GuildRole
  role: Role
  dkp: Float
}

input GuildMemberUpdateManyWithoutEventsInput {
  create: [GuildMemberCreateWithoutEventsInput!]
  delete: [GuildMemberWhereUniqueInput!]
  connect: [GuildMemberWhereUniqueInput!]
  set: [GuildMemberWhereUniqueInput!]
  disconnect: [GuildMemberWhereUniqueInput!]
  update: [GuildMemberUpdateWithWhereUniqueWithoutEventsInput!]
  upsert: [GuildMemberUpsertWithWhereUniqueWithoutEventsInput!]
  deleteMany: [GuildMemberScalarWhereInput!]
  updateMany: [GuildMemberUpdateManyWithWhereNestedInput!]
}

input GuildMemberUpdateManyWithoutGuildInput {
  create: [GuildMemberCreateWithoutGuildInput!]
  delete: [GuildMemberWhereUniqueInput!]
  connect: [GuildMemberWhereUniqueInput!]
  set: [GuildMemberWhereUniqueInput!]
  disconnect: [GuildMemberWhereUniqueInput!]
  update: [GuildMemberUpdateWithWhereUniqueWithoutGuildInput!]
  upsert: [GuildMemberUpsertWithWhereUniqueWithoutGuildInput!]
  deleteMany: [GuildMemberScalarWhereInput!]
  updateMany: [GuildMemberUpdateManyWithWhereNestedInput!]
}

input GuildMemberUpdateManyWithWhereNestedInput {
  where: GuildMemberScalarWhereInput!
  data: GuildMemberUpdateManyDataInput!
}

input GuildMemberUpdateOneWithoutCharacterInput {
  create: GuildMemberCreateWithoutCharacterInput
  update: GuildMemberUpdateWithoutCharacterDataInput
  upsert: GuildMemberUpsertWithoutCharacterInput
  delete: Boolean
  disconnect: Boolean
  connect: GuildMemberWhereUniqueInput
}

input GuildMemberUpdateWithoutCharacterDataInput {
  guild: GuildUpdateOneRequiredWithoutRosterInput
  guildRole: GuildRole
  role: Role
  dkp: Float
  events: GuildEventUpdateManyWithoutRosterInput
}

input GuildMemberUpdateWithoutEventsDataInput {
  character: CharacterUpdateOneRequiredWithoutGuildInput
  guild: GuildUpdateOneRequiredWithoutRosterInput
  guildRole: GuildRole
  role: Role
  dkp: Float
}

input GuildMemberUpdateWithoutGuildDataInput {
  character: CharacterUpdateOneRequiredWithoutGuildInput
  guildRole: GuildRole
  role: Role
  dkp: Float
  events: GuildEventUpdateManyWithoutRosterInput
}

input GuildMemberUpdateWithWhereUniqueWithoutEventsInput {
  where: GuildMemberWhereUniqueInput!
  data: GuildMemberUpdateWithoutEventsDataInput!
}

input GuildMemberUpdateWithWhereUniqueWithoutGuildInput {
  where: GuildMemberWhereUniqueInput!
  data: GuildMemberUpdateWithoutGuildDataInput!
}

input GuildMemberUpsertWithoutCharacterInput {
  update: GuildMemberUpdateWithoutCharacterDataInput!
  create: GuildMemberCreateWithoutCharacterInput!
}

input GuildMemberUpsertWithWhereUniqueWithoutEventsInput {
  where: GuildMemberWhereUniqueInput!
  update: GuildMemberUpdateWithoutEventsDataInput!
  create: GuildMemberCreateWithoutEventsInput!
}

input GuildMemberUpsertWithWhereUniqueWithoutGuildInput {
  where: GuildMemberWhereUniqueInput!
  update: GuildMemberUpdateWithoutGuildDataInput!
  create: GuildMemberCreateWithoutGuildInput!
}

input GuildMemberWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  character: CharacterWhereInput
  guild: GuildWhereInput
  guildRole: GuildRole
  guildRole_not: GuildRole
  guildRole_in: [GuildRole!]
  guildRole_not_in: [GuildRole!]
  role: Role
  role_not: Role
  role_in: [Role!]
  role_not_in: [Role!]
  dkp: Float
  dkp_not: Float
  dkp_in: [Float!]
  dkp_not_in: [Float!]
  dkp_lt: Float
  dkp_lte: Float
  dkp_gt: Float
  dkp_gte: Float
  events_every: GuildEventWhereInput
  events_some: GuildEventWhereInput
  events_none: GuildEventWhereInput
  AND: [GuildMemberWhereInput!]
  OR: [GuildMemberWhereInput!]
  NOT: [GuildMemberWhereInput!]
}

input GuildMemberWhereUniqueInput {
  id: UUID
}

enum GuildOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  avatar_ASC
  avatar_DESC
  lootingSystem_ASC
  lootingSystem_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GuildPost {
  id: UUID!
  createdAt: DateTime!
  guild: Guild!
  title: String!
  body: String!
}

type GuildPostConnection {
  pageInfo: PageInfo!
  edges: [GuildPostEdge]!
  aggregate: AggregateGuildPost!
}

input GuildPostCreateInput {
  guild: GuildCreateOneWithoutPostsInput!
  title: String!
  body: String!
}

input GuildPostCreateManyWithoutGuildInput {
  create: [GuildPostCreateWithoutGuildInput!]
  connect: [GuildPostWhereUniqueInput!]
}

input GuildPostCreateWithoutGuildInput {
  title: String!
  body: String!
}

type GuildPostEdge {
  node: GuildPost!
  cursor: String!
}

enum GuildPostOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  title_ASC
  title_DESC
  body_ASC
  body_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type GuildPostPreviousValues {
  id: UUID!
  createdAt: DateTime!
  title: String!
  body: String!
}

input GuildPostScalarWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  AND: [GuildPostScalarWhereInput!]
  OR: [GuildPostScalarWhereInput!]
  NOT: [GuildPostScalarWhereInput!]
}

type GuildPostSubscriptionPayload {
  mutation: MutationType!
  node: GuildPost
  updatedFields: [String!]
  previousValues: GuildPostPreviousValues
}

input GuildPostSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GuildPostWhereInput
  AND: [GuildPostSubscriptionWhereInput!]
  OR: [GuildPostSubscriptionWhereInput!]
  NOT: [GuildPostSubscriptionWhereInput!]
}

input GuildPostUpdateInput {
  guild: GuildUpdateOneRequiredWithoutPostsInput
  title: String
  body: String
}

input GuildPostUpdateManyDataInput {
  title: String
  body: String
}

input GuildPostUpdateManyMutationInput {
  title: String
  body: String
}

input GuildPostUpdateManyWithoutGuildInput {
  create: [GuildPostCreateWithoutGuildInput!]
  delete: [GuildPostWhereUniqueInput!]
  connect: [GuildPostWhereUniqueInput!]
  set: [GuildPostWhereUniqueInput!]
  disconnect: [GuildPostWhereUniqueInput!]
  update: [GuildPostUpdateWithWhereUniqueWithoutGuildInput!]
  upsert: [GuildPostUpsertWithWhereUniqueWithoutGuildInput!]
  deleteMany: [GuildPostScalarWhereInput!]
  updateMany: [GuildPostUpdateManyWithWhereNestedInput!]
}

input GuildPostUpdateManyWithWhereNestedInput {
  where: GuildPostScalarWhereInput!
  data: GuildPostUpdateManyDataInput!
}

input GuildPostUpdateWithoutGuildDataInput {
  title: String
  body: String
}

input GuildPostUpdateWithWhereUniqueWithoutGuildInput {
  where: GuildPostWhereUniqueInput!
  data: GuildPostUpdateWithoutGuildDataInput!
}

input GuildPostUpsertWithWhereUniqueWithoutGuildInput {
  where: GuildPostWhereUniqueInput!
  update: GuildPostUpdateWithoutGuildDataInput!
  create: GuildPostCreateWithoutGuildInput!
}

input GuildPostWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  guild: GuildWhereInput
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  body: String
  body_not: String
  body_in: [String!]
  body_not_in: [String!]
  body_lt: String
  body_lte: String
  body_gt: String
  body_gte: String
  body_contains: String
  body_not_contains: String
  body_starts_with: String
  body_not_starts_with: String
  body_ends_with: String
  body_not_ends_with: String
  AND: [GuildPostWhereInput!]
  OR: [GuildPostWhereInput!]
  NOT: [GuildPostWhereInput!]
}

input GuildPostWhereUniqueInput {
  id: UUID
}

type GuildPreviousValues {
  id: UUID!
  createdAt: DateTime!
  name: String!
  avatar: String
  lootingSystem: GuildLootingSystem!
}

enum GuildRole {
  GuildMaster
  Officer
  Member
  Trail
  Alt
}

input GuildScalarWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  lootingSystem: GuildLootingSystem
  lootingSystem_not: GuildLootingSystem
  lootingSystem_in: [GuildLootingSystem!]
  lootingSystem_not_in: [GuildLootingSystem!]
  AND: [GuildScalarWhereInput!]
  OR: [GuildScalarWhereInput!]
  NOT: [GuildScalarWhereInput!]
}

type GuildSubscriptionPayload {
  mutation: MutationType!
  node: Guild
  updatedFields: [String!]
  previousValues: GuildPreviousValues
}

input GuildSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GuildWhereInput
  AND: [GuildSubscriptionWhereInput!]
  OR: [GuildSubscriptionWhereInput!]
  NOT: [GuildSubscriptionWhereInput!]
}

input GuildUpdateInput {
  name: String
  avatar: String
  realm: RealmUpdateOneRequiredWithoutGuildsInput
  lootingSystem: GuildLootingSystem
  roster: GuildMemberUpdateManyWithoutGuildInput
  posts: GuildPostUpdateManyWithoutGuildInput
  events: GuildEventUpdateManyWithoutGuildInput
  applications: GuildApplicationUpdateManyWithoutGuildInput
  applicationForm: GuildApplicationFormUpdateOneWithoutGuildInput
}

input GuildUpdateManyDataInput {
  name: String
  avatar: String
  lootingSystem: GuildLootingSystem
}

input GuildUpdateManyMutationInput {
  name: String
  avatar: String
  lootingSystem: GuildLootingSystem
}

input GuildUpdateManyWithoutRealmInput {
  create: [GuildCreateWithoutRealmInput!]
  delete: [GuildWhereUniqueInput!]
  connect: [GuildWhereUniqueInput!]
  set: [GuildWhereUniqueInput!]
  disconnect: [GuildWhereUniqueInput!]
  update: [GuildUpdateWithWhereUniqueWithoutRealmInput!]
  upsert: [GuildUpsertWithWhereUniqueWithoutRealmInput!]
  deleteMany: [GuildScalarWhereInput!]
  updateMany: [GuildUpdateManyWithWhereNestedInput!]
}

input GuildUpdateManyWithWhereNestedInput {
  where: GuildScalarWhereInput!
  data: GuildUpdateManyDataInput!
}

input GuildUpdateOneRequiredWithoutApplicationFormInput {
  create: GuildCreateWithoutApplicationFormInput
  update: GuildUpdateWithoutApplicationFormDataInput
  upsert: GuildUpsertWithoutApplicationFormInput
  connect: GuildWhereUniqueInput
}

input GuildUpdateOneRequiredWithoutApplicationsInput {
  create: GuildCreateWithoutApplicationsInput
  update: GuildUpdateWithoutApplicationsDataInput
  upsert: GuildUpsertWithoutApplicationsInput
  connect: GuildWhereUniqueInput
}

input GuildUpdateOneRequiredWithoutEventsInput {
  create: GuildCreateWithoutEventsInput
  update: GuildUpdateWithoutEventsDataInput
  upsert: GuildUpsertWithoutEventsInput
  connect: GuildWhereUniqueInput
}

input GuildUpdateOneRequiredWithoutPostsInput {
  create: GuildCreateWithoutPostsInput
  update: GuildUpdateWithoutPostsDataInput
  upsert: GuildUpsertWithoutPostsInput
  connect: GuildWhereUniqueInput
}

input GuildUpdateOneRequiredWithoutRosterInput {
  create: GuildCreateWithoutRosterInput
  update: GuildUpdateWithoutRosterDataInput
  upsert: GuildUpsertWithoutRosterInput
  connect: GuildWhereUniqueInput
}

input GuildUpdateWithoutApplicationFormDataInput {
  name: String
  avatar: String
  realm: RealmUpdateOneRequiredWithoutGuildsInput
  lootingSystem: GuildLootingSystem
  roster: GuildMemberUpdateManyWithoutGuildInput
  posts: GuildPostUpdateManyWithoutGuildInput
  events: GuildEventUpdateManyWithoutGuildInput
  applications: GuildApplicationUpdateManyWithoutGuildInput
}

input GuildUpdateWithoutApplicationsDataInput {
  name: String
  avatar: String
  realm: RealmUpdateOneRequiredWithoutGuildsInput
  lootingSystem: GuildLootingSystem
  roster: GuildMemberUpdateManyWithoutGuildInput
  posts: GuildPostUpdateManyWithoutGuildInput
  events: GuildEventUpdateManyWithoutGuildInput
  applicationForm: GuildApplicationFormUpdateOneWithoutGuildInput
}

input GuildUpdateWithoutEventsDataInput {
  name: String
  avatar: String
  realm: RealmUpdateOneRequiredWithoutGuildsInput
  lootingSystem: GuildLootingSystem
  roster: GuildMemberUpdateManyWithoutGuildInput
  posts: GuildPostUpdateManyWithoutGuildInput
  applications: GuildApplicationUpdateManyWithoutGuildInput
  applicationForm: GuildApplicationFormUpdateOneWithoutGuildInput
}

input GuildUpdateWithoutPostsDataInput {
  name: String
  avatar: String
  realm: RealmUpdateOneRequiredWithoutGuildsInput
  lootingSystem: GuildLootingSystem
  roster: GuildMemberUpdateManyWithoutGuildInput
  events: GuildEventUpdateManyWithoutGuildInput
  applications: GuildApplicationUpdateManyWithoutGuildInput
  applicationForm: GuildApplicationFormUpdateOneWithoutGuildInput
}

input GuildUpdateWithoutRealmDataInput {
  name: String
  avatar: String
  lootingSystem: GuildLootingSystem
  roster: GuildMemberUpdateManyWithoutGuildInput
  posts: GuildPostUpdateManyWithoutGuildInput
  events: GuildEventUpdateManyWithoutGuildInput
  applications: GuildApplicationUpdateManyWithoutGuildInput
  applicationForm: GuildApplicationFormUpdateOneWithoutGuildInput
}

input GuildUpdateWithoutRosterDataInput {
  name: String
  avatar: String
  realm: RealmUpdateOneRequiredWithoutGuildsInput
  lootingSystem: GuildLootingSystem
  posts: GuildPostUpdateManyWithoutGuildInput
  events: GuildEventUpdateManyWithoutGuildInput
  applications: GuildApplicationUpdateManyWithoutGuildInput
  applicationForm: GuildApplicationFormUpdateOneWithoutGuildInput
}

input GuildUpdateWithWhereUniqueWithoutRealmInput {
  where: GuildWhereUniqueInput!
  data: GuildUpdateWithoutRealmDataInput!
}

input GuildUpsertWithoutApplicationFormInput {
  update: GuildUpdateWithoutApplicationFormDataInput!
  create: GuildCreateWithoutApplicationFormInput!
}

input GuildUpsertWithoutApplicationsInput {
  update: GuildUpdateWithoutApplicationsDataInput!
  create: GuildCreateWithoutApplicationsInput!
}

input GuildUpsertWithoutEventsInput {
  update: GuildUpdateWithoutEventsDataInput!
  create: GuildCreateWithoutEventsInput!
}

input GuildUpsertWithoutPostsInput {
  update: GuildUpdateWithoutPostsDataInput!
  create: GuildCreateWithoutPostsInput!
}

input GuildUpsertWithoutRosterInput {
  update: GuildUpdateWithoutRosterDataInput!
  create: GuildCreateWithoutRosterInput!
}

input GuildUpsertWithWhereUniqueWithoutRealmInput {
  where: GuildWhereUniqueInput!
  update: GuildUpdateWithoutRealmDataInput!
  create: GuildCreateWithoutRealmInput!
}

input GuildWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  realm: RealmWhereInput
  lootingSystem: GuildLootingSystem
  lootingSystem_not: GuildLootingSystem
  lootingSystem_in: [GuildLootingSystem!]
  lootingSystem_not_in: [GuildLootingSystem!]
  roster_every: GuildMemberWhereInput
  roster_some: GuildMemberWhereInput
  roster_none: GuildMemberWhereInput
  posts_every: GuildPostWhereInput
  posts_some: GuildPostWhereInput
  posts_none: GuildPostWhereInput
  events_every: GuildEventWhereInput
  events_some: GuildEventWhereInput
  events_none: GuildEventWhereInput
  applications_every: GuildApplicationWhereInput
  applications_some: GuildApplicationWhereInput
  applications_none: GuildApplicationWhereInput
  applicationForm: GuildApplicationFormWhereInput
  AND: [GuildWhereInput!]
  OR: [GuildWhereInput!]
  NOT: [GuildWhereInput!]
}

input GuildWhereUniqueInput {
  id: UUID
}

type Instance {
  id: UUID!
  name: String!
  Abbreviation: String
  image: String
  wiki: String
  suggestedLevel: String
  playersCap: Float
  location: String
}

type InstanceConnection {
  pageInfo: PageInfo!
  edges: [InstanceEdge]!
  aggregate: AggregateInstance!
}

input InstanceCreateInput {
  name: String!
  Abbreviation: String
  image: String
  wiki: String
  suggestedLevel: String
  playersCap: Float
  location: String
}

input InstanceCreateOneInput {
  create: InstanceCreateInput
  connect: InstanceWhereUniqueInput
}

type InstanceEdge {
  node: Instance!
  cursor: String!
}

enum InstanceOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  Abbreviation_ASC
  Abbreviation_DESC
  image_ASC
  image_DESC
  wiki_ASC
  wiki_DESC
  suggestedLevel_ASC
  suggestedLevel_DESC
  playersCap_ASC
  playersCap_DESC
  location_ASC
  location_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type InstancePreviousValues {
  id: UUID!
  name: String!
  Abbreviation: String
  image: String
  wiki: String
  suggestedLevel: String
  playersCap: Float
  location: String
}

type InstanceSubscriptionPayload {
  mutation: MutationType!
  node: Instance
  updatedFields: [String!]
  previousValues: InstancePreviousValues
}

input InstanceSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: InstanceWhereInput
  AND: [InstanceSubscriptionWhereInput!]
  OR: [InstanceSubscriptionWhereInput!]
  NOT: [InstanceSubscriptionWhereInput!]
}

input InstanceUpdateDataInput {
  name: String
  Abbreviation: String
  image: String
  wiki: String
  suggestedLevel: String
  playersCap: Float
  location: String
}

input InstanceUpdateInput {
  name: String
  Abbreviation: String
  image: String
  wiki: String
  suggestedLevel: String
  playersCap: Float
  location: String
}

input InstanceUpdateManyMutationInput {
  name: String
  Abbreviation: String
  image: String
  wiki: String
  suggestedLevel: String
  playersCap: Float
  location: String
}

input InstanceUpdateOneRequiredInput {
  create: InstanceCreateInput
  update: InstanceUpdateDataInput
  upsert: InstanceUpsertNestedInput
  connect: InstanceWhereUniqueInput
}

input InstanceUpsertNestedInput {
  update: InstanceUpdateDataInput!
  create: InstanceCreateInput!
}

input InstanceWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  Abbreviation: String
  Abbreviation_not: String
  Abbreviation_in: [String!]
  Abbreviation_not_in: [String!]
  Abbreviation_lt: String
  Abbreviation_lte: String
  Abbreviation_gt: String
  Abbreviation_gte: String
  Abbreviation_contains: String
  Abbreviation_not_contains: String
  Abbreviation_starts_with: String
  Abbreviation_not_starts_with: String
  Abbreviation_ends_with: String
  Abbreviation_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  wiki: String
  wiki_not: String
  wiki_in: [String!]
  wiki_not_in: [String!]
  wiki_lt: String
  wiki_lte: String
  wiki_gt: String
  wiki_gte: String
  wiki_contains: String
  wiki_not_contains: String
  wiki_starts_with: String
  wiki_not_starts_with: String
  wiki_ends_with: String
  wiki_not_ends_with: String
  suggestedLevel: String
  suggestedLevel_not: String
  suggestedLevel_in: [String!]
  suggestedLevel_not_in: [String!]
  suggestedLevel_lt: String
  suggestedLevel_lte: String
  suggestedLevel_gt: String
  suggestedLevel_gte: String
  suggestedLevel_contains: String
  suggestedLevel_not_contains: String
  suggestedLevel_starts_with: String
  suggestedLevel_not_starts_with: String
  suggestedLevel_ends_with: String
  suggestedLevel_not_ends_with: String
  playersCap: Float
  playersCap_not: Float
  playersCap_in: [Float!]
  playersCap_not_in: [Float!]
  playersCap_lt: Float
  playersCap_lte: Float
  playersCap_gt: Float
  playersCap_gte: Float
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  AND: [InstanceWhereInput!]
  OR: [InstanceWhereInput!]
  NOT: [InstanceWhereInput!]
}

input InstanceWhereUniqueInput {
  id: UUID
  name: String
}

scalar Long

type Mutation {
  createCharacter(data: CharacterCreateInput!): Character!
  updateCharacter(data: CharacterUpdateInput!, where: CharacterWhereUniqueInput!): Character
  updateManyCharacters(data: CharacterUpdateManyMutationInput!, where: CharacterWhereInput): BatchPayload!
  upsertCharacter(where: CharacterWhereUniqueInput!, create: CharacterCreateInput!, update: CharacterUpdateInput!): Character!
  deleteCharacter(where: CharacterWhereUniqueInput!): Character
  deleteManyCharacters(where: CharacterWhereInput): BatchPayload!
  createGuild(data: GuildCreateInput!): Guild!
  updateGuild(data: GuildUpdateInput!, where: GuildWhereUniqueInput!): Guild
  updateManyGuilds(data: GuildUpdateManyMutationInput!, where: GuildWhereInput): BatchPayload!
  upsertGuild(where: GuildWhereUniqueInput!, create: GuildCreateInput!, update: GuildUpdateInput!): Guild!
  deleteGuild(where: GuildWhereUniqueInput!): Guild
  deleteManyGuilds(where: GuildWhereInput): BatchPayload!
  createGuildApplication(data: GuildApplicationCreateInput!): GuildApplication!
  updateGuildApplication(data: GuildApplicationUpdateInput!, where: GuildApplicationWhereUniqueInput!): GuildApplication
  updateManyGuildApplications(data: GuildApplicationUpdateManyMutationInput!, where: GuildApplicationWhereInput): BatchPayload!
  upsertGuildApplication(where: GuildApplicationWhereUniqueInput!, create: GuildApplicationCreateInput!, update: GuildApplicationUpdateInput!): GuildApplication!
  deleteGuildApplication(where: GuildApplicationWhereUniqueInput!): GuildApplication
  deleteManyGuildApplications(where: GuildApplicationWhereInput): BatchPayload!
  createGuildApplicationForm(data: GuildApplicationFormCreateInput!): GuildApplicationForm!
  updateGuildApplicationForm(data: GuildApplicationFormUpdateInput!, where: GuildApplicationFormWhereUniqueInput!): GuildApplicationForm
  updateManyGuildApplicationForms(data: GuildApplicationFormUpdateManyMutationInput!, where: GuildApplicationFormWhereInput): BatchPayload!
  upsertGuildApplicationForm(where: GuildApplicationFormWhereUniqueInput!, create: GuildApplicationFormCreateInput!, update: GuildApplicationFormUpdateInput!): GuildApplicationForm!
  deleteGuildApplicationForm(where: GuildApplicationFormWhereUniqueInput!): GuildApplicationForm
  deleteManyGuildApplicationForms(where: GuildApplicationFormWhereInput): BatchPayload!
  createGuildApplicationFormQuestion(data: GuildApplicationFormQuestionCreateInput!): GuildApplicationFormQuestion!
  updateGuildApplicationFormQuestion(data: GuildApplicationFormQuestionUpdateInput!, where: GuildApplicationFormQuestionWhereUniqueInput!): GuildApplicationFormQuestion
  updateManyGuildApplicationFormQuestions(data: GuildApplicationFormQuestionUpdateManyMutationInput!, where: GuildApplicationFormQuestionWhereInput): BatchPayload!
  upsertGuildApplicationFormQuestion(where: GuildApplicationFormQuestionWhereUniqueInput!, create: GuildApplicationFormQuestionCreateInput!, update: GuildApplicationFormQuestionUpdateInput!): GuildApplicationFormQuestion!
  deleteGuildApplicationFormQuestion(where: GuildApplicationFormQuestionWhereUniqueInput!): GuildApplicationFormQuestion
  deleteManyGuildApplicationFormQuestions(where: GuildApplicationFormQuestionWhereInput): BatchPayload!
  createGuildApplicationFormQuestionAnswer(data: GuildApplicationFormQuestionAnswerCreateInput!): GuildApplicationFormQuestionAnswer!
  updateGuildApplicationFormQuestionAnswer(data: GuildApplicationFormQuestionAnswerUpdateInput!, where: GuildApplicationFormQuestionAnswerWhereUniqueInput!): GuildApplicationFormQuestionAnswer
  updateManyGuildApplicationFormQuestionAnswers(data: GuildApplicationFormQuestionAnswerUpdateManyMutationInput!, where: GuildApplicationFormQuestionAnswerWhereInput): BatchPayload!
  upsertGuildApplicationFormQuestionAnswer(where: GuildApplicationFormQuestionAnswerWhereUniqueInput!, create: GuildApplicationFormQuestionAnswerCreateInput!, update: GuildApplicationFormQuestionAnswerUpdateInput!): GuildApplicationFormQuestionAnswer!
  deleteGuildApplicationFormQuestionAnswer(where: GuildApplicationFormQuestionAnswerWhereUniqueInput!): GuildApplicationFormQuestionAnswer
  deleteManyGuildApplicationFormQuestionAnswers(where: GuildApplicationFormQuestionAnswerWhereInput): BatchPayload!
  createGuildEvent(data: GuildEventCreateInput!): GuildEvent!
  updateGuildEvent(data: GuildEventUpdateInput!, where: GuildEventWhereUniqueInput!): GuildEvent
  updateManyGuildEvents(data: GuildEventUpdateManyMutationInput!, where: GuildEventWhereInput): BatchPayload!
  upsertGuildEvent(where: GuildEventWhereUniqueInput!, create: GuildEventCreateInput!, update: GuildEventUpdateInput!): GuildEvent!
  deleteGuildEvent(where: GuildEventWhereUniqueInput!): GuildEvent
  deleteManyGuildEvents(where: GuildEventWhereInput): BatchPayload!
  createGuildMember(data: GuildMemberCreateInput!): GuildMember!
  updateGuildMember(data: GuildMemberUpdateInput!, where: GuildMemberWhereUniqueInput!): GuildMember
  updateManyGuildMembers(data: GuildMemberUpdateManyMutationInput!, where: GuildMemberWhereInput): BatchPayload!
  upsertGuildMember(where: GuildMemberWhereUniqueInput!, create: GuildMemberCreateInput!, update: GuildMemberUpdateInput!): GuildMember!
  deleteGuildMember(where: GuildMemberWhereUniqueInput!): GuildMember
  deleteManyGuildMembers(where: GuildMemberWhereInput): BatchPayload!
  createGuildPost(data: GuildPostCreateInput!): GuildPost!
  updateGuildPost(data: GuildPostUpdateInput!, where: GuildPostWhereUniqueInput!): GuildPost
  updateManyGuildPosts(data: GuildPostUpdateManyMutationInput!, where: GuildPostWhereInput): BatchPayload!
  upsertGuildPost(where: GuildPostWhereUniqueInput!, create: GuildPostCreateInput!, update: GuildPostUpdateInput!): GuildPost!
  deleteGuildPost(where: GuildPostWhereUniqueInput!): GuildPost
  deleteManyGuildPosts(where: GuildPostWhereInput): BatchPayload!
  createInstance(data: InstanceCreateInput!): Instance!
  updateInstance(data: InstanceUpdateInput!, where: InstanceWhereUniqueInput!): Instance
  updateManyInstances(data: InstanceUpdateManyMutationInput!, where: InstanceWhereInput): BatchPayload!
  upsertInstance(where: InstanceWhereUniqueInput!, create: InstanceCreateInput!, update: InstanceUpdateInput!): Instance!
  deleteInstance(where: InstanceWhereUniqueInput!): Instance
  deleteManyInstances(where: InstanceWhereInput): BatchPayload!
  createRealm(data: RealmCreateInput!): Realm!
  updateRealm(data: RealmUpdateInput!, where: RealmWhereUniqueInput!): Realm
  updateManyRealms(data: RealmUpdateManyMutationInput!, where: RealmWhereInput): BatchPayload!
  upsertRealm(where: RealmWhereUniqueInput!, create: RealmCreateInput!, update: RealmUpdateInput!): Realm!
  deleteRealm(where: RealmWhereUniqueInput!): Realm
  deleteManyRealms(where: RealmWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  character(where: CharacterWhereUniqueInput!): Character
  characters(where: CharacterWhereInput, orderBy: CharacterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Character]!
  charactersConnection(where: CharacterWhereInput, orderBy: CharacterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CharacterConnection!
  guild(where: GuildWhereUniqueInput!): Guild
  guilds(where: GuildWhereInput, orderBy: GuildOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guild]!
  guildsConnection(where: GuildWhereInput, orderBy: GuildOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GuildConnection!
  guildApplication(where: GuildApplicationWhereUniqueInput!): GuildApplication
  guildApplications(where: GuildApplicationWhereInput, orderBy: GuildApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GuildApplication]!
  guildApplicationsConnection(where: GuildApplicationWhereInput, orderBy: GuildApplicationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GuildApplicationConnection!
  guildApplicationForm(where: GuildApplicationFormWhereUniqueInput!): GuildApplicationForm
  guildApplicationForms(where: GuildApplicationFormWhereInput, orderBy: GuildApplicationFormOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GuildApplicationForm]!
  guildApplicationFormsConnection(where: GuildApplicationFormWhereInput, orderBy: GuildApplicationFormOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GuildApplicationFormConnection!
  guildApplicationFormQuestion(where: GuildApplicationFormQuestionWhereUniqueInput!): GuildApplicationFormQuestion
  guildApplicationFormQuestions(where: GuildApplicationFormQuestionWhereInput, orderBy: GuildApplicationFormQuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GuildApplicationFormQuestion]!
  guildApplicationFormQuestionsConnection(where: GuildApplicationFormQuestionWhereInput, orderBy: GuildApplicationFormQuestionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GuildApplicationFormQuestionConnection!
  guildApplicationFormQuestionAnswer(where: GuildApplicationFormQuestionAnswerWhereUniqueInput!): GuildApplicationFormQuestionAnswer
  guildApplicationFormQuestionAnswers(where: GuildApplicationFormQuestionAnswerWhereInput, orderBy: GuildApplicationFormQuestionAnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GuildApplicationFormQuestionAnswer]!
  guildApplicationFormQuestionAnswersConnection(where: GuildApplicationFormQuestionAnswerWhereInput, orderBy: GuildApplicationFormQuestionAnswerOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GuildApplicationFormQuestionAnswerConnection!
  guildEvent(where: GuildEventWhereUniqueInput!): GuildEvent
  guildEvents(where: GuildEventWhereInput, orderBy: GuildEventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GuildEvent]!
  guildEventsConnection(where: GuildEventWhereInput, orderBy: GuildEventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GuildEventConnection!
  guildMember(where: GuildMemberWhereUniqueInput!): GuildMember
  guildMembers(where: GuildMemberWhereInput, orderBy: GuildMemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GuildMember]!
  guildMembersConnection(where: GuildMemberWhereInput, orderBy: GuildMemberOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GuildMemberConnection!
  guildPost(where: GuildPostWhereUniqueInput!): GuildPost
  guildPosts(where: GuildPostWhereInput, orderBy: GuildPostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [GuildPost]!
  guildPostsConnection(where: GuildPostWhereInput, orderBy: GuildPostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GuildPostConnection!
  instance(where: InstanceWhereUniqueInput!): Instance
  instances(where: InstanceWhereInput, orderBy: InstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Instance]!
  instancesConnection(where: InstanceWhereInput, orderBy: InstanceOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InstanceConnection!
  realm(where: RealmWhereUniqueInput!): Realm
  realms(where: RealmWhereInput, orderBy: RealmOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Realm]!
  realmsConnection(where: RealmWhereInput, orderBy: RealmOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RealmConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Realm {
  id: UUID!
  name: String!
  type: RealmType!
  population: RealmPopulation!
  characters(where: CharacterWhereInput, orderBy: CharacterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Character!]
  guilds(where: GuildWhereInput, orderBy: GuildOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guild!]
}

type RealmConnection {
  pageInfo: PageInfo!
  edges: [RealmEdge]!
  aggregate: AggregateRealm!
}

input RealmCreateInput {
  name: String!
  type: RealmType
  population: RealmPopulation
  characters: CharacterCreateManyWithoutRealmInput
  guilds: GuildCreateManyWithoutRealmInput
}

input RealmCreateOneWithoutCharactersInput {
  create: RealmCreateWithoutCharactersInput
  connect: RealmWhereUniqueInput
}

input RealmCreateOneWithoutGuildsInput {
  create: RealmCreateWithoutGuildsInput
  connect: RealmWhereUniqueInput
}

input RealmCreateWithoutCharactersInput {
  name: String!
  type: RealmType
  population: RealmPopulation
  guilds: GuildCreateManyWithoutRealmInput
}

input RealmCreateWithoutGuildsInput {
  name: String!
  type: RealmType
  population: RealmPopulation
  characters: CharacterCreateManyWithoutRealmInput
}

type RealmEdge {
  node: Realm!
  cursor: String!
}

enum RealmOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  type_ASC
  type_DESC
  population_ASC
  population_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

enum RealmPopulation {
  LOW
  NORMAL
  HIGH
  FULL
}

type RealmPreviousValues {
  id: UUID!
  name: String!
  type: RealmType!
  population: RealmPopulation!
}

type RealmSubscriptionPayload {
  mutation: MutationType!
  node: Realm
  updatedFields: [String!]
  previousValues: RealmPreviousValues
}

input RealmSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RealmWhereInput
  AND: [RealmSubscriptionWhereInput!]
  OR: [RealmSubscriptionWhereInput!]
  NOT: [RealmSubscriptionWhereInput!]
}

enum RealmType {
  RP
  RPPVP
  PVP
  NORMAL
  PVE
}

input RealmUpdateInput {
  name: String
  type: RealmType
  population: RealmPopulation
  characters: CharacterUpdateManyWithoutRealmInput
  guilds: GuildUpdateManyWithoutRealmInput
}

input RealmUpdateManyMutationInput {
  name: String
  type: RealmType
  population: RealmPopulation
}

input RealmUpdateOneRequiredWithoutCharactersInput {
  create: RealmCreateWithoutCharactersInput
  update: RealmUpdateWithoutCharactersDataInput
  upsert: RealmUpsertWithoutCharactersInput
  connect: RealmWhereUniqueInput
}

input RealmUpdateOneRequiredWithoutGuildsInput {
  create: RealmCreateWithoutGuildsInput
  update: RealmUpdateWithoutGuildsDataInput
  upsert: RealmUpsertWithoutGuildsInput
  connect: RealmWhereUniqueInput
}

input RealmUpdateWithoutCharactersDataInput {
  name: String
  type: RealmType
  population: RealmPopulation
  guilds: GuildUpdateManyWithoutRealmInput
}

input RealmUpdateWithoutGuildsDataInput {
  name: String
  type: RealmType
  population: RealmPopulation
  characters: CharacterUpdateManyWithoutRealmInput
}

input RealmUpsertWithoutCharactersInput {
  update: RealmUpdateWithoutCharactersDataInput!
  create: RealmCreateWithoutCharactersInput!
}

input RealmUpsertWithoutGuildsInput {
  update: RealmUpdateWithoutGuildsDataInput!
  create: RealmCreateWithoutGuildsInput!
}

input RealmWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  type: RealmType
  type_not: RealmType
  type_in: [RealmType!]
  type_not_in: [RealmType!]
  population: RealmPopulation
  population_not: RealmPopulation
  population_in: [RealmPopulation!]
  population_not_in: [RealmPopulation!]
  characters_every: CharacterWhereInput
  characters_some: CharacterWhereInput
  characters_none: CharacterWhereInput
  guilds_every: GuildWhereInput
  guilds_some: GuildWhereInput
  guilds_none: GuildWhereInput
  AND: [RealmWhereInput!]
  OR: [RealmWhereInput!]
  NOT: [RealmWhereInput!]
}

input RealmWhereUniqueInput {
  id: UUID
  name: String
}

enum Role {
  TANK
  MELEE
  RANGED
  HEALER
}

type Subscription {
  character(where: CharacterSubscriptionWhereInput): CharacterSubscriptionPayload
  guild(where: GuildSubscriptionWhereInput): GuildSubscriptionPayload
  guildApplication(where: GuildApplicationSubscriptionWhereInput): GuildApplicationSubscriptionPayload
  guildApplicationForm(where: GuildApplicationFormSubscriptionWhereInput): GuildApplicationFormSubscriptionPayload
  guildApplicationFormQuestion(where: GuildApplicationFormQuestionSubscriptionWhereInput): GuildApplicationFormQuestionSubscriptionPayload
  guildApplicationFormQuestionAnswer(where: GuildApplicationFormQuestionAnswerSubscriptionWhereInput): GuildApplicationFormQuestionAnswerSubscriptionPayload
  guildEvent(where: GuildEventSubscriptionWhereInput): GuildEventSubscriptionPayload
  guildMember(where: GuildMemberSubscriptionWhereInput): GuildMemberSubscriptionPayload
  guildPost(where: GuildPostSubscriptionWhereInput): GuildPostSubscriptionPayload
  instance(where: InstanceSubscriptionWhereInput): InstanceSubscriptionPayload
  realm(where: RealmSubscriptionWhereInput): RealmSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: UUID!
  createdAt: DateTime!
  displayName: String!
  email: String!
  password: String!
  confirmed: Boolean!
  avatar: String
  characters(where: CharacterWhereInput, orderBy: CharacterOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Character!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  displayName: String!
  email: String!
  password: String!
  confirmed: Boolean
  avatar: String
  characters: CharacterCreateManyWithoutUserInput
}

input UserCreateOneWithoutCharactersInput {
  create: UserCreateWithoutCharactersInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutCharactersInput {
  displayName: String!
  email: String!
  password: String!
  confirmed: Boolean
  avatar: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  displayName_ASC
  displayName_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  confirmed_ASC
  confirmed_DESC
  avatar_ASC
  avatar_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: UUID!
  createdAt: DateTime!
  displayName: String!
  email: String!
  password: String!
  confirmed: Boolean!
  avatar: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  displayName: String
  email: String
  password: String
  confirmed: Boolean
  avatar: String
  characters: CharacterUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  displayName: String
  email: String
  password: String
  confirmed: Boolean
  avatar: String
}

input UserUpdateOneRequiredWithoutCharactersInput {
  create: UserCreateWithoutCharactersInput
  update: UserUpdateWithoutCharactersDataInput
  upsert: UserUpsertWithoutCharactersInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutCharactersDataInput {
  displayName: String
  email: String
  password: String
  confirmed: Boolean
  avatar: String
}

input UserUpsertWithoutCharactersInput {
  update: UserUpdateWithoutCharactersDataInput!
  create: UserCreateWithoutCharactersInput!
}

input UserWhereInput {
  id: UUID
  id_not: UUID
  id_in: [UUID!]
  id_not_in: [UUID!]
  id_lt: UUID
  id_lte: UUID
  id_gt: UUID
  id_gte: UUID
  id_contains: UUID
  id_not_contains: UUID
  id_starts_with: UUID
  id_not_starts_with: UUID
  id_ends_with: UUID
  id_not_ends_with: UUID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  displayName: String
  displayName_not: String
  displayName_in: [String!]
  displayName_not_in: [String!]
  displayName_lt: String
  displayName_lte: String
  displayName_gt: String
  displayName_gte: String
  displayName_contains: String
  displayName_not_contains: String
  displayName_starts_with: String
  displayName_not_starts_with: String
  displayName_ends_with: String
  displayName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  confirmed: Boolean
  confirmed_not: Boolean
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  characters_every: CharacterWhereInput
  characters_some: CharacterWhereInput
  characters_none: CharacterWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: UUID
  email: String
}

scalar UUID
`