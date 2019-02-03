  function classrooms(parent, args, context, info) {
    return context.prisma.classrooms()
  }

  function users(parent, args, context, info) {
    return context.prisma.users()
  }
  
  module.exports = {
    classrooms,
    users
  }