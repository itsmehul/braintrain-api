const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId, isAdmin, isTeacher, isStudent } = require('../utils')
async function signup(parent, args, context, info) {
	// 1
	const fid = await bcrypt.hash(args.fid, 10)
	// 2
	const user = await context.prisma.createUser({
		...args,
		fid,
		role: 'TEACHER'
	})

	// 3
	const token = jwt.sign({ userId: user.id }, APP_SECRET)

	// 4
	return {
		token,
		user
	}
}

async function login(parent, args, context, info) {
	// 1
	const user = await context.prisma.user({ email: args.email })
	if (!user) {
		throw new Error('No such user found')
	}

	// 2
	// const valid = await bcrypt.compare(args.fid, user.fid)
	// if (!valid) {
	// 	throw new Error('Invalid fid')
	// }

	const token = jwt.sign({ userId: user.id }, APP_SECRET)

	// 3
	return {
		token,
		user
	}
}

async function createClassroom(parent, args, context) {
	const userId = getUserId(context)

	await isTeacher(context, userId)
	return context.prisma.createClassroom({
		teacher: { connect: { id: userId } },
		name: args.name,
		description: args.description,
		learning: args.learning,
		language: args.language,
		requirments: args.requirments,
		objectives: args.objectives
	})
}

async function createBatch(parent, args, context) {
	const userId = getUserId(context)

	await isTeacher(context, userId, args.classroomId)

	const userId = getUserId(context)
	return context.prisma.createBatch({
		teacher: { connect: { id: userId } },
		classroom: { connect: { id: args.classroomId } },
		name: args.name,
		description: args.description,
		learning: args.learning,
		language: args.language,
		requirments: args.requirments,
		objectives: args.objectives
	})
}

async function createLecture(parent, args, context) {
	const userId = getUserId(context)
	await isTeacher(context, userId, args.classroomId)

	return context.prisma.createLecture({
		teacher: { connect: { id: userId } },
		name: args.name,
		description: args.description,
		liveAt: args.liveAt,
		endAt: args.endAt,
		batch: { connect: { id: args.batchId } },
		classroom: { connect: { id: args.classroomId } }
	})
}

async function updateLecture(parent, args, context) {
	const userId = getUserId(context)
	const { lectureId, ...rest } = { ...args }
	await isTeacher(context, userId, null, null, lectureId)
	return context.prisma.updateLecture({
		data: {
			...rest
		},
		where: {
			id: lectureId
		}
	})
}

async function updateBatch(parent, args, context) {
	const userId = getUserId(context)
	const { batchId, ...rest } = { ...args }
	await isTeacher(context, userId, null, batchId)
	return context.prisma.updateBatch({
		data: {
			...rest
		},
		where: {
			id: batchId
		}
	})
}

async function updateClassroom(parent, args, context) {
	const userId = getUserId(context)
	const { classroomId, ...rest } = { ...args }
	await isTeacher(context, userId, classroomId)
	return context.prisma.updateLecture({
		data: {
			...rest
		},
		where: {
			id: classroomId
		}
	})
}

async function updateUser(parent, args, context) {
	return context.prisma.updateUser({
		data: {
			...args
		},
		where: {
			id: getUserId(context)
		}
	})
}

async function promoteUser(parent, args, context) {
	await isAdmin(context)

	return context.prisma.updateUser({
		data: {
			role: 'TEACHER'
		},
		where: {
			email: args.email
		}
	})
}

async function joinBatch(parent, args, context) {
	const userId = getUserId(context)

	return context.prisma.updateBatch({
		data: {
			students: { connect: { id: userId } }
		},
		where: {
			id: args.batchId
		}
	})
}

async function joinLiveLecture(parent, args, context) {
	const userId = getUserId(context)
	await isStudent(context,userId,args.batchId)
	return context.prisma.updateLecture({
		data: {
			students: { connect: { id: userId } }
		},
		where: {
			id: args.lectureId
		}
	})
}

module.exports = {
	signup,
	login,
	createClassroom,
	promoteUser,
	createLecture,
	updateUser,
	createBatch,
	updateBatch,
	updateClassroom,
	updateLecture,
	joinBatch,
	joinLiveLecture
}
