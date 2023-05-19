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
var buttons_exports = {};
__export(buttons_exports, {
  ButtonInteractionHandler: () => ButtonInteractionHandler
});
module.exports = __toCommonJS(buttons_exports);
var import_discord = require("discord.js");
var import_addrole = require("./func/addrole");
class ButtonInteractionHandler {
  constructor(interaction, args, client) {
    this.interaction = interaction;
    this.args = args;
    this.client = client;
  }
  addrole() {
    this.interaction.deferUpdate().catch(console.log);
    if (this.args.length < 2) {
      return;
    }
    this.interaction.guild.channels.fetch("1108981275412406292").then((channel) => {
      if (!channel) {
        return;
      }
      if (!channel.isTextBased()) {
        return;
      }
      this.interaction.guild.members.fetch(this.args[1]).then((member) => {
        if (!member) {
          return;
        }
        const embed = new import_discord.EmbedBuilder().setTitle("Role Application").setDescription(`**${member.user.username}#${member.user.discriminator}** wants to join the **${this.args[0].toUpperCase()}** team
Pending approval`).setColor(import_discord.Colors.Red);
        const row = new import_discord.ActionRowBuilder().addComponents(
          new import_discord.ButtonBuilder().setCustomId(`approve_${this.args[0]}_${this.args[1]}`).setStyle(import_discord.ButtonStyle.Success).setLabel("Approve"),
          new import_discord.ButtonBuilder().setCustomId(`denyrequest_${this.args[0]}_${this.args[1]}`).setStyle(import_discord.ButtonStyle.Danger).setLabel("Deny")
        );
        channel.send({
          embeds: [embed],
          components: [row]
        }).catch(console.log);
      }).catch(console.log);
    }).catch(console.log);
  }
  approve() {
    (0, import_addrole.AddRoleOnClick)(this.interaction, this.args);
  }
  denyrequest() {
    this.interaction.deferUpdate().catch(console.log);
    this.interaction.message.delete().catch(console.log);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ButtonInteractionHandler
});
//# sourceMappingURL=buttons.js.map
