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
  
  function lecture(parent, args, context, info) {
    return context.prisma.lecture({id:args.id})
  }

  function lectures(parent, args, context, info) {
    return context.prisma.lectures()
  }

  function batch(parent, args, context, info) {
    return context.prisma.batch({id:args.id})
  }

  function batches(parent, args, context, info) {
    return context.prisma.batches()
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
    classroom,
    lecture,
    lectures,
    batch,
    batches
  }