"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Invitation",
    embedded: false
  },
  {
    name: "Level",
    embedded: false
  },
  {
    name: "Parents",
    embedded: false
  },
  {
    name: "Status",
    embedded: false
  },
  {
    name: "Student",
    embedded: false
  },
  {
    name: "Subject",
    embedded: false
  },
  {
    name: "SubjectName",
    embedded: false
  },
  {
    name: "University",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://47.107.67.70:4466/prisma-backend/dev`
});
exports.prisma = new exports.Prisma();
