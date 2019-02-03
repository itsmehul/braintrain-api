function students(parent, args, context) {
    return context.prisma.classroom({ id: parent.id }).students()
  }
  
  function teacher(parent, args, context) {
    return context.prisma.classroom({ id: parent.id }).teacher()
  }
  
  module.exports = {
    teacher,
    students
  }