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

  module.exports = {
    classrooms,
    users,
    user,
    classroom
  }