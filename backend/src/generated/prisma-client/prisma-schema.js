module.exports = {
        typeDefs: /* GraphQL */ `type Admin {
  id: ID!
  UnionID: String!
  name: String!
  phone: String!
  email: String!
}

type AdminConnection {
  pageInfo: PageInfo!
  edges: [AdminEdge]!
  aggregate: AggregateAdmin!
}

input AdminCreateInput {
  UnionID: String!
  name: String!
  phone: String!
  email: String!
}

input AdminCreateOneInput {
  create: AdminCreateInput
  connect: AdminWhereUniqueInput
}

type AdminEdge {
  node: Admin!
  cursor: String!
}

enum AdminOrderByInput {
  id_ASC
  id_DESC
  UnionID_ASC
  UnionID_DESC
  name_ASC
  name_DESC
  phone_ASC
  phone_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type AdminPreviousValues {
  id: ID!
  UnionID: String!
  name: String!
  phone: String!
  email: String!
}

type AdminSubscriptionPayload {
  mutation: MutationType!
  node: Admin
  updatedFields: [String!]
  previousValues: AdminPreviousValues
}

input AdminSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: AdminWhereInput
  AND: [AdminSubscriptionWhereInput!]
  OR: [AdminSubscriptionWhereInput!]
  NOT: [AdminSubscriptionWhereInput!]
}

input AdminUpdateDataInput {
  UnionID: String
  name: String
  phone: String
  email: String
}

input AdminUpdateInput {
  UnionID: String
  name: String
  phone: String
  email: String
}

input AdminUpdateManyMutationInput {
  UnionID: String
  name: String
  phone: String
  email: String
}

input AdminUpdateOneInput {
  create: AdminCreateInput
  update: AdminUpdateDataInput
  upsert: AdminUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: AdminWhereUniqueInput
}

input AdminUpsertNestedInput {
  update: AdminUpdateDataInput!
  create: AdminCreateInput!
}

input AdminWhereInput {
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
  UnionID: String
  UnionID_not: String
  UnionID_in: [String!]
  UnionID_not_in: [String!]
  UnionID_lt: String
  UnionID_lte: String
  UnionID_gt: String
  UnionID_gte: String
  UnionID_contains: String
  UnionID_not_contains: String
  UnionID_starts_with: String
  UnionID_not_starts_with: String
  UnionID_ends_with: String
  UnionID_not_ends_with: String
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
  AND: [AdminWhereInput!]
  OR: [AdminWhereInput!]
  NOT: [AdminWhereInput!]
}

input AdminWhereUniqueInput {
  id: ID
  UnionID: String
  name: String
  phone: String
  email: String
}

type AggregateAdmin {
  count: Int!
}

type AggregateAvalibelTime {
  count: Int!
}

type AggregateBasicTermInfo {
  count: Int!
}

type AggregateemerContact {
  count: Int!
}

type AggregateInvitation {
  count: Int!
}

type AggregateLongTerm {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateParent {
  count: Int!
}

type AggregateParentAuthInfo {
  count: Int!
}

type AggregateShortTerm {
  count: Int!
}

type AggregateStudent {
  count: Int!
}

type AggregateStudentAuthInfo {
  count: Int!
}

type AggregateStudentDetail {
  count: Int!
}

type AggregateSubject {
  count: Int!
}

type AggregateTryOrder {
  count: Int!
}

type AggregateUser {
  count: Int!
}

enum AuthStatus {
  UNCOMMITED
  AUTHCOMMITED
  AUTHED
  REJECTED
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

type BasicTermInfo {
  id: ID!
  Level: Level!
  subjects: [SubjectName!]!
  pay: Int
  childGender: Gender!
  teacherGender: SelectGender!
  teacherReuqire: String
  childStatus: String
  longTerm: LongTerm
  shortTerm: ShortTerm
}

type BasicTermInfoConnection {
  pageInfo: PageInfo!
  edges: [BasicTermInfoEdge]!
  aggregate: AggregateBasicTermInfo!
}

input BasicTermInfoCreateInput {
  Level: Level!
  subjects: BasicTermInfoCreatesubjectsInput
  pay: Int
  childGender: Gender
  teacherGender: SelectGender
  teacherReuqire: String
  childStatus: String
  longTerm: LongTermCreateOneInput
  shortTerm: ShortTermCreateOneInput
}

input BasicTermInfoCreateOneInput {
  create: BasicTermInfoCreateInput
  connect: BasicTermInfoWhereUniqueInput
}

input BasicTermInfoCreatesubjectsInput {
  set: [SubjectName!]
}

type BasicTermInfoEdge {
  node: BasicTermInfo!
  cursor: String!
}

enum BasicTermInfoOrderByInput {
  id_ASC
  id_DESC
  Level_ASC
  Level_DESC
  pay_ASC
  pay_DESC
  childGender_ASC
  childGender_DESC
  teacherGender_ASC
  teacherGender_DESC
  teacherReuqire_ASC
  teacherReuqire_DESC
  childStatus_ASC
  childStatus_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BasicTermInfoPreviousValues {
  id: ID!
  Level: Level!
  subjects: [SubjectName!]!
  pay: Int
  childGender: Gender!
  teacherGender: SelectGender!
  teacherReuqire: String
  childStatus: String
}

type BasicTermInfoSubscriptionPayload {
  mutation: MutationType!
  node: BasicTermInfo
  updatedFields: [String!]
  previousValues: BasicTermInfoPreviousValues
}

input BasicTermInfoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BasicTermInfoWhereInput
  AND: [BasicTermInfoSubscriptionWhereInput!]
  OR: [BasicTermInfoSubscriptionWhereInput!]
  NOT: [BasicTermInfoSubscriptionWhereInput!]
}

input BasicTermInfoUpdateDataInput {
  Level: Level
  subjects: BasicTermInfoUpdatesubjectsInput
  pay: Int
  childGender: Gender
  teacherGender: SelectGender
  teacherReuqire: String
  childStatus: String
  longTerm: LongTermUpdateOneInput
  shortTerm: ShortTermUpdateOneInput
}

input BasicTermInfoUpdateInput {
  Level: Level
  subjects: BasicTermInfoUpdatesubjectsInput
  pay: Int
  childGender: Gender
  teacherGender: SelectGender
  teacherReuqire: String
  childStatus: String
  longTerm: LongTermUpdateOneInput
  shortTerm: ShortTermUpdateOneInput
}

input BasicTermInfoUpdateManyMutationInput {
  Level: Level
  subjects: BasicTermInfoUpdatesubjectsInput
  pay: Int
  childGender: Gender
  teacherGender: SelectGender
  teacherReuqire: String
  childStatus: String
}

input BasicTermInfoUpdateOneRequiredInput {
  create: BasicTermInfoCreateInput
  update: BasicTermInfoUpdateDataInput
  upsert: BasicTermInfoUpsertNestedInput
  connect: BasicTermInfoWhereUniqueInput
}

input BasicTermInfoUpdatesubjectsInput {
  set: [SubjectName!]
}

input BasicTermInfoUpsertNestedInput {
  update: BasicTermInfoUpdateDataInput!
  create: BasicTermInfoCreateInput!
}

input BasicTermInfoWhereInput {
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
  Level: Level
  Level_not: Level
  Level_in: [Level!]
  Level_not_in: [Level!]
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
  teacherGender: SelectGender
  teacherGender_not: SelectGender
  teacherGender_in: [SelectGender!]
  teacherGender_not_in: [SelectGender!]
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
  longTerm: LongTermWhereInput
  shortTerm: ShortTermWhereInput
  AND: [BasicTermInfoWhereInput!]
  OR: [BasicTermInfoWhereInput!]
  NOT: [BasicTermInfoWhereInput!]
}

input BasicTermInfoWhereUniqueInput {
  id: ID
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

type emerContact {
  name: String!
  phone: String!
  relation: String!
}

type emerContactConnection {
  pageInfo: PageInfo!
  edges: [emerContactEdge]!
  aggregate: AggregateemerContact!
}

input emerContactCreateInput {
  name: String!
  phone: String!
  relation: String!
}

input emerContactCreateManyInput {
  create: [emerContactCreateInput!]
}

type emerContactEdge {
  node: emerContact!
  cursor: String!
}

enum emerContactOrderByInput {
  name_ASC
  name_DESC
  phone_ASC
  phone_DESC
  relation_ASC
  relation_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type emerContactPreviousValues {
  name: String!
  phone: String!
  relation: String!
}

input emerContactScalarWhereInput {
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
  relation: String
  relation_not: String
  relation_in: [String!]
  relation_not_in: [String!]
  relation_lt: String
  relation_lte: String
  relation_gt: String
  relation_gte: String
  relation_contains: String
  relation_not_contains: String
  relation_starts_with: String
  relation_not_starts_with: String
  relation_ends_with: String
  relation_not_ends_with: String
  AND: [emerContactScalarWhereInput!]
  OR: [emerContactScalarWhereInput!]
  NOT: [emerContactScalarWhereInput!]
}

type emerContactSubscriptionPayload {
  mutation: MutationType!
  node: emerContact
  updatedFields: [String!]
  previousValues: emerContactPreviousValues
}

input emerContactSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: emerContactWhereInput
  AND: [emerContactSubscriptionWhereInput!]
  OR: [emerContactSubscriptionWhereInput!]
  NOT: [emerContactSubscriptionWhereInput!]
}

input emerContactUpdateManyDataInput {
  name: String
  phone: String
  relation: String
}

input emerContactUpdateManyInput {
  create: [emerContactCreateInput!]
  deleteMany: [emerContactScalarWhereInput!]
  updateMany: [emerContactUpdateManyWithWhereNestedInput!]
}

input emerContactUpdateManyMutationInput {
  name: String
  phone: String
  relation: String
}

input emerContactUpdateManyWithWhereNestedInput {
  where: emerContactScalarWhereInput!
  data: emerContactUpdateManyDataInput!
}

input emerContactWhereInput {
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
  relation: String
  relation_not: String
  relation_in: [String!]
  relation_not_in: [String!]
  relation_lt: String
  relation_lte: String
  relation_gt: String
  relation_gte: String
  relation_contains: String
  relation_not_contains: String
  relation_starts_with: String
  relation_not_starts_with: String
  relation_ends_with: String
  relation_not_ends_with: String
  AND: [emerContactWhereInput!]
  OR: [emerContactWhereInput!]
  NOT: [emerContactWhereInput!]
}

enum Gender {
  MALE
  FEMALE
}

type Invitation {
  id: ID!
  student: Student!
  parent: Parent!
  invitor: Invitor!
  status: InvitationStatus!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type InvitationConnection {
  pageInfo: PageInfo!
  edges: [InvitationEdge]!
  aggregate: AggregateInvitation!
}

input InvitationCreateInput {
  student: StudentCreateOneWithoutInvitationsInput!
  parent: ParentCreateOneWithoutInvitationsInput!
  invitor: Invitor!
  status: InvitationStatus!
}

input InvitationCreateManyWithoutParentInput {
  create: [InvitationCreateWithoutParentInput!]
  connect: [InvitationWhereUniqueInput!]
}

input InvitationCreateManyWithoutStudentInput {
  create: [InvitationCreateWithoutStudentInput!]
  connect: [InvitationWhereUniqueInput!]
}

input InvitationCreateWithoutParentInput {
  student: StudentCreateOneWithoutInvitationsInput!
  invitor: Invitor!
  status: InvitationStatus!
}

input InvitationCreateWithoutStudentInput {
  parent: ParentCreateOneWithoutInvitationsInput!
  invitor: Invitor!
  status: InvitationStatus!
}

type InvitationEdge {
  node: Invitation!
  cursor: String!
}

enum InvitationOrderByInput {
  id_ASC
  id_DESC
  invitor_ASC
  invitor_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type InvitationPreviousValues {
  id: ID!
  invitor: Invitor!
  status: InvitationStatus!
  createdAt: DateTime!
  updatedAt: DateTime!
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
  invitor: Invitor
  invitor_not: Invitor
  invitor_in: [Invitor!]
  invitor_not_in: [Invitor!]
  status: InvitationStatus
  status_not: InvitationStatus
  status_in: [InvitationStatus!]
  status_not_in: [InvitationStatus!]
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
  AND: [InvitationScalarWhereInput!]
  OR: [InvitationScalarWhereInput!]
  NOT: [InvitationScalarWhereInput!]
}

enum InvitationStatus {
  REBACK
  WAITING
  ACCEPT
  REJECTED
  UNPAIED
  PAIED
  FINISHED
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
  student: StudentUpdateOneRequiredWithoutInvitationsInput
  parent: ParentUpdateOneRequiredWithoutInvitationsInput
  invitor: Invitor
  status: InvitationStatus
}

input InvitationUpdateManyDataInput {
  invitor: Invitor
  status: InvitationStatus
}

input InvitationUpdateManyMutationInput {
  invitor: Invitor
  status: InvitationStatus
}

input InvitationUpdateManyWithoutParentInput {
  create: [InvitationCreateWithoutParentInput!]
  delete: [InvitationWhereUniqueInput!]
  connect: [InvitationWhereUniqueInput!]
  disconnect: [InvitationWhereUniqueInput!]
  update: [InvitationUpdateWithWhereUniqueWithoutParentInput!]
  upsert: [InvitationUpsertWithWhereUniqueWithoutParentInput!]
  deleteMany: [InvitationScalarWhereInput!]
  updateMany: [InvitationUpdateManyWithWhereNestedInput!]
}

input InvitationUpdateManyWithoutStudentInput {
  create: [InvitationCreateWithoutStudentInput!]
  delete: [InvitationWhereUniqueInput!]
  connect: [InvitationWhereUniqueInput!]
  disconnect: [InvitationWhereUniqueInput!]
  update: [InvitationUpdateWithWhereUniqueWithoutStudentInput!]
  upsert: [InvitationUpsertWithWhereUniqueWithoutStudentInput!]
  deleteMany: [InvitationScalarWhereInput!]
  updateMany: [InvitationUpdateManyWithWhereNestedInput!]
}

input InvitationUpdateManyWithWhereNestedInput {
  where: InvitationScalarWhereInput!
  data: InvitationUpdateManyDataInput!
}

input InvitationUpdateWithoutParentDataInput {
  student: StudentUpdateOneRequiredWithoutInvitationsInput
  invitor: Invitor
  status: InvitationStatus
}

input InvitationUpdateWithoutStudentDataInput {
  parent: ParentUpdateOneRequiredWithoutInvitationsInput
  invitor: Invitor
  status: InvitationStatus
}

input InvitationUpdateWithWhereUniqueWithoutParentInput {
  where: InvitationWhereUniqueInput!
  data: InvitationUpdateWithoutParentDataInput!
}

input InvitationUpdateWithWhereUniqueWithoutStudentInput {
  where: InvitationWhereUniqueInput!
  data: InvitationUpdateWithoutStudentDataInput!
}

input InvitationUpsertWithWhereUniqueWithoutParentInput {
  where: InvitationWhereUniqueInput!
  update: InvitationUpdateWithoutParentDataInput!
  create: InvitationCreateWithoutParentInput!
}

input InvitationUpsertWithWhereUniqueWithoutStudentInput {
  where: InvitationWhereUniqueInput!
  update: InvitationUpdateWithoutStudentDataInput!
  create: InvitationCreateWithoutStudentInput!
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
  student: StudentWhereInput
  parent: ParentWhereInput
  invitor: Invitor
  invitor_not: Invitor
  invitor_in: [Invitor!]
  invitor_not_in: [Invitor!]
  status: InvitationStatus
  status_not: InvitationStatus
  status_in: [InvitationStatus!]
  status_not_in: [InvitationStatus!]
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
  AND: [InvitationWhereInput!]
  OR: [InvitationWhereInput!]
  NOT: [InvitationWhereInput!]
}

input InvitationWhereUniqueInput {
  id: ID
}

enum Invitor {
  STUDENT
  PARENT
}

enum Level {
  PRIMARY
  MIDDLE
  MIDDLEHIGH
  OTHER
}

scalar Long

type LongTerm {
  id: ID!
  lessonTime: Int!
  days: Int!
  timeList(where: AvalibelTimeWhereInput, orderBy: AvalibelTimeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AvalibelTime!]
}

type LongTermConnection {
  pageInfo: PageInfo!
  edges: [LongTermEdge]!
  aggregate: AggregateLongTerm!
}

input LongTermCreateInput {
  lessonTime: Int
  days: Int
  timeList: AvalibelTimeCreateManyInput
}

input LongTermCreateOneInput {
  create: LongTermCreateInput
  connect: LongTermWhereUniqueInput
}

type LongTermEdge {
  node: LongTerm!
  cursor: String!
}

enum LongTermOrderByInput {
  id_ASC
  id_DESC
  lessonTime_ASC
  lessonTime_DESC
  days_ASC
  days_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LongTermPreviousValues {
  id: ID!
  lessonTime: Int!
  days: Int!
}

type LongTermSubscriptionPayload {
  mutation: MutationType!
  node: LongTerm
  updatedFields: [String!]
  previousValues: LongTermPreviousValues
}

input LongTermSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LongTermWhereInput
  AND: [LongTermSubscriptionWhereInput!]
  OR: [LongTermSubscriptionWhereInput!]
  NOT: [LongTermSubscriptionWhereInput!]
}

input LongTermUpdateDataInput {
  lessonTime: Int
  days: Int
  timeList: AvalibelTimeUpdateManyInput
}

input LongTermUpdateInput {
  lessonTime: Int
  days: Int
  timeList: AvalibelTimeUpdateManyInput
}

input LongTermUpdateManyMutationInput {
  lessonTime: Int
  days: Int
}

input LongTermUpdateOneInput {
  create: LongTermCreateInput
  update: LongTermUpdateDataInput
  upsert: LongTermUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: LongTermWhereUniqueInput
}

input LongTermUpsertNestedInput {
  update: LongTermUpdateDataInput!
  create: LongTermCreateInput!
}

input LongTermWhereInput {
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
  timeList_every: AvalibelTimeWhereInput
  timeList_some: AvalibelTimeWhereInput
  timeList_none: AvalibelTimeWhereInput
  AND: [LongTermWhereInput!]
  OR: [LongTermWhereInput!]
  NOT: [LongTermWhereInput!]
}

input LongTermWhereUniqueInput {
  id: ID
}

type Mutation {
  createAdmin(data: AdminCreateInput!): Admin!
  updateAdmin(data: AdminUpdateInput!, where: AdminWhereUniqueInput!): Admin
  updateManyAdmins(data: AdminUpdateManyMutationInput!, where: AdminWhereInput): BatchPayload!
  upsertAdmin(where: AdminWhereUniqueInput!, create: AdminCreateInput!, update: AdminUpdateInput!): Admin!
  deleteAdmin(where: AdminWhereUniqueInput!): Admin
  deleteManyAdmins(where: AdminWhereInput): BatchPayload!
  createAvalibelTime(data: AvalibelTimeCreateInput!): AvalibelTime!
  updateManyAvalibelTimes(data: AvalibelTimeUpdateManyMutationInput!, where: AvalibelTimeWhereInput): BatchPayload!
  deleteManyAvalibelTimes(where: AvalibelTimeWhereInput): BatchPayload!
  createBasicTermInfo(data: BasicTermInfoCreateInput!): BasicTermInfo!
  updateBasicTermInfo(data: BasicTermInfoUpdateInput!, where: BasicTermInfoWhereUniqueInput!): BasicTermInfo
  updateManyBasicTermInfoes(data: BasicTermInfoUpdateManyMutationInput!, where: BasicTermInfoWhereInput): BatchPayload!
  upsertBasicTermInfo(where: BasicTermInfoWhereUniqueInput!, create: BasicTermInfoCreateInput!, update: BasicTermInfoUpdateInput!): BasicTermInfo!
  deleteBasicTermInfo(where: BasicTermInfoWhereUniqueInput!): BasicTermInfo
  deleteManyBasicTermInfoes(where: BasicTermInfoWhereInput): BatchPayload!
  createInvitation(data: InvitationCreateInput!): Invitation!
  updateInvitation(data: InvitationUpdateInput!, where: InvitationWhereUniqueInput!): Invitation
  updateManyInvitations(data: InvitationUpdateManyMutationInput!, where: InvitationWhereInput): BatchPayload!
  upsertInvitation(where: InvitationWhereUniqueInput!, create: InvitationCreateInput!, update: InvitationUpdateInput!): Invitation!
  deleteInvitation(where: InvitationWhereUniqueInput!): Invitation
  deleteManyInvitations(where: InvitationWhereInput): BatchPayload!
  createLongTerm(data: LongTermCreateInput!): LongTerm!
  updateLongTerm(data: LongTermUpdateInput!, where: LongTermWhereUniqueInput!): LongTerm
  updateManyLongTerms(data: LongTermUpdateManyMutationInput!, where: LongTermWhereInput): BatchPayload!
  upsertLongTerm(where: LongTermWhereUniqueInput!, create: LongTermCreateInput!, update: LongTermUpdateInput!): LongTerm!
  deleteLongTerm(where: LongTermWhereUniqueInput!): LongTerm
  deleteManyLongTerms(where: LongTermWhereInput): BatchPayload!
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
  createParentAuthInfo(data: ParentAuthInfoCreateInput!): ParentAuthInfo!
  updateParentAuthInfo(data: ParentAuthInfoUpdateInput!, where: ParentAuthInfoWhereUniqueInput!): ParentAuthInfo
  updateManyParentAuthInfoes(data: ParentAuthInfoUpdateManyMutationInput!, where: ParentAuthInfoWhereInput): BatchPayload!
  upsertParentAuthInfo(where: ParentAuthInfoWhereUniqueInput!, create: ParentAuthInfoCreateInput!, update: ParentAuthInfoUpdateInput!): ParentAuthInfo!
  deleteParentAuthInfo(where: ParentAuthInfoWhereUniqueInput!): ParentAuthInfo
  deleteManyParentAuthInfoes(where: ParentAuthInfoWhereInput): BatchPayload!
  createShortTerm(data: ShortTermCreateInput!): ShortTerm!
  updateShortTerm(data: ShortTermUpdateInput!, where: ShortTermWhereUniqueInput!): ShortTerm
  updateManyShortTerms(data: ShortTermUpdateManyMutationInput!, where: ShortTermWhereInput): BatchPayload!
  upsertShortTerm(where: ShortTermWhereUniqueInput!, create: ShortTermCreateInput!, update: ShortTermUpdateInput!): ShortTerm!
  deleteShortTerm(where: ShortTermWhereUniqueInput!): ShortTerm
  deleteManyShortTerms(where: ShortTermWhereInput): BatchPayload!
  createStudent(data: StudentCreateInput!): Student!
  updateStudent(data: StudentUpdateInput!, where: StudentWhereUniqueInput!): Student
  updateManyStudents(data: StudentUpdateManyMutationInput!, where: StudentWhereInput): BatchPayload!
  upsertStudent(where: StudentWhereUniqueInput!, create: StudentCreateInput!, update: StudentUpdateInput!): Student!
  deleteStudent(where: StudentWhereUniqueInput!): Student
  deleteManyStudents(where: StudentWhereInput): BatchPayload!
  createStudentAuthInfo(data: StudentAuthInfoCreateInput!): StudentAuthInfo!
  updateStudentAuthInfo(data: StudentAuthInfoUpdateInput!, where: StudentAuthInfoWhereUniqueInput!): StudentAuthInfo
  updateManyStudentAuthInfoes(data: StudentAuthInfoUpdateManyMutationInput!, where: StudentAuthInfoWhereInput): BatchPayload!
  upsertStudentAuthInfo(where: StudentAuthInfoWhereUniqueInput!, create: StudentAuthInfoCreateInput!, update: StudentAuthInfoUpdateInput!): StudentAuthInfo!
  deleteStudentAuthInfo(where: StudentAuthInfoWhereUniqueInput!): StudentAuthInfo
  deleteManyStudentAuthInfoes(where: StudentAuthInfoWhereInput): BatchPayload!
  createStudentDetail(data: StudentDetailCreateInput!): StudentDetail!
  updateManyStudentDetails(data: StudentDetailUpdateManyMutationInput!, where: StudentDetailWhereInput): BatchPayload!
  deleteManyStudentDetails(where: StudentDetailWhereInput): BatchPayload!
  createSubject(data: SubjectCreateInput!): Subject!
  updateManySubjects(data: SubjectUpdateManyMutationInput!, where: SubjectWhereInput): BatchPayload!
  deleteManySubjects(where: SubjectWhereInput): BatchPayload!
  createTryOrder(data: TryOrderCreateInput!): TryOrder!
  updateTryOrder(data: TryOrderUpdateInput!, where: TryOrderWhereUniqueInput!): TryOrder
  updateManyTryOrders(data: TryOrderUpdateManyMutationInput!, where: TryOrderWhereInput): BatchPayload!
  upsertTryOrder(where: TryOrderWhereUniqueInput!, create: TryOrderCreateInput!, update: TryOrderUpdateInput!): TryOrder!
  deleteTryOrder(where: TryOrderWhereUniqueInput!): TryOrder
  deleteManyTryOrders(where: TryOrderWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createemerContact(data: emerContactCreateInput!): emerContact!
  updateManyemerContacts(data: emerContactUpdateManyMutationInput!, where: emerContactWhereInput): BatchPayload!
  deleteManyemerContacts(where: emerContactWhereInput): BatchPayload!
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
  id: ID!
  stuednt: Student!
  parent: Parent!
  status: OrderStatus!
}

type OrderConnection {
  pageInfo: PageInfo!
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  stuednt: StudentCreateOneWithoutOrderInput!
  parent: ParentCreateOneWithoutOrderInput!
  status: OrderStatus!
}

input OrderCreateManyWithoutParentInput {
  create: [OrderCreateWithoutParentInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateManyWithoutStuedntInput {
  create: [OrderCreateWithoutStuedntInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateWithoutParentInput {
  stuednt: StudentCreateOneWithoutOrderInput!
  status: OrderStatus!
}

input OrderCreateWithoutStuedntInput {
  parent: ParentCreateOneWithoutOrderInput!
  status: OrderStatus!
}

type OrderEdge {
  node: Order!
  cursor: String!
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  status_ASC
  status_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OrderPreviousValues {
  id: ID!
  status: OrderStatus!
}

input OrderScalarWhereInput {
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
  stuednt: StudentUpdateOneRequiredWithoutOrderInput
  parent: ParentUpdateOneRequiredWithoutOrderInput
  status: OrderStatus
}

input OrderUpdateManyDataInput {
  status: OrderStatus
}

input OrderUpdateManyMutationInput {
  status: OrderStatus
}

input OrderUpdateManyWithoutParentInput {
  create: [OrderCreateWithoutParentInput!]
  delete: [OrderWhereUniqueInput!]
  connect: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutParentInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutParentInput!]
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

input OrderUpdateWithoutParentDataInput {
  stuednt: StudentUpdateOneRequiredWithoutOrderInput
  status: OrderStatus
}

input OrderUpdateWithoutStuedntDataInput {
  parent: ParentUpdateOneRequiredWithoutOrderInput
  status: OrderStatus
}

input OrderUpdateWithWhereUniqueWithoutParentInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutParentDataInput!
}

input OrderUpdateWithWhereUniqueWithoutStuedntInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutStuedntDataInput!
}

input OrderUpsertWithWhereUniqueWithoutParentInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutParentDataInput!
  create: OrderCreateWithoutParentInput!
}

input OrderUpsertWithWhereUniqueWithoutStuedntInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutStuedntDataInput!
  create: OrderCreateWithoutStuedntInput!
}

input OrderWhereInput {
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
  parent: ParentWhereInput
  status: OrderStatus
  status_not: OrderStatus
  status_in: [OrderStatus!]
  status_not_in: [OrderStatus!]
  AND: [OrderWhereInput!]
  OR: [OrderWhereInput!]
  NOT: [OrderWhereInput!]
}

input OrderWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Parent {
  id: ID!
  UnionID: String!
  phone: String!
  name: String!
  address: String!
  email: String!
  authStatus: AuthStatus!
  createdAt: DateTime!
  updatedAt: DateTime!
  starList(where: StudentWhereInput, orderBy: StudentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Student!]
  invitations(where: InvitationWhereInput, orderBy: InvitationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invitation!]
  order(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
  publishTerm: BasicTermInfo!
  publish: Boolean!
}

type ParentAuthInfo {
  id: ID!
  parent: Parent!
  UnionID: String!
  sourceUrl: [String!]!
  res: AuthStatus!
  info: String
  Auth: Admin
}

type ParentAuthInfoConnection {
  pageInfo: PageInfo!
  edges: [ParentAuthInfoEdge]!
  aggregate: AggregateParentAuthInfo!
}

input ParentAuthInfoCreateInput {
  parent: ParentCreateOneInput!
  UnionID: String!
  sourceUrl: ParentAuthInfoCreatesourceUrlInput
  res: AuthStatus!
  info: String
  Auth: AdminCreateOneInput
}

input ParentAuthInfoCreatesourceUrlInput {
  set: [String!]
}

type ParentAuthInfoEdge {
  node: ParentAuthInfo!
  cursor: String!
}

enum ParentAuthInfoOrderByInput {
  id_ASC
  id_DESC
  UnionID_ASC
  UnionID_DESC
  res_ASC
  res_DESC
  info_ASC
  info_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ParentAuthInfoPreviousValues {
  id: ID!
  UnionID: String!
  sourceUrl: [String!]!
  res: AuthStatus!
  info: String
}

type ParentAuthInfoSubscriptionPayload {
  mutation: MutationType!
  node: ParentAuthInfo
  updatedFields: [String!]
  previousValues: ParentAuthInfoPreviousValues
}

input ParentAuthInfoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ParentAuthInfoWhereInput
  AND: [ParentAuthInfoSubscriptionWhereInput!]
  OR: [ParentAuthInfoSubscriptionWhereInput!]
  NOT: [ParentAuthInfoSubscriptionWhereInput!]
}

input ParentAuthInfoUpdateInput {
  parent: ParentUpdateOneRequiredInput
  UnionID: String
  sourceUrl: ParentAuthInfoUpdatesourceUrlInput
  res: AuthStatus
  info: String
  Auth: AdminUpdateOneInput
}

input ParentAuthInfoUpdateManyMutationInput {
  UnionID: String
  sourceUrl: ParentAuthInfoUpdatesourceUrlInput
  res: AuthStatus
  info: String
}

input ParentAuthInfoUpdatesourceUrlInput {
  set: [String!]
}

input ParentAuthInfoWhereInput {
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
  parent: ParentWhereInput
  UnionID: String
  UnionID_not: String
  UnionID_in: [String!]
  UnionID_not_in: [String!]
  UnionID_lt: String
  UnionID_lte: String
  UnionID_gt: String
  UnionID_gte: String
  UnionID_contains: String
  UnionID_not_contains: String
  UnionID_starts_with: String
  UnionID_not_starts_with: String
  UnionID_ends_with: String
  UnionID_not_ends_with: String
  res: AuthStatus
  res_not: AuthStatus
  res_in: [AuthStatus!]
  res_not_in: [AuthStatus!]
  info: String
  info_not: String
  info_in: [String!]
  info_not_in: [String!]
  info_lt: String
  info_lte: String
  info_gt: String
  info_gte: String
  info_contains: String
  info_not_contains: String
  info_starts_with: String
  info_not_starts_with: String
  info_ends_with: String
  info_not_ends_with: String
  Auth: AdminWhereInput
  AND: [ParentAuthInfoWhereInput!]
  OR: [ParentAuthInfoWhereInput!]
  NOT: [ParentAuthInfoWhereInput!]
}

input ParentAuthInfoWhereUniqueInput {
  id: ID
  UnionID: String
}

type ParentConnection {
  pageInfo: PageInfo!
  edges: [ParentEdge]!
  aggregate: AggregateParent!
}

input ParentCreateInput {
  UnionID: String!
  phone: String!
  name: String!
  address: String!
  email: String!
  authStatus: AuthStatus!
  starList: StudentCreateManyWithoutStarListInput
  invitations: InvitationCreateManyWithoutParentInput
  order: OrderCreateManyWithoutParentInput
  publishTerm: BasicTermInfoCreateOneInput!
  publish: Boolean
}

input ParentCreateManyWithoutStarListInput {
  create: [ParentCreateWithoutStarListInput!]
  connect: [ParentWhereUniqueInput!]
}

input ParentCreateOneInput {
  create: ParentCreateInput
  connect: ParentWhereUniqueInput
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
  UnionID: String!
  phone: String!
  name: String!
  address: String!
  email: String!
  authStatus: AuthStatus!
  starList: StudentCreateManyWithoutStarListInput
  order: OrderCreateManyWithoutParentInput
  publishTerm: BasicTermInfoCreateOneInput!
  publish: Boolean
}

input ParentCreateWithoutOrderInput {
  UnionID: String!
  phone: String!
  name: String!
  address: String!
  email: String!
  authStatus: AuthStatus!
  starList: StudentCreateManyWithoutStarListInput
  invitations: InvitationCreateManyWithoutParentInput
  publishTerm: BasicTermInfoCreateOneInput!
  publish: Boolean
}

input ParentCreateWithoutStarListInput {
  UnionID: String!
  phone: String!
  name: String!
  address: String!
  email: String!
  authStatus: AuthStatus!
  invitations: InvitationCreateManyWithoutParentInput
  order: OrderCreateManyWithoutParentInput
  publishTerm: BasicTermInfoCreateOneInput!
  publish: Boolean
}

type ParentEdge {
  node: Parent!
  cursor: String!
}

enum ParentOrderByInput {
  id_ASC
  id_DESC
  UnionID_ASC
  UnionID_DESC
  phone_ASC
  phone_DESC
  name_ASC
  name_DESC
  address_ASC
  address_DESC
  email_ASC
  email_DESC
  authStatus_ASC
  authStatus_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  publish_ASC
  publish_DESC
}

type ParentPreviousValues {
  id: ID!
  UnionID: String!
  phone: String!
  name: String!
  address: String!
  email: String!
  authStatus: AuthStatus!
  createdAt: DateTime!
  updatedAt: DateTime!
  publish: Boolean!
}

input ParentScalarWhereInput {
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
  UnionID: String
  UnionID_not: String
  UnionID_in: [String!]
  UnionID_not_in: [String!]
  UnionID_lt: String
  UnionID_lte: String
  UnionID_gt: String
  UnionID_gte: String
  UnionID_contains: String
  UnionID_not_contains: String
  UnionID_starts_with: String
  UnionID_not_starts_with: String
  UnionID_ends_with: String
  UnionID_not_ends_with: String
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
  authStatus: AuthStatus
  authStatus_not: AuthStatus
  authStatus_in: [AuthStatus!]
  authStatus_not_in: [AuthStatus!]
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
  publish: Boolean
  publish_not: Boolean
  AND: [ParentScalarWhereInput!]
  OR: [ParentScalarWhereInput!]
  NOT: [ParentScalarWhereInput!]
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

input ParentUpdateDataInput {
  UnionID: String
  phone: String
  name: String
  address: String
  email: String
  authStatus: AuthStatus
  starList: StudentUpdateManyWithoutStarListInput
  invitations: InvitationUpdateManyWithoutParentInput
  order: OrderUpdateManyWithoutParentInput
  publishTerm: BasicTermInfoUpdateOneRequiredInput
  publish: Boolean
}

input ParentUpdateInput {
  UnionID: String
  phone: String
  name: String
  address: String
  email: String
  authStatus: AuthStatus
  starList: StudentUpdateManyWithoutStarListInput
  invitations: InvitationUpdateManyWithoutParentInput
  order: OrderUpdateManyWithoutParentInput
  publishTerm: BasicTermInfoUpdateOneRequiredInput
  publish: Boolean
}

input ParentUpdateManyDataInput {
  UnionID: String
  phone: String
  name: String
  address: String
  email: String
  authStatus: AuthStatus
  publish: Boolean
}

input ParentUpdateManyMutationInput {
  UnionID: String
  phone: String
  name: String
  address: String
  email: String
  authStatus: AuthStatus
  publish: Boolean
}

input ParentUpdateManyWithoutStarListInput {
  create: [ParentCreateWithoutStarListInput!]
  delete: [ParentWhereUniqueInput!]
  connect: [ParentWhereUniqueInput!]
  disconnect: [ParentWhereUniqueInput!]
  update: [ParentUpdateWithWhereUniqueWithoutStarListInput!]
  upsert: [ParentUpsertWithWhereUniqueWithoutStarListInput!]
  deleteMany: [ParentScalarWhereInput!]
  updateMany: [ParentUpdateManyWithWhereNestedInput!]
}

input ParentUpdateManyWithWhereNestedInput {
  where: ParentScalarWhereInput!
  data: ParentUpdateManyDataInput!
}

input ParentUpdateOneRequiredInput {
  create: ParentCreateInput
  update: ParentUpdateDataInput
  upsert: ParentUpsertNestedInput
  connect: ParentWhereUniqueInput
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
  UnionID: String
  phone: String
  name: String
  address: String
  email: String
  authStatus: AuthStatus
  starList: StudentUpdateManyWithoutStarListInput
  order: OrderUpdateManyWithoutParentInput
  publishTerm: BasicTermInfoUpdateOneRequiredInput
  publish: Boolean
}

input ParentUpdateWithoutOrderDataInput {
  UnionID: String
  phone: String
  name: String
  address: String
  email: String
  authStatus: AuthStatus
  starList: StudentUpdateManyWithoutStarListInput
  invitations: InvitationUpdateManyWithoutParentInput
  publishTerm: BasicTermInfoUpdateOneRequiredInput
  publish: Boolean
}

input ParentUpdateWithoutStarListDataInput {
  UnionID: String
  phone: String
  name: String
  address: String
  email: String
  authStatus: AuthStatus
  invitations: InvitationUpdateManyWithoutParentInput
  order: OrderUpdateManyWithoutParentInput
  publishTerm: BasicTermInfoUpdateOneRequiredInput
  publish: Boolean
}

input ParentUpdateWithWhereUniqueWithoutStarListInput {
  where: ParentWhereUniqueInput!
  data: ParentUpdateWithoutStarListDataInput!
}

input ParentUpsertNestedInput {
  update: ParentUpdateDataInput!
  create: ParentCreateInput!
}

input ParentUpsertWithoutInvitationsInput {
  update: ParentUpdateWithoutInvitationsDataInput!
  create: ParentCreateWithoutInvitationsInput!
}

input ParentUpsertWithoutOrderInput {
  update: ParentUpdateWithoutOrderDataInput!
  create: ParentCreateWithoutOrderInput!
}

input ParentUpsertWithWhereUniqueWithoutStarListInput {
  where: ParentWhereUniqueInput!
  update: ParentUpdateWithoutStarListDataInput!
  create: ParentCreateWithoutStarListInput!
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
  UnionID: String
  UnionID_not: String
  UnionID_in: [String!]
  UnionID_not_in: [String!]
  UnionID_lt: String
  UnionID_lte: String
  UnionID_gt: String
  UnionID_gte: String
  UnionID_contains: String
  UnionID_not_contains: String
  UnionID_starts_with: String
  UnionID_not_starts_with: String
  UnionID_ends_with: String
  UnionID_not_ends_with: String
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
  authStatus: AuthStatus
  authStatus_not: AuthStatus
  authStatus_in: [AuthStatus!]
  authStatus_not_in: [AuthStatus!]
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
  starList_every: StudentWhereInput
  starList_some: StudentWhereInput
  starList_none: StudentWhereInput
  invitations_every: InvitationWhereInput
  invitations_some: InvitationWhereInput
  invitations_none: InvitationWhereInput
  order_every: OrderWhereInput
  order_some: OrderWhereInput
  order_none: OrderWhereInput
  publishTerm: BasicTermInfoWhereInput
  publish: Boolean
  publish_not: Boolean
  AND: [ParentWhereInput!]
  OR: [ParentWhereInput!]
  NOT: [ParentWhereInput!]
}

input ParentWhereUniqueInput {
  id: ID
  UnionID: String
  phone: String
  name: String
  email: String
}

type Query {
  admin(where: AdminWhereUniqueInput!): Admin
  admins(where: AdminWhereInput, orderBy: AdminOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Admin]!
  adminsConnection(where: AdminWhereInput, orderBy: AdminOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AdminConnection!
  avalibelTimes(where: AvalibelTimeWhereInput, orderBy: AvalibelTimeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AvalibelTime]!
  avalibelTimesConnection(where: AvalibelTimeWhereInput, orderBy: AvalibelTimeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): AvalibelTimeConnection!
  basicTermInfo(where: BasicTermInfoWhereUniqueInput!): BasicTermInfo
  basicTermInfoes(where: BasicTermInfoWhereInput, orderBy: BasicTermInfoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BasicTermInfo]!
  basicTermInfoesConnection(where: BasicTermInfoWhereInput, orderBy: BasicTermInfoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BasicTermInfoConnection!
  invitation(where: InvitationWhereUniqueInput!): Invitation
  invitations(where: InvitationWhereInput, orderBy: InvitationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invitation]!
  invitationsConnection(where: InvitationWhereInput, orderBy: InvitationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): InvitationConnection!
  longTerm(where: LongTermWhereUniqueInput!): LongTerm
  longTerms(where: LongTermWhereInput, orderBy: LongTermOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [LongTerm]!
  longTermsConnection(where: LongTermWhereInput, orderBy: LongTermOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LongTermConnection!
  order(where: OrderWhereUniqueInput!): Order
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  parent(where: ParentWhereUniqueInput!): Parent
  parents(where: ParentWhereInput, orderBy: ParentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Parent]!
  parentsConnection(where: ParentWhereInput, orderBy: ParentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ParentConnection!
  parentAuthInfo(where: ParentAuthInfoWhereUniqueInput!): ParentAuthInfo
  parentAuthInfoes(where: ParentAuthInfoWhereInput, orderBy: ParentAuthInfoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ParentAuthInfo]!
  parentAuthInfoesConnection(where: ParentAuthInfoWhereInput, orderBy: ParentAuthInfoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ParentAuthInfoConnection!
  shortTerm(where: ShortTermWhereUniqueInput!): ShortTerm
  shortTerms(where: ShortTermWhereInput, orderBy: ShortTermOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ShortTerm]!
  shortTermsConnection(where: ShortTermWhereInput, orderBy: ShortTermOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ShortTermConnection!
  student(where: StudentWhereUniqueInput!): Student
  students(where: StudentWhereInput, orderBy: StudentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Student]!
  studentsConnection(where: StudentWhereInput, orderBy: StudentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StudentConnection!
  studentAuthInfo(where: StudentAuthInfoWhereUniqueInput!): StudentAuthInfo
  studentAuthInfoes(where: StudentAuthInfoWhereInput, orderBy: StudentAuthInfoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [StudentAuthInfo]!
  studentAuthInfoesConnection(where: StudentAuthInfoWhereInput, orderBy: StudentAuthInfoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StudentAuthInfoConnection!
  studentDetails(where: StudentDetailWhereInput, orderBy: StudentDetailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [StudentDetail]!
  studentDetailsConnection(where: StudentDetailWhereInput, orderBy: StudentDetailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StudentDetailConnection!
  subjects(where: SubjectWhereInput, orderBy: SubjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Subject]!
  subjectsConnection(where: SubjectWhereInput, orderBy: SubjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SubjectConnection!
  tryOrder(where: TryOrderWhereUniqueInput!): TryOrder
  tryOrders(where: TryOrderWhereInput, orderBy: TryOrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [TryOrder]!
  tryOrdersConnection(where: TryOrderWhereInput, orderBy: TryOrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TryOrderConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  emerContacts(where: emerContactWhereInput, orderBy: emerContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [emerContact]!
  emerContactsConnection(where: emerContactWhereInput, orderBy: emerContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): emerContactConnection!
  node(id: ID!): Node
}

enum SelectGender {
  MALE
  FEMALE
  BOTH
}

type ShortTerm {
  id: ID!
  lessonTime: Int!
  all: Int!
  timeList: [DateTime!]!
}

type ShortTermConnection {
  pageInfo: PageInfo!
  edges: [ShortTermEdge]!
  aggregate: AggregateShortTerm!
}

input ShortTermCreateInput {
  lessonTime: Int!
  all: Int!
  timeList: ShortTermCreatetimeListInput
}

input ShortTermCreateOneInput {
  create: ShortTermCreateInput
  connect: ShortTermWhereUniqueInput
}

input ShortTermCreatetimeListInput {
  set: [DateTime!]
}

type ShortTermEdge {
  node: ShortTerm!
  cursor: String!
}

enum ShortTermOrderByInput {
  id_ASC
  id_DESC
  lessonTime_ASC
  lessonTime_DESC
  all_ASC
  all_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ShortTermPreviousValues {
  id: ID!
  lessonTime: Int!
  all: Int!
  timeList: [DateTime!]!
}

type ShortTermSubscriptionPayload {
  mutation: MutationType!
  node: ShortTerm
  updatedFields: [String!]
  previousValues: ShortTermPreviousValues
}

input ShortTermSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ShortTermWhereInput
  AND: [ShortTermSubscriptionWhereInput!]
  OR: [ShortTermSubscriptionWhereInput!]
  NOT: [ShortTermSubscriptionWhereInput!]
}

input ShortTermUpdateDataInput {
  lessonTime: Int
  all: Int
  timeList: ShortTermUpdatetimeListInput
}

input ShortTermUpdateInput {
  lessonTime: Int
  all: Int
  timeList: ShortTermUpdatetimeListInput
}

input ShortTermUpdateManyMutationInput {
  lessonTime: Int
  all: Int
  timeList: ShortTermUpdatetimeListInput
}

input ShortTermUpdateOneInput {
  create: ShortTermCreateInput
  update: ShortTermUpdateDataInput
  upsert: ShortTermUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ShortTermWhereUniqueInput
}

input ShortTermUpdatetimeListInput {
  set: [DateTime!]
}

input ShortTermUpsertNestedInput {
  update: ShortTermUpdateDataInput!
  create: ShortTermCreateInput!
}

input ShortTermWhereInput {
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
  lessonTime: Int
  lessonTime_not: Int
  lessonTime_in: [Int!]
  lessonTime_not_in: [Int!]
  lessonTime_lt: Int
  lessonTime_lte: Int
  lessonTime_gt: Int
  lessonTime_gte: Int
  all: Int
  all_not: Int
  all_in: [Int!]
  all_not_in: [Int!]
  all_lt: Int
  all_lte: Int
  all_gt: Int
  all_gte: Int
  AND: [ShortTermWhereInput!]
  OR: [ShortTermWhereInput!]
  NOT: [ShortTermWhereInput!]
}

input ShortTermWhereUniqueInput {
  id: ID
}

type Student {
  id: ID!
  UnionID: String!
  openid: String!
  phone: String!
  name: String!
  university: University!
  grades: String!
  email: String!
  Gender: Gender
  createdAt: DateTime!
  updatedAt: DateTime!
  expectPay: Int
  authStatus: AuthStatus!
  subjects(where: SubjectWhereInput, orderBy: SubjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Subject!]
  starList(where: ParentWhereInput, orderBy: ParentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Parent!]
  avalible(where: AvalibelTimeWhereInput, orderBy: AvalibelTimeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AvalibelTime!]
  studentDetail: StudentDetail
  invitations(where: InvitationWhereInput, orderBy: InvitationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invitation!]
  order(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
  publish: Boolean!
}

type StudentAuthInfo {
  id: ID!
  UnionID: String!
  student: Student!
  sourceUrl: [String!]!
  res: AuthStatus!
  info: String
  Auth: Admin
}

type StudentAuthInfoConnection {
  pageInfo: PageInfo!
  edges: [StudentAuthInfoEdge]!
  aggregate: AggregateStudentAuthInfo!
}

input StudentAuthInfoCreateInput {
  UnionID: String!
  student: StudentCreateOneInput!
  sourceUrl: StudentAuthInfoCreatesourceUrlInput
  res: AuthStatus!
  info: String
  Auth: AdminCreateOneInput
}

input StudentAuthInfoCreatesourceUrlInput {
  set: [String!]
}

type StudentAuthInfoEdge {
  node: StudentAuthInfo!
  cursor: String!
}

enum StudentAuthInfoOrderByInput {
  id_ASC
  id_DESC
  UnionID_ASC
  UnionID_DESC
  res_ASC
  res_DESC
  info_ASC
  info_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StudentAuthInfoPreviousValues {
  id: ID!
  UnionID: String!
  sourceUrl: [String!]!
  res: AuthStatus!
  info: String
}

type StudentAuthInfoSubscriptionPayload {
  mutation: MutationType!
  node: StudentAuthInfo
  updatedFields: [String!]
  previousValues: StudentAuthInfoPreviousValues
}

input StudentAuthInfoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StudentAuthInfoWhereInput
  AND: [StudentAuthInfoSubscriptionWhereInput!]
  OR: [StudentAuthInfoSubscriptionWhereInput!]
  NOT: [StudentAuthInfoSubscriptionWhereInput!]
}

input StudentAuthInfoUpdateInput {
  UnionID: String
  student: StudentUpdateOneRequiredInput
  sourceUrl: StudentAuthInfoUpdatesourceUrlInput
  res: AuthStatus
  info: String
  Auth: AdminUpdateOneInput
}

input StudentAuthInfoUpdateManyMutationInput {
  UnionID: String
  sourceUrl: StudentAuthInfoUpdatesourceUrlInput
  res: AuthStatus
  info: String
}

input StudentAuthInfoUpdatesourceUrlInput {
  set: [String!]
}

input StudentAuthInfoWhereInput {
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
  UnionID: String
  UnionID_not: String
  UnionID_in: [String!]
  UnionID_not_in: [String!]
  UnionID_lt: String
  UnionID_lte: String
  UnionID_gt: String
  UnionID_gte: String
  UnionID_contains: String
  UnionID_not_contains: String
  UnionID_starts_with: String
  UnionID_not_starts_with: String
  UnionID_ends_with: String
  UnionID_not_ends_with: String
  student: StudentWhereInput
  res: AuthStatus
  res_not: AuthStatus
  res_in: [AuthStatus!]
  res_not_in: [AuthStatus!]
  info: String
  info_not: String
  info_in: [String!]
  info_not_in: [String!]
  info_lt: String
  info_lte: String
  info_gt: String
  info_gte: String
  info_contains: String
  info_not_contains: String
  info_starts_with: String
  info_not_starts_with: String
  info_ends_with: String
  info_not_ends_with: String
  Auth: AdminWhereInput
  AND: [StudentAuthInfoWhereInput!]
  OR: [StudentAuthInfoWhereInput!]
  NOT: [StudentAuthInfoWhereInput!]
}

input StudentAuthInfoWhereUniqueInput {
  id: ID
  UnionID: String
}

type StudentConnection {
  pageInfo: PageInfo!
  edges: [StudentEdge]!
  aggregate: AggregateStudent!
}

input StudentCreateInput {
  UnionID: String!
  openid: String!
  phone: String!
  name: String!
  university: University!
  grades: String!
  email: String!
  Gender: Gender
  expectPay: Int
  authStatus: AuthStatus!
  subjects: SubjectCreateManyInput
  starList: ParentCreateManyWithoutStarListInput
  avalible: AvalibelTimeCreateManyInput
  studentDetail: StudentDetailCreateOneInput
  invitations: InvitationCreateManyWithoutStudentInput
  order: OrderCreateManyWithoutStuedntInput
  publish: Boolean
}

input StudentCreateManyWithoutStarListInput {
  create: [StudentCreateWithoutStarListInput!]
  connect: [StudentWhereUniqueInput!]
}

input StudentCreateOneInput {
  create: StudentCreateInput
  connect: StudentWhereUniqueInput
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
  UnionID: String!
  openid: String!
  phone: String!
  name: String!
  university: University!
  grades: String!
  email: String!
  Gender: Gender
  expectPay: Int
  authStatus: AuthStatus!
  subjects: SubjectCreateManyInput
  starList: ParentCreateManyWithoutStarListInput
  avalible: AvalibelTimeCreateManyInput
  studentDetail: StudentDetailCreateOneInput
  order: OrderCreateManyWithoutStuedntInput
  publish: Boolean
}

input StudentCreateWithoutOrderInput {
  UnionID: String!
  openid: String!
  phone: String!
  name: String!
  university: University!
  grades: String!
  email: String!
  Gender: Gender
  expectPay: Int
  authStatus: AuthStatus!
  subjects: SubjectCreateManyInput
  starList: ParentCreateManyWithoutStarListInput
  avalible: AvalibelTimeCreateManyInput
  studentDetail: StudentDetailCreateOneInput
  invitations: InvitationCreateManyWithoutStudentInput
  publish: Boolean
}

input StudentCreateWithoutStarListInput {
  UnionID: String!
  openid: String!
  phone: String!
  name: String!
  university: University!
  grades: String!
  email: String!
  Gender: Gender
  expectPay: Int
  authStatus: AuthStatus!
  subjects: SubjectCreateManyInput
  avalible: AvalibelTimeCreateManyInput
  studentDetail: StudentDetailCreateOneInput
  invitations: InvitationCreateManyWithoutStudentInput
  order: OrderCreateManyWithoutStuedntInput
  publish: Boolean
}

type StudentDetail {
  selfIntro: String!
  grades: String!
  exprience: String!
  picture: [String!]!
}

type StudentDetailConnection {
  pageInfo: PageInfo!
  edges: [StudentDetailEdge]!
  aggregate: AggregateStudentDetail!
}

input StudentDetailCreateInput {
  selfIntro: String!
  grades: String!
  exprience: String!
  picture: StudentDetailCreatepictureInput
}

input StudentDetailCreateOneInput {
  create: StudentDetailCreateInput
}

input StudentDetailCreatepictureInput {
  set: [String!]
}

type StudentDetailEdge {
  node: StudentDetail!
  cursor: String!
}

enum StudentDetailOrderByInput {
  selfIntro_ASC
  selfIntro_DESC
  grades_ASC
  grades_DESC
  exprience_ASC
  exprience_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type StudentDetailPreviousValues {
  selfIntro: String!
  grades: String!
  exprience: String!
  picture: [String!]!
}

type StudentDetailSubscriptionPayload {
  mutation: MutationType!
  node: StudentDetail
  updatedFields: [String!]
  previousValues: StudentDetailPreviousValues
}

input StudentDetailSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StudentDetailWhereInput
  AND: [StudentDetailSubscriptionWhereInput!]
  OR: [StudentDetailSubscriptionWhereInput!]
  NOT: [StudentDetailSubscriptionWhereInput!]
}

input StudentDetailUpdateDataInput {
  selfIntro: String
  grades: String
  exprience: String
  picture: StudentDetailUpdatepictureInput
}

input StudentDetailUpdateManyMutationInput {
  selfIntro: String
  grades: String
  exprience: String
  picture: StudentDetailUpdatepictureInput
}

input StudentDetailUpdateOneInput {
  create: StudentDetailCreateInput
  update: StudentDetailUpdateDataInput
  upsert: StudentDetailUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
}

input StudentDetailUpdatepictureInput {
  set: [String!]
}

input StudentDetailUpsertNestedInput {
  update: StudentDetailUpdateDataInput!
  create: StudentDetailCreateInput!
}

input StudentDetailWhereInput {
  selfIntro: String
  selfIntro_not: String
  selfIntro_in: [String!]
  selfIntro_not_in: [String!]
  selfIntro_lt: String
  selfIntro_lte: String
  selfIntro_gt: String
  selfIntro_gte: String
  selfIntro_contains: String
  selfIntro_not_contains: String
  selfIntro_starts_with: String
  selfIntro_not_starts_with: String
  selfIntro_ends_with: String
  selfIntro_not_ends_with: String
  grades: String
  grades_not: String
  grades_in: [String!]
  grades_not_in: [String!]
  grades_lt: String
  grades_lte: String
  grades_gt: String
  grades_gte: String
  grades_contains: String
  grades_not_contains: String
  grades_starts_with: String
  grades_not_starts_with: String
  grades_ends_with: String
  grades_not_ends_with: String
  exprience: String
  exprience_not: String
  exprience_in: [String!]
  exprience_not_in: [String!]
  exprience_lt: String
  exprience_lte: String
  exprience_gt: String
  exprience_gte: String
  exprience_contains: String
  exprience_not_contains: String
  exprience_starts_with: String
  exprience_not_starts_with: String
  exprience_ends_with: String
  exprience_not_ends_with: String
  AND: [StudentDetailWhereInput!]
  OR: [StudentDetailWhereInput!]
  NOT: [StudentDetailWhereInput!]
}

type StudentEdge {
  node: Student!
  cursor: String!
}

enum StudentOrderByInput {
  id_ASC
  id_DESC
  UnionID_ASC
  UnionID_DESC
  openid_ASC
  openid_DESC
  phone_ASC
  phone_DESC
  name_ASC
  name_DESC
  university_ASC
  university_DESC
  grades_ASC
  grades_DESC
  email_ASC
  email_DESC
  Gender_ASC
  Gender_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  expectPay_ASC
  expectPay_DESC
  authStatus_ASC
  authStatus_DESC
  publish_ASC
  publish_DESC
}

type StudentPreviousValues {
  id: ID!
  UnionID: String!
  openid: String!
  phone: String!
  name: String!
  university: University!
  grades: String!
  email: String!
  Gender: Gender
  createdAt: DateTime!
  updatedAt: DateTime!
  expectPay: Int
  authStatus: AuthStatus!
  publish: Boolean!
}

input StudentScalarWhereInput {
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
  UnionID: String
  UnionID_not: String
  UnionID_in: [String!]
  UnionID_not_in: [String!]
  UnionID_lt: String
  UnionID_lte: String
  UnionID_gt: String
  UnionID_gte: String
  UnionID_contains: String
  UnionID_not_contains: String
  UnionID_starts_with: String
  UnionID_not_starts_with: String
  UnionID_ends_with: String
  UnionID_not_ends_with: String
  openid: String
  openid_not: String
  openid_in: [String!]
  openid_not_in: [String!]
  openid_lt: String
  openid_lte: String
  openid_gt: String
  openid_gte: String
  openid_contains: String
  openid_not_contains: String
  openid_starts_with: String
  openid_not_starts_with: String
  openid_ends_with: String
  openid_not_ends_with: String
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
  grades: String
  grades_not: String
  grades_in: [String!]
  grades_not_in: [String!]
  grades_lt: String
  grades_lte: String
  grades_gt: String
  grades_gte: String
  grades_contains: String
  grades_not_contains: String
  grades_starts_with: String
  grades_not_starts_with: String
  grades_ends_with: String
  grades_not_ends_with: String
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
  expectPay: Int
  expectPay_not: Int
  expectPay_in: [Int!]
  expectPay_not_in: [Int!]
  expectPay_lt: Int
  expectPay_lte: Int
  expectPay_gt: Int
  expectPay_gte: Int
  authStatus: AuthStatus
  authStatus_not: AuthStatus
  authStatus_in: [AuthStatus!]
  authStatus_not_in: [AuthStatus!]
  publish: Boolean
  publish_not: Boolean
  AND: [StudentScalarWhereInput!]
  OR: [StudentScalarWhereInput!]
  NOT: [StudentScalarWhereInput!]
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

input StudentUpdateDataInput {
  UnionID: String
  openid: String
  phone: String
  name: String
  university: University
  grades: String
  email: String
  Gender: Gender
  expectPay: Int
  authStatus: AuthStatus
  subjects: SubjectUpdateManyInput
  starList: ParentUpdateManyWithoutStarListInput
  avalible: AvalibelTimeUpdateManyInput
  studentDetail: StudentDetailUpdateOneInput
  invitations: InvitationUpdateManyWithoutStudentInput
  order: OrderUpdateManyWithoutStuedntInput
  publish: Boolean
}

input StudentUpdateInput {
  UnionID: String
  openid: String
  phone: String
  name: String
  university: University
  grades: String
  email: String
  Gender: Gender
  expectPay: Int
  authStatus: AuthStatus
  subjects: SubjectUpdateManyInput
  starList: ParentUpdateManyWithoutStarListInput
  avalible: AvalibelTimeUpdateManyInput
  studentDetail: StudentDetailUpdateOneInput
  invitations: InvitationUpdateManyWithoutStudentInput
  order: OrderUpdateManyWithoutStuedntInput
  publish: Boolean
}

input StudentUpdateManyDataInput {
  UnionID: String
  openid: String
  phone: String
  name: String
  university: University
  grades: String
  email: String
  Gender: Gender
  expectPay: Int
  authStatus: AuthStatus
  publish: Boolean
}

input StudentUpdateManyMutationInput {
  UnionID: String
  openid: String
  phone: String
  name: String
  university: University
  grades: String
  email: String
  Gender: Gender
  expectPay: Int
  authStatus: AuthStatus
  publish: Boolean
}

input StudentUpdateManyWithoutStarListInput {
  create: [StudentCreateWithoutStarListInput!]
  delete: [StudentWhereUniqueInput!]
  connect: [StudentWhereUniqueInput!]
  disconnect: [StudentWhereUniqueInput!]
  update: [StudentUpdateWithWhereUniqueWithoutStarListInput!]
  upsert: [StudentUpsertWithWhereUniqueWithoutStarListInput!]
  deleteMany: [StudentScalarWhereInput!]
  updateMany: [StudentUpdateManyWithWhereNestedInput!]
}

input StudentUpdateManyWithWhereNestedInput {
  where: StudentScalarWhereInput!
  data: StudentUpdateManyDataInput!
}

input StudentUpdateOneRequiredInput {
  create: StudentCreateInput
  update: StudentUpdateDataInput
  upsert: StudentUpsertNestedInput
  connect: StudentWhereUniqueInput
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
  UnionID: String
  openid: String
  phone: String
  name: String
  university: University
  grades: String
  email: String
  Gender: Gender
  expectPay: Int
  authStatus: AuthStatus
  subjects: SubjectUpdateManyInput
  starList: ParentUpdateManyWithoutStarListInput
  avalible: AvalibelTimeUpdateManyInput
  studentDetail: StudentDetailUpdateOneInput
  order: OrderUpdateManyWithoutStuedntInput
  publish: Boolean
}

input StudentUpdateWithoutOrderDataInput {
  UnionID: String
  openid: String
  phone: String
  name: String
  university: University
  grades: String
  email: String
  Gender: Gender
  expectPay: Int
  authStatus: AuthStatus
  subjects: SubjectUpdateManyInput
  starList: ParentUpdateManyWithoutStarListInput
  avalible: AvalibelTimeUpdateManyInput
  studentDetail: StudentDetailUpdateOneInput
  invitations: InvitationUpdateManyWithoutStudentInput
  publish: Boolean
}

input StudentUpdateWithoutStarListDataInput {
  UnionID: String
  openid: String
  phone: String
  name: String
  university: University
  grades: String
  email: String
  Gender: Gender
  expectPay: Int
  authStatus: AuthStatus
  subjects: SubjectUpdateManyInput
  avalible: AvalibelTimeUpdateManyInput
  studentDetail: StudentDetailUpdateOneInput
  invitations: InvitationUpdateManyWithoutStudentInput
  order: OrderUpdateManyWithoutStuedntInput
  publish: Boolean
}

input StudentUpdateWithWhereUniqueWithoutStarListInput {
  where: StudentWhereUniqueInput!
  data: StudentUpdateWithoutStarListDataInput!
}

input StudentUpsertNestedInput {
  update: StudentUpdateDataInput!
  create: StudentCreateInput!
}

input StudentUpsertWithoutInvitationsInput {
  update: StudentUpdateWithoutInvitationsDataInput!
  create: StudentCreateWithoutInvitationsInput!
}

input StudentUpsertWithoutOrderInput {
  update: StudentUpdateWithoutOrderDataInput!
  create: StudentCreateWithoutOrderInput!
}

input StudentUpsertWithWhereUniqueWithoutStarListInput {
  where: StudentWhereUniqueInput!
  update: StudentUpdateWithoutStarListDataInput!
  create: StudentCreateWithoutStarListInput!
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
  UnionID: String
  UnionID_not: String
  UnionID_in: [String!]
  UnionID_not_in: [String!]
  UnionID_lt: String
  UnionID_lte: String
  UnionID_gt: String
  UnionID_gte: String
  UnionID_contains: String
  UnionID_not_contains: String
  UnionID_starts_with: String
  UnionID_not_starts_with: String
  UnionID_ends_with: String
  UnionID_not_ends_with: String
  openid: String
  openid_not: String
  openid_in: [String!]
  openid_not_in: [String!]
  openid_lt: String
  openid_lte: String
  openid_gt: String
  openid_gte: String
  openid_contains: String
  openid_not_contains: String
  openid_starts_with: String
  openid_not_starts_with: String
  openid_ends_with: String
  openid_not_ends_with: String
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
  grades: String
  grades_not: String
  grades_in: [String!]
  grades_not_in: [String!]
  grades_lt: String
  grades_lte: String
  grades_gt: String
  grades_gte: String
  grades_contains: String
  grades_not_contains: String
  grades_starts_with: String
  grades_not_starts_with: String
  grades_ends_with: String
  grades_not_ends_with: String
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
  expectPay: Int
  expectPay_not: Int
  expectPay_in: [Int!]
  expectPay_not_in: [Int!]
  expectPay_lt: Int
  expectPay_lte: Int
  expectPay_gt: Int
  expectPay_gte: Int
  authStatus: AuthStatus
  authStatus_not: AuthStatus
  authStatus_in: [AuthStatus!]
  authStatus_not_in: [AuthStatus!]
  subjects_every: SubjectWhereInput
  subjects_some: SubjectWhereInput
  subjects_none: SubjectWhereInput
  starList_every: ParentWhereInput
  starList_some: ParentWhereInput
  starList_none: ParentWhereInput
  avalible_every: AvalibelTimeWhereInput
  avalible_some: AvalibelTimeWhereInput
  avalible_none: AvalibelTimeWhereInput
  studentDetail: StudentDetailWhereInput
  invitations_every: InvitationWhereInput
  invitations_some: InvitationWhereInput
  invitations_none: InvitationWhereInput
  order_every: OrderWhereInput
  order_some: OrderWhereInput
  order_none: OrderWhereInput
  publish: Boolean
  publish_not: Boolean
  AND: [StudentWhereInput!]
  OR: [StudentWhereInput!]
  NOT: [StudentWhereInput!]
}

input StudentWhereUniqueInput {
  id: ID
  UnionID: String
  openid: String
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
  PHYSICS
  CHEMSTRY
  BIOLOGY
  HISTORY
  GEOGRAPHY
  OTHER
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
  admin(where: AdminSubscriptionWhereInput): AdminSubscriptionPayload
  avalibelTime(where: AvalibelTimeSubscriptionWhereInput): AvalibelTimeSubscriptionPayload
  basicTermInfo(where: BasicTermInfoSubscriptionWhereInput): BasicTermInfoSubscriptionPayload
  invitation(where: InvitationSubscriptionWhereInput): InvitationSubscriptionPayload
  longTerm(where: LongTermSubscriptionWhereInput): LongTermSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  parent(where: ParentSubscriptionWhereInput): ParentSubscriptionPayload
  parentAuthInfo(where: ParentAuthInfoSubscriptionWhereInput): ParentAuthInfoSubscriptionPayload
  shortTerm(where: ShortTermSubscriptionWhereInput): ShortTermSubscriptionPayload
  student(where: StudentSubscriptionWhereInput): StudentSubscriptionPayload
  studentAuthInfo(where: StudentAuthInfoSubscriptionWhereInput): StudentAuthInfoSubscriptionPayload
  studentDetail(where: StudentDetailSubscriptionWhereInput): StudentDetailSubscriptionPayload
  subject(where: SubjectSubscriptionWhereInput): SubjectSubscriptionPayload
  tryOrder(where: TryOrderSubscriptionWhereInput): TryOrderSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  emerContact(where: emerContactSubscriptionWhereInput): emerContactSubscriptionPayload
}

type TryOrder {
  id: ID!
  student: Student!
  parent: Parent!
  address: String!
  startTime: DateTime
  endTime: DateTime
  phone: String
  otherInfo: String
  emerContact(where: emerContactWhereInput, orderBy: emerContactOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [emerContact!]
  status: tryOrderStatus!
  rejectInfo: String
}

type TryOrderConnection {
  pageInfo: PageInfo!
  edges: [TryOrderEdge]!
  aggregate: AggregateTryOrder!
}

input TryOrderCreateInput {
  student: StudentCreateOneInput!
  parent: ParentCreateOneInput!
  address: String!
  startTime: DateTime
  endTime: DateTime
  phone: String
  otherInfo: String
  emerContact: emerContactCreateManyInput
  status: tryOrderStatus!
  rejectInfo: String
}

type TryOrderEdge {
  node: TryOrder!
  cursor: String!
}

enum TryOrderOrderByInput {
  id_ASC
  id_DESC
  address_ASC
  address_DESC
  startTime_ASC
  startTime_DESC
  endTime_ASC
  endTime_DESC
  phone_ASC
  phone_DESC
  otherInfo_ASC
  otherInfo_DESC
  status_ASC
  status_DESC
  rejectInfo_ASC
  rejectInfo_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TryOrderPreviousValues {
  id: ID!
  address: String!
  startTime: DateTime
  endTime: DateTime
  phone: String
  otherInfo: String
  status: tryOrderStatus!
  rejectInfo: String
}

enum tryOrderStatus {
  INIT
  INFOCOMPLETE
  PACK
  SACK
  CANCLED
  FINISHED
}

type TryOrderSubscriptionPayload {
  mutation: MutationType!
  node: TryOrder
  updatedFields: [String!]
  previousValues: TryOrderPreviousValues
}

input TryOrderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TryOrderWhereInput
  AND: [TryOrderSubscriptionWhereInput!]
  OR: [TryOrderSubscriptionWhereInput!]
  NOT: [TryOrderSubscriptionWhereInput!]
}

input TryOrderUpdateInput {
  student: StudentUpdateOneRequiredInput
  parent: ParentUpdateOneRequiredInput
  address: String
  startTime: DateTime
  endTime: DateTime
  phone: String
  otherInfo: String
  emerContact: emerContactUpdateManyInput
  status: tryOrderStatus
  rejectInfo: String
}

input TryOrderUpdateManyMutationInput {
  address: String
  startTime: DateTime
  endTime: DateTime
  phone: String
  otherInfo: String
  status: tryOrderStatus
  rejectInfo: String
}

input TryOrderWhereInput {
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
  student: StudentWhereInput
  parent: ParentWhereInput
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
  startTime: DateTime
  startTime_not: DateTime
  startTime_in: [DateTime!]
  startTime_not_in: [DateTime!]
  startTime_lt: DateTime
  startTime_lte: DateTime
  startTime_gt: DateTime
  startTime_gte: DateTime
  endTime: DateTime
  endTime_not: DateTime
  endTime_in: [DateTime!]
  endTime_not_in: [DateTime!]
  endTime_lt: DateTime
  endTime_lte: DateTime
  endTime_gt: DateTime
  endTime_gte: DateTime
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
  otherInfo: String
  otherInfo_not: String
  otherInfo_in: [String!]
  otherInfo_not_in: [String!]
  otherInfo_lt: String
  otherInfo_lte: String
  otherInfo_gt: String
  otherInfo_gte: String
  otherInfo_contains: String
  otherInfo_not_contains: String
  otherInfo_starts_with: String
  otherInfo_not_starts_with: String
  otherInfo_ends_with: String
  otherInfo_not_ends_with: String
  emerContact_every: emerContactWhereInput
  emerContact_some: emerContactWhereInput
  emerContact_none: emerContactWhereInput
  status: tryOrderStatus
  status_not: tryOrderStatus
  status_in: [tryOrderStatus!]
  status_not_in: [tryOrderStatus!]
  rejectInfo: String
  rejectInfo_not: String
  rejectInfo_in: [String!]
  rejectInfo_not_in: [String!]
  rejectInfo_lt: String
  rejectInfo_lte: String
  rejectInfo_gt: String
  rejectInfo_gte: String
  rejectInfo_contains: String
  rejectInfo_not_contains: String
  rejectInfo_starts_with: String
  rejectInfo_not_starts_with: String
  rejectInfo_ends_with: String
  rejectInfo_not_ends_with: String
  AND: [TryOrderWhereInput!]
  OR: [TryOrderWhereInput!]
  NOT: [TryOrderWhereInput!]
}

input TryOrderWhereUniqueInput {
  id: ID
}

enum University {
  HUST
  WHU
}

type User {
  UnionID: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  UnionID: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  UnionID_ASC
  UnionID_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  UnionID: String!
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
  UnionID: String
}

input UserUpdateManyMutationInput {
  UnionID: String
}

input UserWhereInput {
  UnionID: String
  UnionID_not: String
  UnionID_in: [String!]
  UnionID_not_in: [String!]
  UnionID_lt: String
  UnionID_lte: String
  UnionID_gt: String
  UnionID_gte: String
  UnionID_contains: String
  UnionID_not_contains: String
  UnionID_starts_with: String
  UnionID_not_starts_with: String
  UnionID_ends_with: String
  UnionID_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  UnionID: String
}
`
      }
    