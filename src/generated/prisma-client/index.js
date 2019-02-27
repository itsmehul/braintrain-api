"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Batch",
    embedded: false
  },
  {
    name: "Classroom",
    embedded: false
  },
  {
    name: "Lecture",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "UserRole",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://braintrain-service-f18cb7145b.herokuapp.com/braintrainapi/dev`
});
exports.prisma = new exports.Prisma();
