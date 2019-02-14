const jwt = require('jsonwebtoken')
const APP_SECRET = 'GraphQL-is-aw3some'

function getUserId(context) {
	const Authorization = context.request.get('Authorization')
	if (Authorization) {
		const token = Authorization.replace('Bearer ', '')
		const { userId } = jwt.verify(token, APP_SECRET)
		return userId
	}

	throw new Error('Not authenticated')
}

async function isAdmin(context) {
	const isAdmin = await context.prisma.$exists.user({
		role: 'ADMIN',
		id: getUserId(context)
	})
	if (!isAdmin) {
		throw new Error(`You are not an admin`)
	}
	return
}

async function isTeacher(context, userId, classroomId, batchId, lectureId) {
	if (userId) {
		const isTeacher = await context.prisma.$exists.user({
			role: 'TEACHER',
			id: userId
		})
		if (!isTeacher) {
			throw new Error(`You are not a Teacher`)
		}
	}
	if (classroomId) {
		const isTeachersClassroom = await context.prisma.$exists.classroom({
			id: classroomId,
			teacher: { id: userId }
		})
		if (!isTeachersClassroom) {
			throw new Error(`This is not your classroom`)
		}
	}
	if (batchId) {
		const isTeachersBatch = await context.prisma.$exists.batch({
			id: batchId,
			teacher: { id: userId }
		})
		if (!isTeachersBatch) {
			throw new Error(`This is not your lecture`)
		}
	}
	if (lectureId) {
		const isTeachersClassroom = await context.prisma.$exists.lecture({
			id: lectureId,
			teacher: { id: userId }
		})
		if (!isTeachersClassroom) {
			throw new Error(`This is not your lecture`)
		}
	}
	return
}

async function isStudent(context, userId, batchId) {
	if (batchId) {
		const isStudentsBatch = await context.prisma.$exists.batch({
			id: batchId,
			students_some: {
				id: userId
			}
		})
		if (!isStudentsBatch) {
			throw new Error(`This is not your batch`)
		}
	}
	return
}
module.exports = {
	APP_SECRET,
	getUserId,
	isAdmin,
	isTeacher,
	isStudent
}
