
  function teacher(parent, args, context) {
    return context.prisma.classroom({ id: parent.id }).teacher()
  }
  
  function batches(parent, args, context) {
    return context.prisma.classroom({ id: parent.id }).batches()
  }

  function students(parent, args, context) {
    return context.prisma.classroom({ id: parent.id }).students()
  }

  module.exports = {
    teacher,
    batches,
    students
  }