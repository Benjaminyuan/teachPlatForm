module.exports = {
        typeDefs: /* GraphQL */ `type AggregateAvalibelTime {
  count: Int!
}

type AggregateInvitation {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateParent {
  count: Int!
}

type AggregateStudent {
  count: Int!
}

type AggregateSubject {
  count: Int!
}

type AggregateUser {
  count: Int!
}

enum AuthStatus {
  UNCOMMITED
  AUTHCOMMITED
  AUTHED
}

type AvalibelTime {
  day: Day!
  detail: DetailTime!
}

type AvalibelTimeConnection {
  pageInfo: PageInfo!
  edges: [AvalibelTimeEdge]!
  aggregate: AggregateAvalibelTime!
}

input AvalibelTimeCreateInput {
  day: Day!
  detail: DetailTime!
}

input AvalibelTimeCreateManyInput {
  create: [AvalibelTimeCreateInput!]
}

type AvalibelTimeEdge {
  node: AvalibelTime!
  cursor: String!
}

enum AvalibelTimeOrderByInput {
  day_ASC
  day_DESC
  detail_ASC
  detail_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AvalibelTimePreviousValues {
  day: Day!
  detail: DetailTime!
}

input AvalibelTimeScalarWhereInput {
  day: Day
  day_not: Day
  day_in: [Day!]
  day_not_in: [Day!]
  detail: DetailTime
  detail_not: DetailTime
  detail_in: [DetailTime!]
  detail_not_in: [DetailTime!]
  AND: [AvalibelTimeScalarWhereInput!]
  OR: [AvalibelTimeScalarWhereInput!]
  NOT: [AvalibelTimeScalarWhereInput!]
}

type AvalibelTimeSubscriptionPayload {
  mutation: MutationType!
  node: AvalibelTime
  updatedFields: [String!]
  previousValues: AvalibelTimePreviousValues
}

input AvalibelTimeSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AvalibelTimeWhereInput
  AND: [AvalibelTimeSubscriptionWhereInput!]
  OR: [AvalibelTimeSubscriptionWhereInput!]
  NOT: [AvalibelTimeSubscriptionWhereInput!]
}

input AvalibelTimeUpdateManyDataInput {
  day: Day
  detail: DetailTime
}

input AvalibelTimeUpdateManyInput {
  create: [AvalibelTimeCreateInput!]
  deleteMany: [AvalibelTimeScalarWhereInput!]
  updateMany: [AvalibelTimeUpdateManyWithWhereNestedInput!]
}

input AvalibelTimeUpdateManyMutationInput {
  day: Day
  detail: DetailTime
}

input AvalibelTimeUpdateManyWithWhereNestedInput {
  where: AvalibelTimeScalarWhereInput!
  data: AvalibelTimeUpdateManyDataInput!
}

input AvalibelTimeWhereInput {
  day: Day
  day_not: Day
  day_in: [Day!]
  day_not_in: [Day!]
  detail: DetailTime
  detail_not: DetailTime
  detail_in: [DetailTime!]
  detail_not_in: [DetailTime!]
  AND: [AvalibelTimeWhereInput!]
  OR: [AvalibelTimeWhereInput!]
  NOT: [AvalibelTimeWhereInput!]
}

type BatchPayload {
  count: Long!
}

scalar DateTime

enum Day {
  SUN
  MON
  TUE
  WED
  THU
  FRI
  SAT
}

enum DetailTime {
  MORN
  NOON
  AFTER
}

enum Gender {
  MALE
  FEMALE
}

type Invitation {
  id: ID!
  stuednt: Student!
  parents: Parent!
  status: InvitationStatus!
}

type InvitationConnection {
  pageInfo: PageInfo!
  edges: [InvitationEdge]!
  aggregate: AggregateInvitation!
}

input InvitationCreateInput {
  stuednt: StudentCreateOneWithoutInvitationsInput!
  parents: ParentCreateOneWithoutInvitationsInput!
  status: InvitationStatus!
}

input InvitationCreateManyWithoutParentsInput {
  create: [InvitationCreateWithoutParentsInput!]
  connect: [InvitationWhereUniqueInput!]
}

input InvitationCreateManyWithoutStuedntInput {
  create: [InvitationCreateWithoutStuedntInput!]
  connect: [InvitationWhereUniqueInput!]
}

input InvitationCreateWithoutParentsInput {
  stuednt: StudentCreateOneWithoutInvitationsInput!
  status: InvitationStatus!
}

input InvitationCreateWithoutStuedntInput {
  parents: ParentCreateOneWithoutInvitationsInput!
  status: InvitationStatus!
}

type InvitationEdge {
  node: Invitation!
  cursor: String!
}

enum InvitationOrderByInput {
  id_ASC
  id_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type InvitationPreviousValues {
  id: ID!
  status: InvitationStatus!
}

input InvitationScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  status: InvitationStatus
  status_not: InvitationStatus
  status_in: [InvitationStatus!]
  status_not_in: [InvitationStatus!]
  AND: [InvitationScalarWhereInput!]
  OR: [InvitationScalarWhereInput!]
  NOT: [InvitationScalarWhereInput!]
}

enum InvitationStatus {
  WAITING
  AGREED
  REJECTED
}

type InvitationSubscriptionPayload {
  mutation: MutationType!
  node: Invitation
  updatedFields: [String!]
  previousValues: InvitationPreviousValues
}

input InvitationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: InvitationWhereInput
  AND: [InvitationSubscriptionWhereInput!]
  OR: [InvitationSubscriptionWhereInput!]
  NOT: [InvitationSubscriptionWhereInput!]
}

input InvitationUpdateInput {
  stuednt: StudentUpdateOneRequiredWithoutInvitationsInput
  parents: ParentUpdateOneRequiredWithoutInvitationsInput
  status: InvitationStatus
}

input InvitationUpdateManyDataInput {
  status: InvitationStatus
}

input InvitationUpdateManyMutationInput {
  status: InvitationStatus
}

input InvitationUpdateManyWithoutParentsInput {
  create: [InvitationCreateWithoutParentsInput!]
  delete: [InvitationWhereUniqueInput!]
  connect: [InvitationWhereUniqueInput!]
  disconnect: [InvitationWhereUniqueInput!]
  update: [InvitationUpdateWithWhereUniqueWithoutParentsInput!]
  upsert: [InvitationUpsertWithWhereUniqueWithoutParentsInput!]
  deleteMany: [InvitationScalarWhereInput!]
  updateMany: [InvitationUpdateManyWithWhereNestedInput!]
}

input InvitationUpdateManyWithoutStuedntInput {
  create: [InvitationCreateWithoutStuedntInput!]
  delete: [InvitationWhereUniqueInput!]
  connect: [InvitationWhereUniqueInput!]
  disconnect: [InvitationWhereUniqueInput!]
  update: [InvitationUpdateWithWhereUniqueWithoutStuedntInput!]
  upsert: [InvitationUpsertWithWhereUniqueWithoutStuedntInput!]
  deleteMany: [InvitationScalarWhereInput!]
  updateMany: [InvitationUpdateManyWithWhereNestedInput!]
}

input InvitationUpdateManyWithWhereNestedInput {
  where: InvitationScalarWhereInput!
  data: InvitationUpdateManyDataInput!
}

input InvitationUpdateWithoutParentsDataInput {
  stuednt: StudentUpdateOneRequiredWithoutInvitationsInput
  status: InvitationStatus
}

input InvitationUpdateWithoutStuedntDataInput {
  parents: ParentUpdateOneRequiredWithoutInvitationsInput
  status: InvitationStatus
}

input InvitationUpdateWithWhereUniqueWithoutParentsInput {
  where: InvitationWhereUniqueInput!
  data: InvitationUpdateWithoutParentsDataInput!
}

input InvitationUpdateWithWhereUniqueWithoutStuedntInput {
  where: InvitationWhereUniqueInput!
  data: InvitationUpdateWithoutStuedntDataInput!
}

input InvitationUpsertWithWhereUniqueWithoutParentsInput {
  where: InvitationWhereUniqueInput!
  update: InvitationUpdateWithoutParentsDataInput!
  create: InvitationCreateWithoutParentsInput!
}

input InvitationUpsertWithWhereUniqueWithoutStuedntInput {
  where: InvitationWhereUniqueInput!
  update: InvitationUpdateWithoutStuedntDataInput!
  create: InvitationCreateWithoutStuedntInput!
}

input InvitationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  stuednt: StudentWhereInput
  parents: ParentWhereInput
  status: InvitationStatus
  status_not: InvitationStatus
  status_in: [InvitationStatus!]
  status_not_in: [InvitationStatus!]
  AND: [InvitationWhereInput!]
  OR: [InvitationWhereInput!]
  NOT: [InvitationWhereInput!]
}

input InvitationWhereUniqueInput {
  id: ID
}

enum Level {
  MIDDLE
  MIDDLEHIGH
  PRIMARY
  UNI
}

scalar Long

type Mutation {
  createAvalibelTime(data: AvalibelTimeCreateInput!): AvalibelTime!
  updateManyAvalibelTimes(data: AvalibelTimeUpdateManyMutationInput!, where: AvalibelTimeWhereInput): BatchPayload!
  deleteManyAvalibelTimes(where: AvalibelTimeWhereInput): BatchPayload!
  createInvitation(data: InvitationCreateInput!): Invitation!
  updateInvitation(data: InvitationUpdateInput!, where: InvitationWhereUniqueInput!): Invitation
  updateManyInvitations(data: InvitationUpdateManyMutationInput!, where: InvitationWhereInput): BatchPayload!
  upsertInvitation(where: InvitationWhereUniqueInput!, create: InvitationCreateInput!, update: InvitationUpdateInput!): Invitation!
  deleteInvitation(where: InvitationWhereUniqueInput!): Invitation
  deleteManyInvitations(where: InvitationWhereInput): BatchPayload!
  createOrder(data: OrderCreateInput!): Order!
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  createParent(data: ParentCreateInput!): Parent!
  updateParent(data: ParentUpdateInput!, where: ParentWhereUniqueInput!): Parent
  updateManyParents(data: ParentUpdateManyMutationInput!, where: ParentWhereInput): BatchPayload!
  upsertParent(where: ParentWhereUniqueInput!, create: ParentCreateInput!, update: ParentUpdateInput!): Parent!
  deleteParent(where: ParentWhereUniqueInput!): Parent
  deleteManyParents(where: ParentWhereInput): BatchPayload!
  createStudent(data: StudentCreateInput!): Student!
  updateStudent(data: StudentUpdateInput!, where: StudentWhereUniqueInput!): Student
  updateManyStudents(data: StudentUpdateManyMutationInput!, where: StudentWhereInput): BatchPayload!
  upsertStudent(where: StudentWhereUniqueInput!, create: StudentCreateInput!, update: StudentUpdateInput!): Student!
  deleteStudent(where: StudentWhereUniqueInput!): Student
  deleteManyStudents(where: StudentWhereInput): BatchPayload!
  createSubject(data: SubjectCreateInput!): Subject!
  updateManySubjects(data: SubjectUpdateManyMutationInput!, where: SubjectWhereInput): BatchPayload!
  deleteManySubjects(where: SubjectWhereInput): BatchPayload!
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

type Order {
  order: String!
  stuednt: Student!
  parents: Parent!
  status: OrderStatus!
}

type OrderConnection {
  pageInfo: PageInfo!
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  order: String!
  stuednt: StudentCreateOneWithoutOrderInput!
  parents: ParentCreateOneWithoutOrderInput!
  status: OrderStatus!
}

input OrderCreateManyWithoutParentsInput {
  create: [OrderCreateWithoutParentsInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateManyWithoutStuedntInput {
  create: [OrderCreateWithoutStuedntInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateWithoutParentsInput {
  order: String!
  stuednt: StudentCreateOneWithoutOrderInput!
  status: OrderStatus!
}

input OrderCreateWithoutStuedntInput {
  order: String!
  parents: ParentCreateOneWithoutOrderInput!
  status: OrderStatus!
}

type OrderEdge {
  node: Order!
  cursor: String!
}

enum OrderOrderByInput {
  order_ASC
  order_DESC
  status_ASC
  status_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OrderPreviousValues {
  order: String!
  status: OrderStatus!
}

input OrderScalarWhereInput {
  order: String
  order_not: String
  order_in: [String!]
  order_not_in: [String!]
  order_lt: String
  order_lte: String
  order_gt: String
  order_gte: String
  order_contains: String
  order_not_contains: String
  order_starts_with: String
  order_not_starts_with: String
  order_ends_with: String
  order_not_ends_with: String
  status: OrderStatus
  status_not: OrderStatus
  status_in: [OrderStatus!]
  status_not_in: [OrderStatus!]
  AND: [OrderScalarWhereInput!]
  OR: [OrderScalarWhereInput!]
  NOT: [OrderScalarWhereInput!]
}

enum OrderStatus {
  PAIED
  UNPAIED
  FINISHED
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
  AND: [OrderSubscriptionWhereInput!]
  OR: [OrderSubscriptionWhereInput!]
  NOT: [OrderSubscriptionWhereInput!]
}

input OrderUpdateInput {
  order: String
  stuednt: StudentUpdateOneRequiredWithoutOrderInput
  parents: ParentUpdateOneRequiredWithoutOrderInput
  status: OrderStatus
}

input OrderUpdateManyDataInput {
  order: String
  status: OrderStatus
}

input OrderUpdateManyMutationInput {
  order: String
  status: OrderStatus
}

input OrderUpdateManyWithoutParentsInput {
  create: [OrderCreateWithoutParentsInput!]
  delete: [OrderWhereUniqueInput!]
  connect: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutParentsInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutParentsInput!]
  deleteMany: [OrderScalarWhereInput!]
  updateMany: [OrderUpdateManyWithWhereNestedInput!]
}

input OrderUpdateManyWithoutStuedntInput {
  create: [OrderCreateWithoutStuedntInput!]
  delete: [OrderWhereUniqueInput!]
  connect: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutStuedntInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutStuedntInput!]
  deleteMany: [OrderScalarWhereInput!]
  updateMany: [OrderUpdateManyWithWhereNestedInput!]
}

input OrderUpdateManyWithWhereNestedInput {
  where: OrderScalarWhereInput!
  data: OrderUpdateManyDataInput!
}

input OrderUpdateWithoutParentsDataInput {
  order: String
  stuednt: StudentUpdateOneRequiredWithoutOrderInput
  status: OrderStatus
}

input OrderUpdateWithoutStuedntDataInput {
  order: String
  parents: ParentUpdateOneRequiredWithoutOrderInput
  status: OrderStatus
}

input OrderUpdateWithWhereUniqueWithoutParentsInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutParentsDataInput!
}

input OrderUpdateWithWhereUniqueWithoutStuedntInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutStuedntDataInput!
}

input OrderUpsertWithWhereUniqueWithoutParentsInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutParentsDataInput!
  create: OrderCreateWithoutParentsInput!
}

input OrderUpsertWithWhereUniqueWithoutStuedntInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutStuedntDataInput!
  create: OrderCreateWithoutStuedntInput!
}

input OrderWhereInput {
  order: String
  order_not: String
  order_in: [String!]
  order_not_in: [String!]
  order_lt: String
  order_lte: String
  order_gt: String
  order_gte: String
  order_contains: String
  order_not_contains: String
  order_starts_with: String
  order_not_starts_with: String
  order_ends_with: String
  order_not_ends_with: String
  stuednt: StudentWhereInput
  parents: ParentWhereInput
  status: OrderStatus
  status_not: OrderStatus
  status_in: [OrderStatus!]
  status_not_in: [OrderStatus!]
  AND: [OrderWhereInput!]
  OR: [OrderWhereInput!]
  NOT: [OrderWhereInput!]
}

input OrderWhereUniqueInput {
  order: String
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Parent {
  id: ID!
  phone: String!
  name: String!
  address: String!
  email: String!
  subjects(where: SubjectWhereInput, orderBy: SubjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Subject!]
  authstatus: AuthStatus!
  createdAt: DateTime!
  updatedAt: DateTime!
  lessonTime: Int
  days: Int
  pay: Int
  childGender: Gender!
  invitations(where: InvitationWhereInput, orderBy: InvitationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invitation!]
  order(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
  teacherReuqire: String
  childStatus: String
}

type ParentConnection {
  pageInfo: PageInfo!
  edges: [ParentEdge]!
  aggregate: AggregateParent!
}

input ParentCreateInput {
  phone: String!
  name: String!
  address: String!
  email: String!
  subjects: SubjectCreateManyInput
  authstatus: AuthStatus!
  lessonTime: Int
  days: Int
  pay: Int
  childGender: Gender
  invitations: InvitationCreateManyWithoutParentsInput
  order: OrderCreateManyWithoutParentsInput
  teacherReuqire: String
  childStatus: String
}

input ParentCreateOneWithoutInvitationsInput {
  create: ParentCreateWithoutInvitationsInput
  connect: ParentWhereUniqueInput
}

input ParentCreateOneWithoutOrderInput {
  create: ParentCreateWithoutOrderInput
  connect: ParentWhereUniqueInput
}

input ParentCreateWithoutInvitationsInput {
  phone: String!
  name: String!
  address: String!
  email: String!
  subjects: SubjectCreateManyInput
  authstatus: AuthStatus!
  lessonTime: Int
  days: Int
  pay: Int
  childGender: Gender
  order: OrderCreateManyWithoutParentsInput
  teacherReuqire: String
  childStatus: String
}

input ParentCreateWithoutOrderInput {
  phone: String!
  name: String!
  address: String!
  email: String!
  subjects: SubjectCreateManyInput
  authstatus: AuthStatus!
  lessonTime: Int
  days: Int
  pay: Int
  childGender: Gender
  invitations: InvitationCreateManyWithoutParentsInput
  teacherReuqire: String
  childStatus: String
}

type ParentEdge {
  node: Parent!
  cursor: String!
}

enum ParentOrderByInput {
  id_ASC
  id_DESC
  phone_ASC
  phone_DESC
  name_ASC
  name_DESC
  address_ASC
  address_DESC
  email_ASC
  email_DESC
  authstatus_ASC
  authstatus_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  lessonTime_ASC
  lessonTime_DESC
  days_ASC
  days_DESC
  pay_ASC
  pay_DESC
  childGender_ASC
  childGender_DESC
  teacherReuqire_ASC
  teacherReuqire_DESC
  childStatus_ASC
  childStatus_DESC
}

type ParentPreviousValues {
  id: ID!
  phone: String!
  name: String!
  address: String!
  email: String!
  authstatus: AuthStatus!
  createdAt: DateTime!
  updatedAt: DateTime!
  lessonTime: Int
  days: Int
  pay: Int
  childGender: Gender!
  teacherReuqire: String
  childStatus: String
}

type ParentSubscriptionPayload {
  mutation: MutationType!
  node: Parent
  updatedFields: [String!]
  previousValues: ParentPreviousValues
}

input ParentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ParentWhereInput
  AND: [ParentSubscriptionWhereInput!]
  OR: [ParentSubscriptionWhereInput!]
  NOT: [ParentSubscriptionWhereInput!]
}

input ParentUpdateInput {
  phone: String
  name: String
  address: String
  email: String
  subjects: SubjectUpdateManyInput
  authstatus: AuthStatus
  lessonTime: Int
  days: Int
  pay: Int
  childGender: Gender
  invitations: InvitationUpdateManyWithoutParentsInput
  order: OrderUpdateManyWithoutParentsInput
  teacherReuqire: String
  childStatus: String
}

input ParentUpdateManyMutationInput {
  phone: String
  name: String
  address: String
  email: String
  authstatus: AuthStatus
  lessonTime: Int
  days: Int
  pay: Int
  childGender: Gender
  teacherReuqire: String
  childStatus: String
}

input ParentUpdateOneRequiredWithoutInvitationsInput {
  create: ParentCreateWithoutInvitationsInput
  update: ParentUpdateWithoutInvitationsDataInput
  upsert: ParentUpsertWithoutInvitationsInput
  connect: ParentWhereUniqueInput
}

input ParentUpdateOneRequiredWithoutOrderInput {
  create: ParentCreateWithoutOrderInput
  update: ParentUpdateWithoutOrderDataInput
  upsert: ParentUpsertWithoutOrderInput
  connect: ParentWhereUniqueInput
}

input ParentUpdateWithoutInvitationsDataInput {
  phone: String
  name: String
  address: String
  email: String
  subjects: SubjectUpdateManyInput
  authstatus: AuthStatus
  lessonTime: Int
  days: Int
  pay: Int
  childGender: Gender
  order: OrderUpdateManyWithoutParentsInput
  teacherReuqire: String
  childStatus: String
}

input ParentUpdateWithoutOrderDataInput {
  phone: String
  name: String
  address: String
  email: String
  subjects: SubjectUpdateManyInput
  authstatus: AuthStatus
  lessonTime: Int
  days: Int
  pay: Int
  childGender: Gender
  invitations: InvitationUpdateManyWithoutParentsInput
  teacherReuqire: String
  childStatus: String
}

input ParentUpsertWithoutInvitationsInput {
  update: ParentUpdateWithoutInvitationsDataInput!
  create: ParentCreateWithoutInvitationsInput!
}

input ParentUpsertWithoutOrderInput {
  update: ParentUpdateWithoutOrderDataInput!
  create: ParentCreateWithoutOrderInput!
}

input ParentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
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
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
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
  subjects_every: SubjectWhereInput
  subjects_some: SubjectWhereInput
  subjects_none: SubjectWhereInput
  authstatus: AuthStatus
  authstatus_not: AuthStatus
  authstatus_in: [AuthStatus!]
  authstatus_not_in: [AuthStatus!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  lessonTime: Int
  lessonTime_not: Int
  lessonTime_in: [Int!]
  lessonTime_not_in: [Int!]
  lessonTime_lt: Int
  lessonTime_lte: Int
  lessonTime_gt: Int
  lessonTime_gte: Int
  days: Int
  days_not: Int
  days_in: [Int!]
  days_not_in: [Int!]
  days_lt: Int
  days_lte: Int
  days_gt: Int
  days_gte: Int
  pay: Int
  pay_not: Int
  pay_in: [Int!]
  pay_not_in: [Int!]
  pay_lt: Int
  pay_lte: Int
  pay_gt: Int
  pay_gte: Int
  childGender: Gender
  childGender_not: Gender
  childGender_in: [Gender!]
  childGender_not_in: [Gender!]
  invitations_every: InvitationWhereInput
  invitations_some: InvitationWhereInput
  invitations_none: InvitationWhereInput
  order_every: OrderWhereInput
  order_some: OrderWhereInput
  order_none: OrderWhereInput
  teacherReuqire: String
  teacherReuqire_not: String
  teacherReuqire_in: [String!]
  teacherReuqire_not_in: [String!]
  teacherReuqire_lt: String
  teacherReuqire_lte: String
  teacherReuqire_gt: String
  teacherReuqire_gte: String
  teacherReuqire_contains: String
  teacherReuqire_not_contains: String
  teacherReuqire_starts_with: String
  teacherReuqire_not_starts_with: String
  teacherReuqire_ends_with: String
  teacherReuqire_not_ends_with: String
  childStatus: String
  childStatus_not: String
  childStatus_in: [String!]
  childStatus_not_in: [String!]
  childStatus_lt: String
  childStatus_lte: String
  childStatus_gt: String
  childStatus_gte: String
  childStatus_contains: String
  childStatus_not_contains: String
  childStatus_starts_with: String
  childStatus_not_starts_with: String
  childStatus_ends_with: String
  childStatus_not_ends_with: String
  AND: [ParentWhereInput!]
  OR: [ParentWhereInput!]
  NOT: [ParentWhereInput!]
}

input ParentWhereUniqueInput {
  id: ID
  phone: String
  name: String
  email: String
}

type Query {
  avalibelTimes(where: AvalibelTimeWhereInput, orderBy: AvalibelTimeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AvalibelTime]!
  avalibelTimesConnection(where: AvalibelTimeWhereInput, orderBy: AvalibelTimeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AvalibelTimeConnection!
  invitation(where: InvitationWhereUniqueInput!): Invitation
  invitations(where: InvitationWhereInput, orderBy: InvitationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invitation]!
  invitationsConnection(where: InvitationWhereInput, orderBy: InvitationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InvitationConnection!
  order(where: OrderWhereUniqueInput!): Order
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  parent(where: ParentWhereUniqueInput!): Parent
  parents(where: ParentWhereInput, orderBy: ParentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Parent]!
  parentsConnection(where: ParentWhereInput, orderBy: ParentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ParentConnection!
  student(where: StudentWhereUniqueInput!): Student
  students(where: StudentWhereInput, orderBy: StudentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Student]!
  studentsConnection(where: StudentWhereInput, orderBy: StudentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StudentConnection!
  subjects(where: SubjectWhereInput, orderBy: SubjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Subject]!
  subjectsConnection(where: SubjectWhereInput, orderBy: SubjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SubjectConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Student {
  id: ID!
  phone: String!
  name: String!
  university: University!
  email: String!
  Gender: Gender
  createdAt: DateTime!
  updatedAt: DateTime!
  authstatus: AuthStatus!
  subjects(where: SubjectWhereInput, orderBy: SubjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Subject!]
  avalible(where: AvalibelTimeWhereInput, orderBy: AvalibelTimeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AvalibelTime!]
  invitations(where: InvitationWhereInput, orderBy: InvitationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invitation!]
  order(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
}

type StudentConnection {
  pageInfo: PageInfo!
  edges: [StudentEdge]!
  aggregate: AggregateStudent!
}

input StudentCreateInput {
  phone: String!
  name: String!
  university: University!
  email: String!
  Gender: Gender
  authstatus: AuthStatus!
  subjects: SubjectCreateManyInput
  avalible: AvalibelTimeCreateManyInput
  invitations: InvitationCreateManyWithoutStuedntInput
  order: OrderCreateManyWithoutStuedntInput
}

input StudentCreateOneWithoutInvitationsInput {
  create: StudentCreateWithoutInvitationsInput
  connect: StudentWhereUniqueInput
}

input StudentCreateOneWithoutOrderInput {
  create: StudentCreateWithoutOrderInput
  connect: StudentWhereUniqueInput
}

input StudentCreateWithoutInvitationsInput {
  phone: String!
  name: String!
  university: University!
  email: String!
  Gender: Gender
  authstatus: AuthStatus!
  subjects: SubjectCreateManyInput
  avalible: AvalibelTimeCreateManyInput
  order: OrderCreateManyWithoutStuedntInput
}

input StudentCreateWithoutOrderInput {
  phone: String!
  name: String!
  university: University!
  email: String!
  Gender: Gender
  authstatus: AuthStatus!
  subjects: SubjectCreateManyInput
  avalible: AvalibelTimeCreateManyInput
  invitations: InvitationCreateManyWithoutStuedntInput
}

type StudentEdge {
  node: Student!
  cursor: String!
}

enum StudentOrderByInput {
  id_ASC
  id_DESC
  phone_ASC
  phone_DESC
  name_ASC
  name_DESC
  university_ASC
  university_DESC
  email_ASC
  email_DESC
  Gender_ASC
  Gender_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  authstatus_ASC
  authstatus_DESC
}

type StudentPreviousValues {
  id: ID!
  phone: String!
  name: String!
  university: University!
  email: String!
  Gender: Gender
  createdAt: DateTime!
  updatedAt: DateTime!
  authstatus: AuthStatus!
}

type StudentSubscriptionPayload {
  mutation: MutationType!
  node: Student
  updatedFields: [String!]
  previousValues: StudentPreviousValues
}

input StudentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StudentWhereInput
  AND: [StudentSubscriptionWhereInput!]
  OR: [StudentSubscriptionWhereInput!]
  NOT: [StudentSubscriptionWhereInput!]
}

input StudentUpdateInput {
  phone: String
  name: String
  university: University
  email: String
  Gender: Gender
  authstatus: AuthStatus
  subjects: SubjectUpdateManyInput
  avalible: AvalibelTimeUpdateManyInput
  invitations: InvitationUpdateManyWithoutStuedntInput
  order: OrderUpdateManyWithoutStuedntInput
}

input StudentUpdateManyMutationInput {
  phone: String
  name: String
  university: University
  email: String
  Gender: Gender
  authstatus: AuthStatus
}

input StudentUpdateOneRequiredWithoutInvitationsInput {
  create: StudentCreateWithoutInvitationsInput
  update: StudentUpdateWithoutInvitationsDataInput
  upsert: StudentUpsertWithoutInvitationsInput
  connect: StudentWhereUniqueInput
}

input StudentUpdateOneRequiredWithoutOrderInput {
  create: StudentCreateWithoutOrderInput
  update: StudentUpdateWithoutOrderDataInput
  upsert: StudentUpsertWithoutOrderInput
  connect: StudentWhereUniqueInput
}

input StudentUpdateWithoutInvitationsDataInput {
  phone: String
  name: String
  university: University
  email: String
  Gender: Gender
  authstatus: AuthStatus
  subjects: SubjectUpdateManyInput
  avalible: AvalibelTimeUpdateManyInput
  order: OrderUpdateManyWithoutStuedntInput
}

input StudentUpdateWithoutOrderDataInput {
  phone: String
  name: String
  university: University
  email: String
  Gender: Gender
  authstatus: AuthStatus
  subjects: SubjectUpdateManyInput
  avalible: AvalibelTimeUpdateManyInput
  invitations: InvitationUpdateManyWithoutStuedntInput
}

input StudentUpsertWithoutInvitationsInput {
  update: StudentUpdateWithoutInvitationsDataInput!
  create: StudentCreateWithoutInvitationsInput!
}

input StudentUpsertWithoutOrderInput {
  update: StudentUpdateWithoutOrderDataInput!
  create: StudentCreateWithoutOrderInput!
}

input StudentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
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
  university: University
  university_not: University
  university_in: [University!]
  university_not_in: [University!]
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
  Gender: Gender
  Gender_not: Gender
  Gender_in: [Gender!]
  Gender_not_in: [Gender!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  authstatus: AuthStatus
  authstatus_not: AuthStatus
  authstatus_in: [AuthStatus!]
  authstatus_not_in: [AuthStatus!]
  subjects_every: SubjectWhereInput
  subjects_some: SubjectWhereInput
  subjects_none: SubjectWhereInput
  avalible_every: AvalibelTimeWhereInput
  avalible_some: AvalibelTimeWhereInput
  avalible_none: AvalibelTimeWhereInput
  invitations_every: InvitationWhereInput
  invitations_some: InvitationWhereInput
  invitations_none: InvitationWhereInput
  order_every: OrderWhereInput
  order_some: OrderWhereInput
  order_none: OrderWhereInput
  AND: [StudentWhereInput!]
  OR: [StudentWhereInput!]
  NOT: [StudentWhereInput!]
}

input StudentWhereUniqueInput {
  id: ID
  phone: String
  name: String
  email: String
}

type Subject {
  name: SubjectName!
  level: [Level!]!
}

type SubjectConnection {
  pageInfo: PageInfo!
  edges: [SubjectEdge]!
  aggregate: AggregateSubject!
}

input SubjectCreateInput {
  name: SubjectName!
  level: SubjectCreatelevelInput
}

input SubjectCreatelevelInput {
  set: [Level!]
}

input SubjectCreateManyInput {
  create: [SubjectCreateInput!]
}

type SubjectEdge {
  node: Subject!
  cursor: String!
}

enum SubjectName {
  CHINESE
  MATH
  ENGLISH
}

enum SubjectOrderByInput {
  name_ASC
  name_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type SubjectPreviousValues {
  name: SubjectName!
  level: [Level!]!
}

input SubjectScalarWhereInput {
  name: SubjectName
  name_not: SubjectName
  name_in: [SubjectName!]
  name_not_in: [SubjectName!]
  AND: [SubjectScalarWhereInput!]
  OR: [SubjectScalarWhereInput!]
  NOT: [SubjectScalarWhereInput!]
}

type SubjectSubscriptionPayload {
  mutation: MutationType!
  node: Subject
  updatedFields: [String!]
  previousValues: SubjectPreviousValues
}

input SubjectSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: SubjectWhereInput
  AND: [SubjectSubscriptionWhereInput!]
  OR: [SubjectSubscriptionWhereInput!]
  NOT: [SubjectSubscriptionWhereInput!]
}

input SubjectUpdatelevelInput {
  set: [Level!]
}

input SubjectUpdateManyDataInput {
  name: SubjectName
  level: SubjectUpdatelevelInput
}

input SubjectUpdateManyInput {
  create: [SubjectCreateInput!]
  deleteMany: [SubjectScalarWhereInput!]
  updateMany: [SubjectUpdateManyWithWhereNestedInput!]
}

input SubjectUpdateManyMutationInput {
  name: SubjectName
  level: SubjectUpdatelevelInput
}

input SubjectUpdateManyWithWhereNestedInput {
  where: SubjectScalarWhereInput!
  data: SubjectUpdateManyDataInput!
}

input SubjectWhereInput {
  name: SubjectName
  name_not: SubjectName
  name_in: [SubjectName!]
  name_not_in: [SubjectName!]
  AND: [SubjectWhereInput!]
  OR: [SubjectWhereInput!]
  NOT: [SubjectWhereInput!]
}

type Subscription {
  avalibelTime(where: AvalibelTimeSubscriptionWhereInput): AvalibelTimeSubscriptionPayload
  invitation(where: InvitationSubscriptionWhereInput): InvitationSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  parent(where: ParentSubscriptionWhereInput): ParentSubscriptionPayload
  student(where: StudentSubscriptionWhereInput): StudentSubscriptionPayload
  subject(where: SubjectSubscriptionWhereInput): SubjectSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

enum University {
  HUST
  WHU
}

type User {
  id: ID!
  name: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
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
  name: String
}

input UserUpdateManyMutationInput {
  name: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
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
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    