"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Admin",
    embedded: false
  },
  {
    name: "AuthStatus",
    embedded: false
  },
  {
    name: "AvalibelTime",
    embedded: false
  },
  {
    name: "BasicTermInfo",
    embedded: false
  },
  {
    name: "Day",
    embedded: false
  },
  {
    name: "DetailTime",
    embedded: false
  },
  {
    name: "Gender",
    embedded: false
  },
  {
    name: "Invitation",
    embedded: false
  },
  {
    name: "InvitationStatus",
    embedded: false
  },
  {
    name: "Invitor",
    embedded: false
  },
  {
    name: "Level",
    embedded: false
  },
  {
    name: "LongTerm",
    embedded: false
  },
  {
    name: "Order",
    embedded: false
  },
  {
    name: "OrderStatus",
    embedded: false
  },
  {
    name: "Parent",
    embedded: false
  },
  {
    name: "ParentAuthInfo",
    embedded: false
  },
  {
    name: "SelectGender",
    embedded: false
  },
  {
    name: "ShortTerm",
    embedded: false
  },
  {
    name: "Student",
    embedded: false
  },
  {
    name: "StudentAuthInfo",
    embedded: false
  },
  {
    name: "StudentDetail",
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
    name: "TryOrder",
    embedded: false
  },
  {
    name: "University",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "emerContact",
    embedded: false
  },
  {
    name: "tryOrderStatus",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://47.107.67.70:4466/prisma-backend/dev-7`
});
exports.prisma = new exports.Prisma();
