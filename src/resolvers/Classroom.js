
  function teacher(parent, args, context) {
    return context.prisma.classroom({ id: parent.id }).teacher()
  }
  
  function batches(parent, args, context) {
    return context.prisma.classroom({ id: parent.id }).batches()
  }

  module.exports = {
    teacher,
    batches
  }