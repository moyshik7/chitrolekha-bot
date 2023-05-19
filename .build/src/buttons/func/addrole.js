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
var addrole_exports = {};
__export(addrole_exports, {
  AddRoleOnClick: () => AddRoleOnClick
});
module.exports = __toCommonJS(addrole_exports);
var import_rolelist = require("./rolelist");
const AddRoleOnClick = (interaction, args) => {
  if (args.length < 2) {
    return;
  }
  interaction.deferUpdate().then(() => {
    const roleID = import_rolelist.RoleList.get(args[0]);
    if (!roleID) {
      return;
    }
    interaction.guild.roles.fetch(roleID).then((role) => {
      if (!role) {
        return;
      }
      interaction.guild.members.fetch(args[1]).then((member) => {
        if (!member) {
          return;
        }
        member.roles.add(role).then(() => {
          interaction.message.delete().then(() => {
            interaction.channel.send(`Added Role **${args[0].toUpperCase()}** to **${member.user.username}#${member.user.discriminator}**`).catch(console.log);
          }).catch(console.log);
        }).catch(console.log);
      }).catch(console.log);
    }).catch(console.log);
  }).catch(console.log);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AddRoleOnClick
});
//# sourceMappingURL=addrole.js.map
