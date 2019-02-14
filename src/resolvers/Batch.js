function students(parent, args, context) {
    return context.prisma.batch({ id: parent.id }).students()
  }

  function teacher(parent, args, context) {
    return context.prisma.batch({ id: parent.id }).teacher()
  }
  
  function lectures(parent, args, context) {
    return context.prisma.batch({ id: parent.id }).lectures()
  }

  module.exports = {
    students,
    lectures,
    teacher
  }