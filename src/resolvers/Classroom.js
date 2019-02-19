const { isTeacher, getUserId, isAdmin } = require('../utils')

function teacher(parent, args, context) {
	return context.prisma.classroom({ id: parent.id }).teacher()
}

function batches(parent, args, context) {
	return context.prisma.classroom({ id: parent.id }).batches()
}

function students(parent, args, context) {
	return context.prisma.classroom({ id: parent.id }).students()
}

async function myclass(parent, args, context) {
  const userId = getUserId(context)
  if(await isAdmin(context))return true
	return await context.prisma.$exists.classroom({
		AND:[{id: parent.id},
		{teacher: { id: userId }}]
	})
}

module.exports = {
	teacher,
	batches,
	students,
	myclass
}
