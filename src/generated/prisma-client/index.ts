// Code generated by Prisma (prisma@1.26.4). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  user: (where?: UserWhereInput) => Promise<boolean>;
  workspace: (where?: WorkspaceWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  workspace: (where: WorkspaceWhereUniqueInput) => WorkspacePromise;
  workspaces: (args?: {
    where?: WorkspaceWhereInput;
    orderBy?: WorkspaceOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Workspace>;
  workspacesConnection: (args?: {
    where?: WorkspaceWhereInput;
    orderBy?: WorkspaceOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => WorkspaceConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;
  createWorkspace: (data: WorkspaceCreateInput) => WorkspacePromise;
  updateWorkspace: (args: {
    data: WorkspaceUpdateInput;
    where: WorkspaceWhereUniqueInput;
  }) => WorkspacePromise;
  updateManyWorkspaces: (args: {
    data: WorkspaceUpdateManyMutationInput;
    where?: WorkspaceWhereInput;
  }) => BatchPayloadPromise;
  upsertWorkspace: (args: {
    where: WorkspaceWhereUniqueInput;
    create: WorkspaceCreateInput;
    update: WorkspaceUpdateInput;
  }) => WorkspacePromise;
  deleteWorkspace: (where: WorkspaceWhereUniqueInput) => WorkspacePromise;
  deleteManyWorkspaces: (where?: WorkspaceWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
  workspace: (
    where?: WorkspaceSubscriptionWhereInput
  ) => WorkspaceSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type WorkspaceOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "title_ASC"
  | "title_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export type WorkspaceWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface WorkspaceWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  title?: String;
  title_not?: String;
  title_in?: String[] | String;
  title_not_in?: String[] | String;
  title_lt?: String;
  title_lte?: String;
  title_gt?: String;
  title_gte?: String;
  title_contains?: String;
  title_not_contains?: String;
  title_starts_with?: String;
  title_not_starts_with?: String;
  title_ends_with?: String;
  title_not_ends_with?: String;
  workers_every?: UserWhereInput;
  workers_some?: UserWhereInput;
  workers_none?: UserWhereInput;
  AND?: WorkspaceWhereInput[] | WorkspaceWhereInput;
  OR?: WorkspaceWhereInput[] | WorkspaceWhereInput;
  NOT?: WorkspaceWhereInput[] | WorkspaceWhereInput;
}

export interface UserCreateInput {
  name: String;
}

export interface UserUpdateInput {
  name?: String;
}

export interface UserUpdateManyMutationInput {
  name?: String;
}

export interface WorkspaceCreateInput {
  title: String;
  workers?: UserCreateManyInput;
}

export interface UserCreateManyInput {
  create?: UserCreateInput[] | UserCreateInput;
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
}

export interface WorkspaceUpdateInput {
  title?: String;
  workers?: UserUpdateManyInput;
}

export interface UserUpdateManyInput {
  create?: UserCreateInput[] | UserCreateInput;
  update?:
    | UserUpdateWithWhereUniqueNestedInput[]
    | UserUpdateWithWhereUniqueNestedInput;
  upsert?:
    | UserUpsertWithWhereUniqueNestedInput[]
    | UserUpsertWithWhereUniqueNestedInput;
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  set?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput;
  updateMany?:
    | UserUpdateManyWithWhereNestedInput[]
    | UserUpdateManyWithWhereNestedInput;
}

export interface UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput;
  data: UserUpdateDataInput;
}

export interface UserUpdateDataInput {
  name?: String;
}

export interface UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput;
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface UserScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  AND?: UserScalarWhereInput[] | UserScalarWhereInput;
  OR?: UserScalarWhereInput[] | UserScalarWhereInput;
  NOT?: UserScalarWhereInput[] | UserScalarWhereInput;
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput;
  data: UserUpdateManyDataInput;
}

export interface UserUpdateManyDataInput {
  name?: String;
}

export interface WorkspaceUpdateManyMutationInput {
  title?: String;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface WorkspaceSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: WorkspaceWhereInput;
  AND?: WorkspaceSubscriptionWhereInput[] | WorkspaceSubscriptionWhereInput;
  OR?: WorkspaceSubscriptionWhereInput[] | WorkspaceSubscriptionWhereInput;
  NOT?: WorkspaceSubscriptionWhereInput[] | WorkspaceSubscriptionWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface User {
  id: ID_Output;
  name: String;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface Workspace {
  id: ID_Output;
  title: String;
}

export interface WorkspacePromise extends Promise<Workspace>, Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
  workers: <T = FragmentableArray<User>>(args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface WorkspaceSubscription
  extends Promise<AsyncIterator<Workspace>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
  workers: <T = Promise<AsyncIterator<UserSubscription>>>(args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface WorkspaceConnection {
  pageInfo: PageInfo;
  edges: WorkspaceEdge[];
}

export interface WorkspaceConnectionPromise
  extends Promise<WorkspaceConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<WorkspaceEdge>>() => T;
  aggregate: <T = AggregateWorkspacePromise>() => T;
}

export interface WorkspaceConnectionSubscription
  extends Promise<AsyncIterator<WorkspaceConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<WorkspaceEdgeSubscription>>>() => T;
  aggregate: <T = AggregateWorkspaceSubscription>() => T;
}

export interface WorkspaceEdge {
  node: Workspace;
  cursor: String;
}

export interface WorkspaceEdgePromise
  extends Promise<WorkspaceEdge>,
    Fragmentable {
  node: <T = WorkspacePromise>() => T;
  cursor: () => Promise<String>;
}

export interface WorkspaceEdgeSubscription
  extends Promise<AsyncIterator<WorkspaceEdge>>,
    Fragmentable {
  node: <T = WorkspaceSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateWorkspace {
  count: Int;
}

export interface AggregateWorkspacePromise
  extends Promise<AggregateWorkspace>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateWorkspaceSubscription
  extends Promise<AsyncIterator<AggregateWorkspace>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  name: String;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
}

export interface WorkspaceSubscriptionPayload {
  mutation: MutationType;
  node: Workspace;
  updatedFields: String[];
  previousValues: WorkspacePreviousValues;
}

export interface WorkspaceSubscriptionPayloadPromise
  extends Promise<WorkspaceSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = WorkspacePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = WorkspacePreviousValuesPromise>() => T;
}

export interface WorkspaceSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<WorkspaceSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = WorkspaceSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = WorkspacePreviousValuesSubscription>() => T;
}

export interface WorkspacePreviousValues {
  id: ID_Output;
  title: String;
}

export interface WorkspacePreviousValuesPromise
  extends Promise<WorkspacePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  title: () => Promise<String>;
}

export interface WorkspacePreviousValuesSubscription
  extends Promise<AsyncIterator<WorkspacePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  title: () => Promise<AsyncIterator<String>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Workspace",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
export const prisma = new Prisma();
