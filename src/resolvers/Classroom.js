function students(parent, args, context) {
    return context.prisma.classroom({ id: parent.id }).students()
  }
  
  function teacher(parent, args, context) {
    return context.prisma.classroom({ id: parent.id }).teacher()
  }
  
  function lectures(parent, args, context) {
    return context.prisma.classroom({ id: parent.id }).lectures()
  }

  module.exports = {
    teacher,
    students,
    lectures
  }