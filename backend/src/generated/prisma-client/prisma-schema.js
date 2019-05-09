module.exports = {
        typeDefs: /* GraphQL */ `type AggregateAvalibelTime {
  count: Int!
}

type AggregateBasicTermInfo {
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

type AggregateShortTerm {
  count: Int!
}

type AggregateStudent {
  count: Int!
}

type AggregateStudentDetail {
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

type BasicTermInfo {
  termId: ID!
  subjects(where: SubjectWhereInput, orderBy: SubjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Subject!]
  pay: Int
  childGender: Gender!
  TeacherGender: SelectGender!
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
  termId: ID!
  subjects: SubjectCreateManyInput
  pay: Int
  childGender: Gender
  TeacherGender: SelectGender
  teacherReuqire: String
  childStatus: String
  longTerm: LongTermCreateOneInput
  shortTerm: ShortTermCreateOneInput
}

input BasicTermInfoCreateManyInput {
  create: [BasicTermInfoCreateInput!]
  connect: [BasicTermInfoWhereUniqueInput!]
}

type BasicTermInfoEdge {
  node: BasicTermInfo!
  cursor: String!
}

enum BasicTermInfoOrderByInput {
  termId_ASC
  termId_DESC
  pay_ASC
  pay_DESC
  childGender_ASC
  childGender_DESC
  TeacherGender_ASC
  TeacherGender_DESC
  teacherReuqire_ASC
  teacherReuqire_DESC
  childStatus_ASC
  childStatus_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type BasicTermInfoPreviousValues {
  termId: ID!
  pay: Int
  childGender: Gender!
  TeacherGender: SelectGender!
  teacherReuqire: String
  childStatus: String
}

input BasicTermInfoScalarWhereInput {
  termId: ID
  termId_not: ID
  termId_in: [ID!]
  termId_not_in: [ID!]
  termId_lt: ID
  termId_lte: ID
  termId_gt: ID
  termId_gte: ID
  termId_contains: ID
  termId_not_contains: ID
  termId_starts_with: ID
  termId_not_starts_with: ID
  termId_ends_with: ID
  termId_not_ends_with: ID
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
  TeacherGender: SelectGender
  TeacherGender_not: SelectGender
  TeacherGender_in: [SelectGender!]
  TeacherGender_not_in: [SelectGender!]
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
  AND: [BasicTermInfoScalarWhereInput!]
  OR: [BasicTermInfoScalarWhereInput!]
  NOT: [BasicTermInfoScalarWhereInput!]
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
  termId: ID
  subjects: SubjectUpdateManyInput
  pay: Int
  childGender: Gender
  TeacherGender: SelectGender
  teacherReuqire: String
  childStatus: String
  longTerm: LongTermUpdateOneInput
  shortTerm: ShortTermUpdateOneInput
}

input BasicTermInfoUpdateInput {
  termId: ID
  subjects: SubjectUpdateManyInput
  pay: Int
  childGender: Gender
  TeacherGender: SelectGender
  teacherReuqire: String
  childStatus: String
  longTerm: LongTermUpdateOneInput
  shortTerm: ShortTermUpdateOneInput
}

input BasicTermInfoUpdateManyDataInput {
  termId: ID
  pay: Int
  childGender: Gender
  TeacherGender: SelectGender
  teacherReuqire: String
  childStatus: String
}

input BasicTermInfoUpdateManyInput {
  create: [BasicTermInfoCreateInput!]
  update: [BasicTermInfoUpdateWithWhereUniqueNestedInput!]
  upsert: [BasicTermInfoUpsertWithWhereUniqueNestedInput!]
  delete: [BasicTermInfoWhereUniqueInput!]
  connect: [BasicTermInfoWhereUniqueInput!]
  disconnect: [BasicTermInfoWhereUniqueInput!]
  deleteMany: [BasicTermInfoScalarWhereInput!]
  updateMany: [BasicTermInfoUpdateManyWithWhereNestedInput!]
}

input BasicTermInfoUpdateManyMutationInput {
  termId: ID
  pay: Int
  childGender: Gender
  TeacherGender: SelectGender
  teacherReuqire: String
  childStatus: String
}

input BasicTermInfoUpdateManyWithWhereNestedInput {
  where: BasicTermInfoScalarWhereInput!
  data: BasicTermInfoUpdateManyDataInput!
}

input BasicTermInfoUpdateWithWhereUniqueNestedInput {
  where: BasicTermInfoWhereUniqueInput!
  data: BasicTermInfoUpdateDataInput!
}

input BasicTermInfoUpsertWithWhereUniqueNestedInput {
  where: BasicTermInfoWhereUniqueInput!
  update: BasicTermInfoUpdateDataInput!
  create: BasicTermInfoCreateInput!
}

input BasicTermInfoWhereInput {
  termId: ID
  termId_not: ID
  termId_in: [ID!]
  termId_not_in: [ID!]
  termId_lt: ID
  termId_lte: ID
  termId_gt: ID
  termId_gte: ID
  termId_contains: ID
  termId_not_contains: ID
  termId_starts_with: ID
  termId_not_starts_with: ID
  termId_ends_with: ID
  termId_not_ends_with: ID
  subjects_every: SubjectWhereInput
  subjects_some: SubjectWhereInput
  subjects_none: SubjectWhereInput
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
  TeacherGender: SelectGender
  TeacherGender_not: SelectGender
  TeacherGender_in: [SelectGender!]
  TeacherGender_not_in: [SelectGender!]
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
  termId: ID
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
  invitor: Invitor!
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
  invitor: Invitor!
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
  invitor: Invitor!
  status: InvitationStatus!
}

input InvitationCreateWithoutStuedntInput {
  parents: ParentCreateOneWithoutInvitationsInput!
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
  AND: [InvitationScalarWhereInput!]
  OR: [InvitationScalarWhereInput!]
  NOT: [InvitationScalarWhereInput!]
}

enum InvitationStatus {
  REBACK
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
  invitor: Invitor
  status: InvitationStatus
}

input InvitationUpdateWithoutStuedntDataInput {
  parents: ParentUpdateOneRequiredWithoutInvitationsInput
  invitor: Invitor
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
  invitor: Invitor
  invitor_not: Invitor
  invitor_in: [Invitor!]
  invitor_not_in: [Invitor!]
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
  longTermId: ID!
  lessonTime: Int
  days: Int
  timeList(where: AvalibelTimeWhereInput, orderBy: AvalibelTimeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AvalibelTime!]
}

type LongTermConnection {
  pageInfo: PageInfo!
  edges: [LongTermEdge]!
  aggregate: AggregateLongTerm!
}

input LongTermCreateInput {
  longTermId: ID!
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
  longTermId_ASC
  longTermId_DESC
  lessonTime_ASC
  lessonTime_DESC
  days_ASC
  days_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type LongTermPreviousValues {
  longTermId: ID!
  lessonTime: Int
  days: Int
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
  longTermId: ID
  lessonTime: Int
  days: Int
  timeList: AvalibelTimeUpdateManyInput
}

input LongTermUpdateInput {
  longTermId: ID
  lessonTime: Int
  days: Int
  timeList: AvalibelTimeUpdateManyInput
}

input LongTermUpdateManyMutationInput {
  longTermId: ID
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
  longTermId: ID
  longTermId_not: ID
  longTermId_in: [ID!]
  longTermId_not_in: [ID!]
  longTermId_lt: ID
  longTermId_lte: ID
  longTermId_gt: ID
  longTermId_gte: ID
  longTermId_contains: ID
  longTermId_not_contains: ID
  longTermId_starts_with: ID
  longTermId_not_starts_with: ID
  longTermId_ends_with: ID
  longTermId_not_ends_with: ID
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
  longTermId: ID
}

type Mutation {
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
  createStudentDetail(data: StudentDetailCreateInput!): StudentDetail!
  updateManyStudentDetails(data: StudentDetailUpdateManyMutationInput!, where: StudentDetailWhereInput): BatchPayload!
  deleteManyStudentDetails(where: StudentDetailWhereInput): BatchPayload!
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
  UnionID: String!
  authstatus: AuthStatus!
  createdAt: DateTime!
  updatedAt: DateTime!
  starList(where: StudentWhereInput, orderBy: StudentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Student!]
  invitations(where: InvitationWhereInput, orderBy: InvitationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invitation!]
  order(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
  publishTerm(where: BasicTermInfoWhereInput, orderBy: BasicTermInfoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [BasicTermInfo!]
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
  UnionID: String!
  authstatus: AuthStatus!
  starList: StudentCreateManyWithoutStarListInput
  invitations: InvitationCreateManyWithoutParentsInput
  order: OrderCreateManyWithoutParentsInput
  publishTerm: BasicTermInfoCreateManyInput
}

input ParentCreateManyWithoutStarListInput {
  create: [ParentCreateWithoutStarListInput!]
  connect: [ParentWhereUniqueInput!]
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
  UnionID: String!
  authstatus: AuthStatus!
  starList: StudentCreateManyWithoutStarListInput
  order: OrderCreateManyWithoutParentsInput
  publishTerm: BasicTermInfoCreateManyInput
}

input ParentCreateWithoutOrderInput {
  phone: String!
  name: String!
  address: String!
  email: String!
  UnionID: String!
  authstatus: AuthStatus!
  starList: StudentCreateManyWithoutStarListInput
  invitations: InvitationCreateManyWithoutParentsInput
  publishTerm: BasicTermInfoCreateManyInput
}

input ParentCreateWithoutStarListInput {
  phone: String!
  name: String!
  address: String!
  email: String!
  UnionID: String!
  authstatus: AuthStatus!
  invitations: InvitationCreateManyWithoutParentsInput
  order: OrderCreateManyWithoutParentsInput
  publishTerm: BasicTermInfoCreateManyInput
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
  UnionID_ASC
  UnionID_DESC
  authstatus_ASC
  authstatus_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ParentPreviousValues {
  id: ID!
  phone: String!
  name: String!
  address: String!
  email: String!
  UnionID: String!
  authstatus: AuthStatus!
  createdAt: DateTime!
  updatedAt: DateTime!
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

input ParentUpdateInput {
  phone: String
  name: String
  address: String
  email: String
  UnionID: String
  authstatus: AuthStatus
  starList: StudentUpdateManyWithoutStarListInput
  invitations: InvitationUpdateManyWithoutParentsInput
  order: OrderUpdateManyWithoutParentsInput
  publishTerm: BasicTermInfoUpdateManyInput
}

input ParentUpdateManyDataInput {
  phone: String
  name: String
  address: String
  email: String
  UnionID: String
  authstatus: AuthStatus
}

input ParentUpdateManyMutationInput {
  phone: String
  name: String
  address: String
  email: String
  UnionID: String
  authstatus: AuthStatus
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
  UnionID: String
  authstatus: AuthStatus
  starList: StudentUpdateManyWithoutStarListInput
  order: OrderUpdateManyWithoutParentsInput
  publishTerm: BasicTermInfoUpdateManyInput
}

input ParentUpdateWithoutOrderDataInput {
  phone: String
  name: String
  address: String
  email: String
  UnionID: String
  authstatus: AuthStatus
  starList: StudentUpdateManyWithoutStarListInput
  invitations: InvitationUpdateManyWithoutParentsInput
  publishTerm: BasicTermInfoUpdateManyInput
}

input ParentUpdateWithoutStarListDataInput {
  phone: String
  name: String
  address: String
  email: String
  UnionID: String
  authstatus: AuthStatus
  invitations: InvitationUpdateManyWithoutParentsInput
  order: OrderUpdateManyWithoutParentsInput
  publishTerm: BasicTermInfoUpdateManyInput
}

input ParentUpdateWithWhereUniqueWithoutStarListInput {
  where: ParentWhereUniqueInput!
  data: ParentUpdateWithoutStarListDataInput!
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
  starList_every: StudentWhereInput
  starList_some: StudentWhereInput
  starList_none: StudentWhereInput
  invitations_every: InvitationWhereInput
  invitations_some: InvitationWhereInput
  invitations_none: InvitationWhereInput
  order_every: OrderWhereInput
  order_some: OrderWhereInput
  order_none: OrderWhereInput
  publishTerm_every: BasicTermInfoWhereInput
  publishTerm_some: BasicTermInfoWhereInput
  publishTerm_none: BasicTermInfoWhereInput
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
  shortTerm(where: ShortTermWhereUniqueInput!): ShortTerm
  shortTerms(where: ShortTermWhereInput, orderBy: ShortTermOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ShortTerm]!
  shortTermsConnection(where: ShortTermWhereInput, orderBy: ShortTermOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ShortTermConnection!
  student(where: StudentWhereUniqueInput!): Student
  students(where: StudentWhereInput, orderBy: StudentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Student]!
  studentsConnection(where: StudentWhereInput, orderBy: StudentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StudentConnection!
  studentDetails(where: StudentDetailWhereInput, orderBy: StudentDetailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [StudentDetail]!
  studentDetailsConnection(where: StudentDetailWhereInput, orderBy: StudentDetailOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StudentDetailConnection!
  subjects(where: SubjectWhereInput, orderBy: SubjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Subject]!
  subjectsConnection(where: SubjectWhereInput, orderBy: SubjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): SubjectConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum SelectGender {
  MALE
  FEMALE
  BOTH
}

type ShortTerm {
  shortTermId: ID!
  timeList: [DateTime!]!
}

type ShortTermConnection {
  pageInfo: PageInfo!
  edges: [ShortTermEdge]!
  aggregate: AggregateShortTerm!
}

input ShortTermCreateInput {
  shortTermId: ID!
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
  shortTermId_ASC
  shortTermId_DESC
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ShortTermPreviousValues {
  shortTermId: ID!
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
  shortTermId: ID
  timeList: ShortTermUpdatetimeListInput
}

input ShortTermUpdateInput {
  shortTermId: ID
  timeList: ShortTermUpdatetimeListInput
}

input ShortTermUpdateManyMutationInput {
  shortTermId: ID
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
  shortTermId: ID
  shortTermId_not: ID
  shortTermId_in: [ID!]
  shortTermId_not_in: [ID!]
  shortTermId_lt: ID
  shortTermId_lte: ID
  shortTermId_gt: ID
  shortTermId_gte: ID
  shortTermId_contains: ID
  shortTermId_not_contains: ID
  shortTermId_starts_with: ID
  shortTermId_not_starts_with: ID
  shortTermId_ends_with: ID
  shortTermId_not_ends_with: ID
  AND: [ShortTermWhereInput!]
  OR: [ShortTermWhereInput!]
  NOT: [ShortTermWhereInput!]
}

input ShortTermWhereUniqueInput {
  shortTermId: ID
}

type Student {
  id: ID!
  UnionID: String!
  openid: String!
  phone: String!
  name: String!
  university: University!
  email: String!
  Gender: Gender
  createdAt: DateTime!
  updatedAt: DateTime!
  expectPay: Int
  authstatus: AuthStatus!
  subjects(where: SubjectWhereInput, orderBy: SubjectOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Subject!]
  starList(where: ParentWhereInput, orderBy: ParentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Parent!]
  avalible(where: AvalibelTimeWhereInput, orderBy: AvalibelTimeOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [AvalibelTime!]
  studentDetail: StudentDetail
  invitations(where: InvitationWhereInput, orderBy: InvitationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Invitation!]
  order(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
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
  email: String!
  Gender: Gender
  expectPay: Int
  authstatus: AuthStatus!
  subjects: SubjectCreateManyInput
  starList: ParentCreateManyWithoutStarListInput
  avalible: AvalibelTimeCreateManyInput
  studentDetail: StudentDetailCreateOneInput
  invitations: InvitationCreateManyWithoutStuedntInput
  order: OrderCreateManyWithoutStuedntInput
}

input StudentCreateManyWithoutStarListInput {
  create: [StudentCreateWithoutStarListInput!]
  connect: [StudentWhereUniqueInput!]
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
  email: String!
  Gender: Gender
  expectPay: Int
  authstatus: AuthStatus!
  subjects: SubjectCreateManyInput
  starList: ParentCreateManyWithoutStarListInput
  avalible: AvalibelTimeCreateManyInput
  studentDetail: StudentDetailCreateOneInput
  order: OrderCreateManyWithoutStuedntInput
}

input StudentCreateWithoutOrderInput {
  UnionID: String!
  openid: String!
  phone: String!
  name: String!
  university: University!
  email: String!
  Gender: Gender
  expectPay: Int
  authstatus: AuthStatus!
  subjects: SubjectCreateManyInput
  starList: ParentCreateManyWithoutStarListInput
  avalible: AvalibelTimeCreateManyInput
  studentDetail: StudentDetailCreateOneInput
  invitations: InvitationCreateManyWithoutStuedntInput
}

input StudentCreateWithoutStarListInput {
  UnionID: String!
  openid: String!
  phone: String!
  name: String!
  university: University!
  email: String!
  Gender: Gender
  expectPay: Int
  authstatus: AuthStatus!
  subjects: SubjectCreateManyInput
  avalible: AvalibelTimeCreateManyInput
  studentDetail: StudentDetailCreateOneInput
  invitations: InvitationCreateManyWithoutStuedntInput
  order: OrderCreateManyWithoutStuedntInput
}

type StudentDetail {
  selfIntro: String!
  grades: String!
  exprience: String!
  pictrue: [String!]!
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
  pictrue: StudentDetailCreatepictrueInput
}

input StudentDetailCreateOneInput {
  create: StudentDetailCreateInput
}

input StudentDetailCreatepictrueInput {
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
  pictrue: [String!]!
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
  pictrue: StudentDetailUpdatepictrueInput
}

input StudentDetailUpdateManyMutationInput {
  selfIntro: String
  grades: String
  exprience: String
  pictrue: StudentDetailUpdatepictrueInput
}

input StudentDetailUpdateOneInput {
  create: StudentDetailCreateInput
  update: StudentDetailUpdateDataInput
  upsert: StudentDetailUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
}

input StudentDetailUpdatepictrueInput {
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
  authstatus_ASC
  authstatus_DESC
}

type StudentPreviousValues {
  id: ID!
  UnionID: String!
  openid: String!
  phone: String!
  name: String!
  university: University!
  email: String!
  Gender: Gender
  createdAt: DateTime!
  updatedAt: DateTime!
  expectPay: Int
  authstatus: AuthStatus!
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
  authstatus: AuthStatus
  authstatus_not: AuthStatus
  authstatus_in: [AuthStatus!]
  authstatus_not_in: [AuthStatus!]
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

input StudentUpdateInput {
  UnionID: String
  openid: String
  phone: String
  name: String
  university: University
  email: String
  Gender: Gender
  expectPay: Int
  authstatus: AuthStatus
  subjects: SubjectUpdateManyInput
  starList: ParentUpdateManyWithoutStarListInput
  avalible: AvalibelTimeUpdateManyInput
  studentDetail: StudentDetailUpdateOneInput
  invitations: InvitationUpdateManyWithoutStuedntInput
  order: OrderUpdateManyWithoutStuedntInput
}

input StudentUpdateManyDataInput {
  UnionID: String
  openid: String
  phone: String
  name: String
  university: University
  email: String
  Gender: Gender
  expectPay: Int
  authstatus: AuthStatus
}

input StudentUpdateManyMutationInput {
  UnionID: String
  openid: String
  phone: String
  name: String
  university: University
  email: String
  Gender: Gender
  expectPay: Int
  authstatus: AuthStatus
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
  email: String
  Gender: Gender
  expectPay: Int
  authstatus: AuthStatus
  subjects: SubjectUpdateManyInput
  starList: ParentUpdateManyWithoutStarListInput
  avalible: AvalibelTimeUpdateManyInput
  studentDetail: StudentDetailUpdateOneInput
  order: OrderUpdateManyWithoutStuedntInput
}

input StudentUpdateWithoutOrderDataInput {
  UnionID: String
  openid: String
  phone: String
  name: String
  university: University
  email: String
  Gender: Gender
  expectPay: Int
  authstatus: AuthStatus
  subjects: SubjectUpdateManyInput
  starList: ParentUpdateManyWithoutStarListInput
  avalible: AvalibelTimeUpdateManyInput
  studentDetail: StudentDetailUpdateOneInput
  invitations: InvitationUpdateManyWithoutStuedntInput
}

input StudentUpdateWithoutStarListDataInput {
  UnionID: String
  openid: String
  phone: String
  name: String
  university: University
  email: String
  Gender: Gender
  expectPay: Int
  authstatus: AuthStatus
  subjects: SubjectUpdateManyInput
  avalible: AvalibelTimeUpdateManyInput
  studentDetail: StudentDetailUpdateOneInput
  invitations: InvitationUpdateManyWithoutStuedntInput
  order: OrderUpdateManyWithoutStuedntInput
}

input StudentUpdateWithWhereUniqueWithoutStarListInput {
  where: StudentWhereUniqueInput!
  data: StudentUpdateWithoutStarListDataInput!
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
  authstatus: AuthStatus
  authstatus_not: AuthStatus
  authstatus_in: [AuthStatus!]
  authstatus_not_in: [AuthStatus!]
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
  avalibelTime(where: AvalibelTimeSubscriptionWhereInput): AvalibelTimeSubscriptionPayload
  basicTermInfo(where: BasicTermInfoSubscriptionWhereInput): BasicTermInfoSubscriptionPayload
  invitation(where: InvitationSubscriptionWhereInput): InvitationSubscriptionPayload
  longTerm(where: LongTermSubscriptionWhereInput): LongTermSubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  parent(where: ParentSubscriptionWhereInput): ParentSubscriptionPayload
  shortTerm(where: ShortTermSubscriptionWhereInput): ShortTermSubscriptionPayload
  student(where: StudentSubscriptionWhereInput): StudentSubscriptionPayload
  studentDetail(where: StudentDetailSubscriptionWhereInput): StudentDetailSubscriptionPayload
  subject(where: SubjectSubscriptionWhereInput): SubjectSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
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
    