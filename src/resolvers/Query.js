const { getUserId } = require('../utils')

  function classrooms(parent, args, context, info) {
    return context.prisma.classrooms()
  }

  function users(parent, args, context, info) {
    return context.prisma.users()
  }

  function user(parent, args, context, info) {
    return context.prisma.user({id:args.id})
  }
  
  function classroom(parent, args, context, info) {
    return context.prisma.classroom({id:args.id})
  }

  function myprofile(parent, args, context, info) {
	const userId = getUserId(context) 
    return context.prisma.user({id:userId})
  }

  module.exports = {
    classrooms,
    myprofile,
    users,
    user,
    classroom
  }