var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client.ts
var client_exports = {};
__export(client_exports, {
  Prisma: () => import_client.Prisma,
  dbSmartppdb: () => dbSmartppdb
});
module.exports = __toCommonJS(client_exports);
var import_client = require("@prisma/client");
var dbSmartppdb = global.prismaDbSmartppdb || new import_client.PrismaClient();
if (process.env.NODE_ENV !== "production")
  global.prismaDbSmartppdb = dbSmartppdb;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Prisma,
  dbSmartppdb
});
