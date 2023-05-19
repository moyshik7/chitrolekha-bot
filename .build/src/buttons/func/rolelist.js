"use strict";
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
var rolelist_exports = {};
__export(rolelist_exports, {
  RoleList: () => RoleList
});
module.exports = __toCommonJS(rolelist_exports);
const RoleList = /* @__PURE__ */ new Map();
RoleList.set("it", "1104038767540572290");
RoleList.set("art", "1104053490269036575");
RoleList.set("cultural", "1104040905683509380");
RoleList.set("srijoni", "1104053186127462420");
RoleList.set("journalism", "1104053380101439540");
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RoleList
});
//# sourceMappingURL=rolelist.js.map
