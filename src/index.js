const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Classroom = require('./resolvers/Classroom')
const User = require('./resolvers/User')
const Batch = require('./resolvers/Batch')

const resolvers = {
    Query,
    Mutation,
    Classroom,
    User,
    Batch
  }


const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
      return {
        ...request,
        prisma,
      }
    },
  })
server.start(() => console.log(`Server is running on http://localhost:4000`))