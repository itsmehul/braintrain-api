module.exports = {
        typeDefs: /* GraphQL */ `type AggregateBatch {
  count: Int!
}

type AggregateClassroom {
  count: Int!
}

type AggregateLecture {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type Batch {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  lectures(where: LectureWhereInput, orderBy: LectureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Lecture!]
  teacher: User!
  students(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  classroom: Classroom
  name: String!
  description: String!
  startsFrom: DateTime
  fee: Float
}

type BatchConnection {
  pageInfo: PageInfo!
  edges: [BatchEdge]!
  aggregate: AggregateBatch!
}

input BatchCreateInput {
  lectures: LectureCreateManyWithoutBatchInput
  teacher: UserCreateOneInput!
  students: UserCreateManyInput
  classroom: ClassroomCreateOneWithoutBatchesInput
  name: String!
  description: String!
  startsFrom: DateTime
  fee: Float
}

input BatchCreateManyWithoutClassroomInput {
  create: [BatchCreateWithoutClassroomInput!]
  connect: [BatchWhereUniqueInput!]
}

input BatchCreateOneWithoutLecturesInput {
  create: BatchCreateWithoutLecturesInput
  connect: BatchWhereUniqueInput
}

input BatchCreateWithoutClassroomInput {
  lectures: LectureCreateManyWithoutBatchInput
  teacher: UserCreateOneInput!
  students: UserCreateManyInput
  name: String!
  description: String!
  startsFrom: DateTime
  fee: Float
}

input BatchCreateWithoutLecturesInput {
  teacher: UserCreateOneInput!
  students: UserCreateManyInput
  classroom: ClassroomCreateOneWithoutBatchesInput
  name: String!
  description: String!
  startsFrom: DateTime
  fee: Float
}

type BatchEdge {
  node: Batch!
  cursor: String!
}

enum BatchOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  startsFrom_ASC
  startsFrom_DESC
  fee_ASC
  fee_DESC
}

type BatchPayload {
  count: Long!
}

type BatchPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String!
  startsFrom: DateTime
  fee: Float
}

input BatchScalarWhereInput {
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
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  startsFrom: DateTime
  startsFrom_not: DateTime
  startsFrom_in: [DateTime!]
  startsFrom_not_in: [DateTime!]
  startsFrom_lt: DateTime
  startsFrom_lte: DateTime
  startsFrom_gt: DateTime
  startsFrom_gte: DateTime
  fee: Float
  fee_not: Float
  fee_in: [Float!]
  fee_not_in: [Float!]
  fee_lt: Float
  fee_lte: Float
  fee_gt: Float
  fee_gte: Float
  AND: [BatchScalarWhereInput!]
  OR: [BatchScalarWhereInput!]
  NOT: [BatchScalarWhereInput!]
}

type BatchSubscriptionPayload {
  mutation: MutationType!
  node: Batch
  updatedFields: [String!]
  previousValues: BatchPreviousValues
}

input BatchSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BatchWhereInput
  AND: [BatchSubscriptionWhereInput!]
  OR: [BatchSubscriptionWhereInput!]
  NOT: [BatchSubscriptionWhereInput!]
}

input BatchUpdateInput {
  lectures: LectureUpdateManyWithoutBatchInput
  teacher: UserUpdateOneRequiredInput
  students: UserUpdateManyInput
  classroom: ClassroomUpdateOneWithoutBatchesInput
  name: String
  description: String
  startsFrom: DateTime
  fee: Float
}

input BatchUpdateManyDataInput {
  name: String
  description: String
  startsFrom: DateTime
  fee: Float
}

input BatchUpdateManyMutationInput {
  name: String
  description: String
  startsFrom: DateTime
  fee: Float
}

input BatchUpdateManyWithoutClassroomInput {
  create: [BatchCreateWithoutClassroomInput!]
  delete: [BatchWhereUniqueInput!]
  connect: [BatchWhereUniqueInput!]
  disconnect: [BatchWhereUniqueInput!]
  update: [BatchUpdateWithWhereUniqueWithoutClassroomInput!]
  upsert: [BatchUpsertWithWhereUniqueWithoutClassroomInput!]
  deleteMany: [BatchScalarWhereInput!]
  updateMany: [BatchUpdateManyWithWhereNestedInput!]
}

input BatchUpdateManyWithWhereNestedInput {
  where: BatchScalarWhereInput!
  data: BatchUpdateManyDataInput!
}

input BatchUpdateOneWithoutLecturesInput {
  create: BatchCreateWithoutLecturesInput
  update: BatchUpdateWithoutLecturesDataInput
  upsert: BatchUpsertWithoutLecturesInput
  delete: Boolean
  disconnect: Boolean
  connect: BatchWhereUniqueInput
}

input BatchUpdateWithoutClassroomDataInput {
  lectures: LectureUpdateManyWithoutBatchInput
  teacher: UserUpdateOneRequiredInput
  students: UserUpdateManyInput
  name: String
  description: String
  startsFrom: DateTime
  fee: Float
}

input BatchUpdateWithoutLecturesDataInput {
  teacher: UserUpdateOneRequiredInput
  students: UserUpdateManyInput
  classroom: ClassroomUpdateOneWithoutBatchesInput
  name: String
  description: String
  startsFrom: DateTime
  fee: Float
}

input BatchUpdateWithWhereUniqueWithoutClassroomInput {
  where: BatchWhereUniqueInput!
  data: BatchUpdateWithoutClassroomDataInput!
}

input BatchUpsertWithoutLecturesInput {
  update: BatchUpdateWithoutLecturesDataInput!
  create: BatchCreateWithoutLecturesInput!
}

input BatchUpsertWithWhereUniqueWithoutClassroomInput {
  where: BatchWhereUniqueInput!
  update: BatchUpdateWithoutClassroomDataInput!
  create: BatchCreateWithoutClassroomInput!
}

input BatchWhereInput {
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
  lectures_every: LectureWhereInput
  lectures_some: LectureWhereInput
  lectures_none: LectureWhereInput
  teacher: UserWhereInput
  students_every: UserWhereInput
  students_some: UserWhereInput
  students_none: UserWhereInput
  classroom: ClassroomWhereInput
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
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  startsFrom: DateTime
  startsFrom_not: DateTime
  startsFrom_in: [DateTime!]
  startsFrom_not_in: [DateTime!]
  startsFrom_lt: DateTime
  startsFrom_lte: DateTime
  startsFrom_gt: DateTime
  startsFrom_gte: DateTime
  fee: Float
  fee_not: Float
  fee_in: [Float!]
  fee_not_in: [Float!]
  fee_lt: Float
  fee_lte: Float
  fee_gt: Float
  fee_gte: Float
  AND: [BatchWhereInput!]
  OR: [BatchWhereInput!]
  NOT: [BatchWhereInput!]
}

input BatchWhereUniqueInput {
  id: ID
}

type Classroom {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  teacher: User!
  students(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  description: String
  classroomImage: String
  rating: Int
  learning: String
  language: String
  requirements: String
  objectives: String
  batches(where: BatchWhereInput, orderBy: BatchOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Batch!]
}

type ClassroomConnection {
  pageInfo: PageInfo!
  edges: [ClassroomEdge]!
  aggregate: AggregateClassroom!
}

input ClassroomCreateInput {
  name: String!
  teacher: UserCreateOneWithoutTeacherInInput!
  students: UserCreateManyWithoutStudentInInput
  description: String
  classroomImage: String
  rating: Int
  learning: String
  language: String
  requirements: String
  objectives: String
  batches: BatchCreateManyWithoutClassroomInput
}

input ClassroomCreateManyWithoutStudentsInput {
  create: [ClassroomCreateWithoutStudentsInput!]
  connect: [ClassroomWhereUniqueInput!]
}

input ClassroomCreateManyWithoutTeacherInput {
  create: [ClassroomCreateWithoutTeacherInput!]
  connect: [ClassroomWhereUniqueInput!]
}

input ClassroomCreateOneInput {
  create: ClassroomCreateInput
  connect: ClassroomWhereUniqueInput
}

input ClassroomCreateOneWithoutBatchesInput {
  create: ClassroomCreateWithoutBatchesInput
  connect: ClassroomWhereUniqueInput
}

input ClassroomCreateWithoutBatchesInput {
  name: String!
  teacher: UserCreateOneWithoutTeacherInInput!
  students: UserCreateManyWithoutStudentInInput
  description: String
  classroomImage: String
  rating: Int
  learning: String
  language: String
  requirements: String
  objectives: String
}

input ClassroomCreateWithoutStudentsInput {
  name: String!
  teacher: UserCreateOneWithoutTeacherInInput!
  description: String
  classroomImage: String
  rating: Int
  learning: String
  language: String
  requirements: String
  objectives: String
  batches: BatchCreateManyWithoutClassroomInput
}

input ClassroomCreateWithoutTeacherInput {
  name: String!
  students: UserCreateManyWithoutStudentInInput
  description: String
  classroomImage: String
  rating: Int
  learning: String
  language: String
  requirements: String
  objectives: String
  batches: BatchCreateManyWithoutClassroomInput
}

type ClassroomEdge {
  node: Classroom!
  cursor: String!
}

enum ClassroomOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  classroomImage_ASC
  classroomImage_DESC
  rating_ASC
  rating_DESC
  learning_ASC
  learning_DESC
  language_ASC
  language_DESC
  requirements_ASC
  requirements_DESC
  objectives_ASC
  objectives_DESC
}

type ClassroomPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  description: String
  classroomImage: String
  rating: Int
  learning: String
  language: String
  requirements: String
  objectives: String
}

input ClassroomScalarWhereInput {
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
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  classroomImage: String
  classroomImage_not: String
  classroomImage_in: [String!]
  classroomImage_not_in: [String!]
  classroomImage_lt: String
  classroomImage_lte: String
  classroomImage_gt: String
  classroomImage_gte: String
  classroomImage_contains: String
  classroomImage_not_contains: String
  classroomImage_starts_with: String
  classroomImage_not_starts_with: String
  classroomImage_ends_with: String
  classroomImage_not_ends_with: String
  rating: Int
  rating_not: Int
  rating_in: [Int!]
  rating_not_in: [Int!]
  rating_lt: Int
  rating_lte: Int
  rating_gt: Int
  rating_gte: Int
  learning: String
  learning_not: String
  learning_in: [String!]
  learning_not_in: [String!]
  learning_lt: String
  learning_lte: String
  learning_gt: String
  learning_gte: String
  learning_contains: String
  learning_not_contains: String
  learning_starts_with: String
  learning_not_starts_with: String
  learning_ends_with: String
  learning_not_ends_with: String
  language: String
  language_not: String
  language_in: [String!]
  language_not_in: [String!]
  language_lt: String
  language_lte: String
  language_gt: String
  language_gte: String
  language_contains: String
  language_not_contains: String
  language_starts_with: String
  language_not_starts_with: String
  language_ends_with: String
  language_not_ends_with: String
  requirements: String
  requirements_not: String
  requirements_in: [String!]
  requirements_not_in: [String!]
  requirements_lt: String
  requirements_lte: String
  requirements_gt: String
  requirements_gte: String
  requirements_contains: String
  requirements_not_contains: String
  requirements_starts_with: String
  requirements_not_starts_with: String
  requirements_ends_with: String
  requirements_not_ends_with: String
  objectives: String
  objectives_not: String
  objectives_in: [String!]
  objectives_not_in: [String!]
  objectives_lt: String
  objectives_lte: String
  objectives_gt: String
  objectives_gte: String
  objectives_contains: String
  objectives_not_contains: String
  objectives_starts_with: String
  objectives_not_starts_with: String
  objectives_ends_with: String
  objectives_not_ends_with: String
  AND: [ClassroomScalarWhereInput!]
  OR: [ClassroomScalarWhereInput!]
  NOT: [ClassroomScalarWhereInput!]
}

type ClassroomSubscriptionPayload {
  mutation: MutationType!
  node: Classroom
  updatedFields: [String!]
  previousValues: ClassroomPreviousValues
}

input ClassroomSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ClassroomWhereInput
  AND: [ClassroomSubscriptionWhereInput!]
  OR: [ClassroomSubscriptionWhereInput!]
  NOT: [ClassroomSubscriptionWhereInput!]
}

input ClassroomUpdateDataInput {
  name: String
  teacher: UserUpdateOneRequiredWithoutTeacherInInput
  students: UserUpdateManyWithoutStudentInInput
  description: String
  classroomImage: String
  rating: Int
  learning: String
  language: String
  requirements: String
  objectives: String
  batches: BatchUpdateManyWithoutClassroomInput
}

input ClassroomUpdateInput {
  name: String
  teacher: UserUpdateOneRequiredWithoutTeacherInInput
  students: UserUpdateManyWithoutStudentInInput
  description: String
  classroomImage: String
  rating: Int
  learning: String
  language: String
  requirements: String
  objectives: String
  batches: BatchUpdateManyWithoutClassroomInput
}

input ClassroomUpdateManyDataInput {
  name: String
  description: String
  classroomImage: String
  rating: Int
  learning: String
  language: String
  requirements: String
  objectives: String
}

input ClassroomUpdateManyMutationInput {
  name: String
  description: String
  classroomImage: String
  rating: Int
  learning: String
  language: String
  requirements: String
  objectives: String
}

input ClassroomUpdateManyWithoutStudentsInput {
  create: [ClassroomCreateWithoutStudentsInput!]
  delete: [ClassroomWhereUniqueInput!]
  connect: [ClassroomWhereUniqueInput!]
  disconnect: [ClassroomWhereUniqueInput!]
  update: [ClassroomUpdateWithWhereUniqueWithoutStudentsInput!]
  upsert: [ClassroomUpsertWithWhereUniqueWithoutStudentsInput!]
  deleteMany: [ClassroomScalarWhereInput!]
  updateMany: [ClassroomUpdateManyWithWhereNestedInput!]
}

input ClassroomUpdateManyWithoutTeacherInput {
  create: [ClassroomCreateWithoutTeacherInput!]
  delete: [ClassroomWhereUniqueInput!]
  connect: [ClassroomWhereUniqueInput!]
  disconnect: [ClassroomWhereUniqueInput!]
  update: [ClassroomUpdateWithWhereUniqueWithoutTeacherInput!]
  upsert: [ClassroomUpsertWithWhereUniqueWithoutTeacherInput!]
  deleteMany: [ClassroomScalarWhereInput!]
  updateMany: [ClassroomUpdateManyWithWhereNestedInput!]
}

input ClassroomUpdateManyWithWhereNestedInput {
  where: ClassroomScalarWhereInput!
  data: ClassroomUpdateManyDataInput!
}

input ClassroomUpdateOneInput {
  create: ClassroomCreateInput
  update: ClassroomUpdateDataInput
  upsert: ClassroomUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ClassroomWhereUniqueInput
}

input ClassroomUpdateOneWithoutBatchesInput {
  create: ClassroomCreateWithoutBatchesInput
  update: ClassroomUpdateWithoutBatchesDataInput
  upsert: ClassroomUpsertWithoutBatchesInput
  delete: Boolean
  disconnect: Boolean
  connect: ClassroomWhereUniqueInput
}

input ClassroomUpdateWithoutBatchesDataInput {
  name: String
  teacher: UserUpdateOneRequiredWithoutTeacherInInput
  students: UserUpdateManyWithoutStudentInInput
  description: String
  classroomImage: String
  rating: Int
  learning: String
  language: String
  requirements: String
  objectives: String
}

input ClassroomUpdateWithoutStudentsDataInput {
  name: String
  teacher: UserUpdateOneRequiredWithoutTeacherInInput
  description: String
  classroomImage: String
  rating: Int
  learning: String
  language: String
  requirements: String
  objectives: String
  batches: BatchUpdateManyWithoutClassroomInput
}

input ClassroomUpdateWithoutTeacherDataInput {
  name: String
  students: UserUpdateManyWithoutStudentInInput
  description: String
  classroomImage: String
  rating: Int
  learning: String
  language: String
  requirements: String
  objectives: String
  batches: BatchUpdateManyWithoutClassroomInput
}

input ClassroomUpdateWithWhereUniqueWithoutStudentsInput {
  where: ClassroomWhereUniqueInput!
  data: ClassroomUpdateWithoutStudentsDataInput!
}

input ClassroomUpdateWithWhereUniqueWithoutTeacherInput {
  where: ClassroomWhereUniqueInput!
  data: ClassroomUpdateWithoutTeacherDataInput!
}

input ClassroomUpsertNestedInput {
  update: ClassroomUpdateDataInput!
  create: ClassroomCreateInput!
}

input ClassroomUpsertWithoutBatchesInput {
  update: ClassroomUpdateWithoutBatchesDataInput!
  create: ClassroomCreateWithoutBatchesInput!
}

input ClassroomUpsertWithWhereUniqueWithoutStudentsInput {
  where: ClassroomWhereUniqueInput!
  update: ClassroomUpdateWithoutStudentsDataInput!
  create: ClassroomCreateWithoutStudentsInput!
}

input ClassroomUpsertWithWhereUniqueWithoutTeacherInput {
  where: ClassroomWhereUniqueInput!
  update: ClassroomUpdateWithoutTeacherDataInput!
  create: ClassroomCreateWithoutTeacherInput!
}

input ClassroomWhereInput {
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
  teacher: UserWhereInput
  students_every: UserWhereInput
  students_some: UserWhereInput
  students_none: UserWhereInput
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  classroomImage: String
  classroomImage_not: String
  classroomImage_in: [String!]
  classroomImage_not_in: [String!]
  classroomImage_lt: String
  classroomImage_lte: String
  classroomImage_gt: String
  classroomImage_gte: String
  classroomImage_contains: String
  classroomImage_not_contains: String
  classroomImage_starts_with: String
  classroomImage_not_starts_with: String
  classroomImage_ends_with: String
  classroomImage_not_ends_with: String
  rating: Int
  rating_not: Int
  rating_in: [Int!]
  rating_not_in: [Int!]
  rating_lt: Int
  rating_lte: Int
  rating_gt: Int
  rating_gte: Int
  learning: String
  learning_not: String
  learning_in: [String!]
  learning_not_in: [String!]
  learning_lt: String
  learning_lte: String
  learning_gt: String
  learning_gte: String
  learning_contains: String
  learning_not_contains: String
  learning_starts_with: String
  learning_not_starts_with: String
  learning_ends_with: String
  learning_not_ends_with: String
  language: String
  language_not: String
  language_in: [String!]
  language_not_in: [String!]
  language_lt: String
  language_lte: String
  language_gt: String
  language_gte: String
  language_contains: String
  language_not_contains: String
  language_starts_with: String
  language_not_starts_with: String
  language_ends_with: String
  language_not_ends_with: String
  requirements: String
  requirements_not: String
  requirements_in: [String!]
  requirements_not_in: [String!]
  requirements_lt: String
  requirements_lte: String
  requirements_gt: String
  requirements_gte: String
  requirements_contains: String
  requirements_not_contains: String
  requirements_starts_with: String
  requirements_not_starts_with: String
  requirements_ends_with: String
  requirements_not_ends_with: String
  objectives: String
  objectives_not: String
  objectives_in: [String!]
  objectives_not_in: [String!]
  objectives_lt: String
  objectives_lte: String
  objectives_gt: String
  objectives_gte: String
  objectives_contains: String
  objectives_not_contains: String
  objectives_starts_with: String
  objectives_not_starts_with: String
  objectives_ends_with: String
  objectives_not_ends_with: String
  batches_every: BatchWhereInput
  batches_some: BatchWhereInput
  batches_none: BatchWhereInput
  AND: [ClassroomWhereInput!]
  OR: [ClassroomWhereInput!]
  NOT: [ClassroomWhereInput!]
}

input ClassroomWhereUniqueInput {
  id: ID
}

scalar DateTime

type Lecture {
  id: ID!
  name: String!
  description: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  liveAt: DateTime!
  endAt: DateTime!
  teacher: User
  students(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  batch: Batch
  classroom: Classroom
}

type LectureConnection {
  pageInfo: PageInfo!
  edges: [LectureEdge]!
  aggregate: AggregateLecture!
}

input LectureCreateInput {
  name: String!
  description: String!
  liveAt: DateTime!
  endAt: DateTime!
  teacher: UserCreateOneInput
  students: UserCreateManyInput
  batch: BatchCreateOneWithoutLecturesInput
  classroom: ClassroomCreateOneInput
}

input LectureCreateManyWithoutBatchInput {
  create: [LectureCreateWithoutBatchInput!]
  connect: [LectureWhereUniqueInput!]
}

input LectureCreateWithoutBatchInput {
  name: String!
  description: String!
  liveAt: DateTime!
  endAt: DateTime!
  teacher: UserCreateOneInput
  students: UserCreateManyInput
  classroom: ClassroomCreateOneInput
}

type LectureEdge {
  node: Lecture!
  cursor: String!
}

enum LectureOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  liveAt_ASC
  liveAt_DESC
  endAt_ASC
  endAt_DESC
}

type LecturePreviousValues {
  id: ID!
  name: String!
  description: String!
  createdAt: DateTime!
  updatedAt: DateTime!
  liveAt: DateTime!
  endAt: DateTime!
}

input LectureScalarWhereInput {
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
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
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
  liveAt: DateTime
  liveAt_not: DateTime
  liveAt_in: [DateTime!]
  liveAt_not_in: [DateTime!]
  liveAt_lt: DateTime
  liveAt_lte: DateTime
  liveAt_gt: DateTime
  liveAt_gte: DateTime
  endAt: DateTime
  endAt_not: DateTime
  endAt_in: [DateTime!]
  endAt_not_in: [DateTime!]
  endAt_lt: DateTime
  endAt_lte: DateTime
  endAt_gt: DateTime
  endAt_gte: DateTime
  AND: [LectureScalarWhereInput!]
  OR: [LectureScalarWhereInput!]
  NOT: [LectureScalarWhereInput!]
}

type LectureSubscriptionPayload {
  mutation: MutationType!
  node: Lecture
  updatedFields: [String!]
  previousValues: LecturePreviousValues
}

input LectureSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LectureWhereInput
  AND: [LectureSubscriptionWhereInput!]
  OR: [LectureSubscriptionWhereInput!]
  NOT: [LectureSubscriptionWhereInput!]
}

input LectureUpdateInput {
  name: String
  description: String
  liveAt: DateTime
  endAt: DateTime
  teacher: UserUpdateOneInput
  students: UserUpdateManyInput
  batch: BatchUpdateOneWithoutLecturesInput
  classroom: ClassroomUpdateOneInput
}

input LectureUpdateManyDataInput {
  name: String
  description: String
  liveAt: DateTime
  endAt: DateTime
}

input LectureUpdateManyMutationInput {
  name: String
  description: String
  liveAt: DateTime
  endAt: DateTime
}

input LectureUpdateManyWithoutBatchInput {
  create: [LectureCreateWithoutBatchInput!]
  delete: [LectureWhereUniqueInput!]
  connect: [LectureWhereUniqueInput!]
  disconnect: [LectureWhereUniqueInput!]
  update: [LectureUpdateWithWhereUniqueWithoutBatchInput!]
  upsert: [LectureUpsertWithWhereUniqueWithoutBatchInput!]
  deleteMany: [LectureScalarWhereInput!]
  updateMany: [LectureUpdateManyWithWhereNestedInput!]
}

input LectureUpdateManyWithWhereNestedInput {
  where: LectureScalarWhereInput!
  data: LectureUpdateManyDataInput!
}

input LectureUpdateWithoutBatchDataInput {
  name: String
  description: String
  liveAt: DateTime
  endAt: DateTime
  teacher: UserUpdateOneInput
  students: UserUpdateManyInput
  classroom: ClassroomUpdateOneInput
}

input LectureUpdateWithWhereUniqueWithoutBatchInput {
  where: LectureWhereUniqueInput!
  data: LectureUpdateWithoutBatchDataInput!
}

input LectureUpsertWithWhereUniqueWithoutBatchInput {
  where: LectureWhereUniqueInput!
  update: LectureUpdateWithoutBatchDataInput!
  create: LectureCreateWithoutBatchInput!
}

input LectureWhereInput {
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
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
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
  liveAt: DateTime
  liveAt_not: DateTime
  liveAt_in: [DateTime!]
  liveAt_not_in: [DateTime!]
  liveAt_lt: DateTime
  liveAt_lte: DateTime
  liveAt_gt: DateTime
  liveAt_gte: DateTime
  endAt: DateTime
  endAt_not: DateTime
  endAt_in: [DateTime!]
  endAt_not_in: [DateTime!]
  endAt_lt: DateTime
  endAt_lte: DateTime
  endAt_gt: DateTime
  endAt_gte: DateTime
  teacher: UserWhereInput
  students_every: UserWhereInput
  students_some: UserWhereInput
  students_none: UserWhereInput
  batch: BatchWhereInput
  classroom: ClassroomWhereInput
  AND: [LectureWhereInput!]
  OR: [LectureWhereInput!]
  NOT: [LectureWhereInput!]
}

input LectureWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createBatch(data: BatchCreateInput!): Batch!
  updateBatch(data: BatchUpdateInput!, where: BatchWhereUniqueInput!): Batch
  updateManyBatches(data: BatchUpdateManyMutationInput!, where: BatchWhereInput): BatchPayload!
  upsertBatch(where: BatchWhereUniqueInput!, create: BatchCreateInput!, update: BatchUpdateInput!): Batch!
  deleteBatch(where: BatchWhereUniqueInput!): Batch
  deleteManyBatches(where: BatchWhereInput): BatchPayload!
  createClassroom(data: ClassroomCreateInput!): Classroom!
  updateClassroom(data: ClassroomUpdateInput!, where: ClassroomWhereUniqueInput!): Classroom
  updateManyClassrooms(data: ClassroomUpdateManyMutationInput!, where: ClassroomWhereInput): BatchPayload!
  upsertClassroom(where: ClassroomWhereUniqueInput!, create: ClassroomCreateInput!, update: ClassroomUpdateInput!): Classroom!
  deleteClassroom(where: ClassroomWhereUniqueInput!): Classroom
  deleteManyClassrooms(where: ClassroomWhereInput): BatchPayload!
  createLecture(data: LectureCreateInput!): Lecture!
  updateLecture(data: LectureUpdateInput!, where: LectureWhereUniqueInput!): Lecture
  updateManyLectures(data: LectureUpdateManyMutationInput!, where: LectureWhereInput): BatchPayload!
  upsertLecture(where: LectureWhereUniqueInput!, create: LectureCreateInput!, update: LectureUpdateInput!): Lecture!
  deleteLecture(where: LectureWhereUniqueInput!): Lecture
  deleteManyLectures(where: LectureWhereInput): BatchPayload!
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
  batch(where: BatchWhereUniqueInput!): Batch
  batches(where: BatchWhereInput, orderBy: BatchOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Batch]!
  batchesConnection(where: BatchWhereInput, orderBy: BatchOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BatchConnection!
  classroom(where: ClassroomWhereUniqueInput!): Classroom
  classrooms(where: ClassroomWhereInput, orderBy: ClassroomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Classroom]!
  classroomsConnection(where: ClassroomWhereInput, orderBy: ClassroomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClassroomConnection!
  lecture(where: LectureWhereUniqueInput!): Lecture
  lectures(where: LectureWhereInput, orderBy: LectureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Lecture]!
  lecturesConnection(where: LectureWhereInput, orderBy: LectureOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LectureConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  batch(where: BatchSubscriptionWhereInput): BatchSubscriptionPayload
  classroom(where: ClassroomSubscriptionWhereInput): ClassroomSubscriptionPayload
  lecture(where: LectureSubscriptionWhereInput): LectureSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  email: String!
  fid: String!
  role: UserRole
  description: String
  profession: String
  dpUrl: String
  teacherIn(where: ClassroomWhereInput, orderBy: ClassroomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Classroom!]
  studentIn(where: ClassroomWhereInput, orderBy: ClassroomOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Classroom!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
  fid: String!
  role: UserRole
  description: String
  profession: String
  dpUrl: String
  teacherIn: ClassroomCreateManyWithoutTeacherInput
  studentIn: ClassroomCreateManyWithoutStudentsInput
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateManyWithoutStudentInInput {
  create: [UserCreateWithoutStudentInInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutTeacherInInput {
  create: UserCreateWithoutTeacherInInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutStudentInInput {
  name: String!
  email: String!
  fid: String!
  role: UserRole
  description: String
  profession: String
  dpUrl: String
  teacherIn: ClassroomCreateManyWithoutTeacherInput
}

input UserCreateWithoutTeacherInInput {
  name: String!
  email: String!
  fid: String!
  role: UserRole
  description: String
  profession: String
  dpUrl: String
  studentIn: ClassroomCreateManyWithoutStudentsInput
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
  updatedAt_ASC
  updatedAt_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  fid_ASC
  fid_DESC
  role_ASC
  role_DESC
  description_ASC
  description_DESC
  profession_ASC
  profession_DESC
  dpUrl_ASC
  dpUrl_DESC
}

type UserPreviousValues {
  id: ID!
  createdAt: DateTime!
  updatedAt: DateTime!
  name: String!
  email: String!
  fid: String!
  role: UserRole
  description: String
  profession: String
  dpUrl: String
}

enum UserRole {
  TEACHER
  STUDENT
  ADMIN
}

input UserScalarWhereInput {
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
  fid: String
  fid_not: String
  fid_in: [String!]
  fid_not_in: [String!]
  fid_lt: String
  fid_lte: String
  fid_gt: String
  fid_gte: String
  fid_contains: String
  fid_not_contains: String
  fid_starts_with: String
  fid_not_starts_with: String
  fid_ends_with: String
  fid_not_ends_with: String
  role: UserRole
  role_not: UserRole
  role_in: [UserRole!]
  role_not_in: [UserRole!]
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  profession: String
  profession_not: String
  profession_in: [String!]
  profession_not_in: [String!]
  profession_lt: String
  profession_lte: String
  profession_gt: String
  profession_gte: String
  profession_contains: String
  profession_not_contains: String
  profession_starts_with: String
  profession_not_starts_with: String
  profession_ends_with: String
  profession_not_ends_with: String
  dpUrl: String
  dpUrl_not: String
  dpUrl_in: [String!]
  dpUrl_not_in: [String!]
  dpUrl_lt: String
  dpUrl_lte: String
  dpUrl_gt: String
  dpUrl_gte: String
  dpUrl_contains: String
  dpUrl_not_contains: String
  dpUrl_starts_with: String
  dpUrl_not_starts_with: String
  dpUrl_ends_with: String
  dpUrl_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
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

input UserUpdateDataInput {
  name: String
  email: String
  fid: String
  role: UserRole
  description: String
  profession: String
  dpUrl: String
  teacherIn: ClassroomUpdateManyWithoutTeacherInput
  studentIn: ClassroomUpdateManyWithoutStudentsInput
}

input UserUpdateInput {
  name: String
  email: String
  fid: String
  role: UserRole
  description: String
  profession: String
  dpUrl: String
  teacherIn: ClassroomUpdateManyWithoutTeacherInput
  studentIn: ClassroomUpdateManyWithoutStudentsInput
}

input UserUpdateManyDataInput {
  name: String
  email: String
  fid: String
  role: UserRole
  description: String
  profession: String
  dpUrl: String
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  fid: String
  role: UserRole
  description: String
  profession: String
  dpUrl: String
}

input UserUpdateManyWithoutStudentInInput {
  create: [UserCreateWithoutStudentInInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutStudentInInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutStudentInInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateOneInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutTeacherInInput {
  create: UserCreateWithoutTeacherInInput
  update: UserUpdateWithoutTeacherInDataInput
  upsert: UserUpsertWithoutTeacherInInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutStudentInDataInput {
  name: String
  email: String
  fid: String
  role: UserRole
  description: String
  profession: String
  dpUrl: String
  teacherIn: ClassroomUpdateManyWithoutTeacherInput
}

input UserUpdateWithoutTeacherInDataInput {
  name: String
  email: String
  fid: String
  role: UserRole
  description: String
  profession: String
  dpUrl: String
  studentIn: ClassroomUpdateManyWithoutStudentsInput
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpdateWithWhereUniqueWithoutStudentInInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutStudentInDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutTeacherInInput {
  update: UserUpdateWithoutTeacherInDataInput!
  create: UserCreateWithoutTeacherInInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithWhereUniqueWithoutStudentInInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutStudentInDataInput!
  create: UserCreateWithoutStudentInInput!
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
  fid: String
  fid_not: String
  fid_in: [String!]
  fid_not_in: [String!]
  fid_lt: String
  fid_lte: String
  fid_gt: String
  fid_gte: String
  fid_contains: String
  fid_not_contains: String
  fid_starts_with: String
  fid_not_starts_with: String
  fid_ends_with: String
  fid_not_ends_with: String
  role: UserRole
  role_not: UserRole
  role_in: [UserRole!]
  role_not_in: [UserRole!]
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  profession: String
  profession_not: String
  profession_in: [String!]
  profession_not_in: [String!]
  profession_lt: String
  profession_lte: String
  profession_gt: String
  profession_gte: String
  profession_contains: String
  profession_not_contains: String
  profession_starts_with: String
  profession_not_starts_with: String
  profession_ends_with: String
  profession_not_ends_with: String
  dpUrl: String
  dpUrl_not: String
  dpUrl_in: [String!]
  dpUrl_not_in: [String!]
  dpUrl_lt: String
  dpUrl_lte: String
  dpUrl_gt: String
  dpUrl_gte: String
  dpUrl_contains: String
  dpUrl_not_contains: String
  dpUrl_starts_with: String
  dpUrl_not_starts_with: String
  dpUrl_ends_with: String
  dpUrl_not_ends_with: String
  teacherIn_every: ClassroomWhereInput
  teacherIn_some: ClassroomWhereInput
  teacherIn_none: ClassroomWhereInput
  studentIn_every: ClassroomWhereInput
  studentIn_some: ClassroomWhereInput
  studentIn_none: ClassroomWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`
      }
    