const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')
async function signup(parent, args, context, info) {
  // 1
  const fid = await bcrypt.hash(args.fid, 10)
  // 2
  const user = await context.prisma.createUser({ ...args, fid })

  // 3
  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  // 4
  return {
    token,
    user,
  }
}

async function login(parent, args, context, info) {
  // 1
  const user = await context.prisma.user({ email: args.email })
  if (!user) {
    throw new Error('No such user found')
  }

  // 2
  const valid = await bcrypt.compare(args.fid, user.fid)
  if (!valid) {
    throw new Error('Invalid fid')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  // 3
  return {
    token,
    user,
  }
}

async function createClassroom(parent, args, context) {
  const userId = getUserId(context)
  return context.prisma.createClassroom({
    teacher: { connect: { id: userId } },
    name: args.name,
    description: args.description,
    rating: 0,
    startsFrom:args.startsFrom,
    learning:args.learning,
    language: args.language,
    requirments:args.requirments,
    objectives:args.objectives,
    fee: args.fee
  })
}

async function createLecture(parent, args, context) {
  const userId = getUserId(context)
  const classroomExists = await context.prisma.$exists.classroom({
    teacher: { id: userId },
    id: args.classroomId 
  })
  if (!classroomExists) {
    throw new Error(`This is not your classroom`)
  }
  return context.prisma.createLecture({
    teacher: { connect: { id: userId } },
    name: args.name, 
    description: args.description, 
    liveAt: args.liveAt, 
    classroom:{ connect: { id: args.classroomId } }
  })
}

module.exports = {
  signup,
  login,
  createClassroom,
  createLecture
}