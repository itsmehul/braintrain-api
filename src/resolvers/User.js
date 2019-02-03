function studentIn(parent, args, context) {
    return context.prisma.user({ id: parent.id }).studentIn()
  }
  
  function teacherIn(parent, args, context) {
    return context.prisma.user({ id: parent.id }).teacherIn()
  }
  
  module.exports = {
    teacherIn,
    studentIn
  }