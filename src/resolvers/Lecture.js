
  function teacher(parent, args, context) {
    return context.prisma.lecture({ id: parent.id }).teacher()
  }
  
  function classroom(parent, args, context) {
    return context.prisma.lecture({ id: parent.id }).classroom()
  }

  function students(parent, args, context) {
    return context.prisma.lecture({ id: parent.id }).students()
  }

  module.exports = {
    teacher,
    classroom,
    students
  }