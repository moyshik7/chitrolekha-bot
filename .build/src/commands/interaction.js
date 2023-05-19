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
var interaction_exports = {};
__export(interaction_exports, {
  CommandInteractionHandler: () => CommandInteractionHandler
});
module.exports = __toCommonJS(interaction_exports);
var import_discord = require("discord.js");
class CommandInteractionHandler {
  constructor(interaction, client) {
    this.interaction = interaction;
    this.client = client;
  }
  ping() {
    if (this.interaction.user.id != "584309117380853770") {
      return;
    }
    const buttonRow = new import_discord.ActionRowBuilder().addComponents(
      new import_discord.ButtonBuilder().setCustomId(`addrole_it_${this.interaction.user.id}`).setLabel(`IT Team`).setStyle(import_discord.ButtonStyle.Success),
      new import_discord.ButtonBuilder().setCustomId(`addrole_art_${this.interaction.user.id}`).setLabel(`Art Team`).setStyle(import_discord.ButtonStyle.Success),
      new import_discord.ButtonBuilder().setCustomId(`addrole_cultural_${this.interaction.user.id}`).setLabel(`Cultural Team`).setStyle(import_discord.ButtonStyle.Success),
      new import_discord.ButtonBuilder().setCustomId(`addrole_srijoni_${this.interaction.user.id}`).setLabel(`Srijoni Team`).setStyle(import_discord.ButtonStyle.Success),
      new import_discord.ButtonBuilder().setCustomId(`addrole_journalism_${this.interaction.user.id}`).setLabel(`Journalism Team`).setStyle(import_discord.ButtonStyle.Success)
    );
    const embed = new import_discord.EmbedBuilder().setTitle("Pick your Team").addFields([{
      name: "__**IT Team**__",
      value: "Anything about Computer :v I mean graphics, website, app egula banano/maintenance"
    }, {
      name: "\u200B",
      value: "\u200B"
    }, {
      name: "__**Art Team**__",
      value: "Art or Writing e skilled hole eikhane join kora jabe. Tomar regularly art/writing e time deya lagbe and magazine ber hoile oikhane tomar gula jabe + you have to judge submissions from outside"
    }, {
      name: "\u200B",
      value: "\u200B"
    }, {
      name: "__**Cultural Team**__",
      value: "Amra kopot er mayre sudi"
    }, {
      name: "\u200B",
      value: "\u200B"
    }, {
      name: "__**Srijoni Team**__",
      value: "mainly shob department er shobaike niye ekta sub committee. nothing else. Tui jekono dept er member hoilei tui srijoni team er member"
    }, {
      name: "\u200B",
      value: "\u200B"
    }, {
      name: "__**Journalism Team**__",
      value: "art and writing er motoi journalism e. just informative articles niye."
    }]).setThumbnail("https://images2.imgbox.com/c1/5c/3r0q45tc_o.jpg").setColor(import_discord.Colors.Red);
    this.interaction.reply({
      components: [buttonRow],
      embeds: [embed]
    }).catch(console.log);
  }
  about() {
    const embed = new import_discord.EmbedBuilder().setTitle("\u099A\u09BF\u09A4\u09CD\u09B0\u09B2\u09C7\u0996\u09BE").setThumbnail("https://images2.imgbox.com/c1/5c/3r0q45tc_o.jpg").setDescription(`
\u0986\u09AE\u09B0\u09BE \u0987\u09A4\u09BF\u09AC\u09BE\u099A\u0995 \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8\u09C7 \u09AC\u09BF\u09B6\u09CD\u09AC\u09BE\u09B8\u09C0\u0964 \u09B8\u09C7 \u09AC\u09BF\u09B6\u09CD\u09AC\u09BE\u09B8 \u09A5\u09C7\u0995\u09C7\u0987 \u09AE\u09C7-\u09E8\u09E6\u09E7\u09EE \u09A5\u09C7\u0995\u09C7 \u09AC\u09B0\u09CD\u09A4\u09AE\u09BE\u09A8 \u09AA\u09CD\u09B0\u099C\u09A8\u09CD\u09AE\u09C7\u09B0 \u0995\u09BF\u09B6\u09CB\u09B0 \u09AC\u09DF\u09B8\u09C0\u09A6\u09C7\u09B0 \u09B6\u09BF\u09B2\u09CD\u09AA-\u09B8\u09BE\u09B9\u09BF\u09A4\u09CD\u09AF \u0993 \u09B8\u0982\u09B8\u09CD\u0995\u09C3\u09A4\u09BF\u09B0 \u09AA\u09CD\u09B0\u09A4\u09BF \u0985\u09A8\u09C1\u09B0\u09BE\u0997\u09C0 \u0995\u09B0\u09C7 \u09A4\u09C1\u09B2\u09A4\u09C7\u0987 \u098F\u0987 \u0995\u09CD\u09B7\u09C1\u09A6\u09CD\u09B0 \u09AA\u09CD\u09B0\u09DF\u09BE\u09B8\u0964


\u099A\u09BF\u09A4\u09CD\u09B0\u09B2\u09C7\u0996\u09BE\u09B0 \u098F\u0995\u099F\u09BF \u09A4\u09CD\u09B0\u09C8\u09AE\u09BE\u09B8\u09BF\u0995 \u09AE\u09CD\u09AF\u09BE\u0997\u09BE\u099C\u09BF\u09A8 \u09AF\u09BE\u09B0 \u09AA\u09CD\u09B0\u09A5\u09AE \u09E9\u099F\u09BF \u09B8\u0982\u0996\u09CD\u09AF\u09BE \u099B\u09BE\u09AA\u09BE\u09A8\u09CB \u098F\u09AC\u0982 \u098F\u0996\u09A8\u09CB \u09AA\u09B0\u09CD\u09AF\u09A8\u09CD\u09A4 \u09A4\u09BF\u09A8\u099F\u09BF \u09B8\u09BE\u09A7\u09BE\u09B0\u09A3 \u098F\u09AC\u0982 \u098F\u0995\u099F\u09BF \u09AC\u09BF\u09B6\u09C7\u09B7 \u09B8\u0982\u0996\u09CD\u09AF\u09BE \u0985\u09A8\u09B2\u09BE\u0987\u09A8\u09C7 \u09AA\u09CD\u09B0\u0995\u09BE\u09B6 \u09AA\u09C7\u09DF\u09C7\u099B\u09C7 \u09AF\u09BE \u0986\u09AE\u09BE\u09A6\u09C7\u09B0 \u0993\u09DF\u09C7\u09AC\u09B8\u09BE\u0987\u099F\u09C7 \u09AC\u09BF\u09A8\u09BE\u09AE\u09C2\u09B2\u09CD\u09AF\u09C7 \u09AA\u09DC\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09B0\u09DF\u09C7\u099B\u09C7\u0964 \u098F\u099B\u09BE\u09DC\u09BE \u099A\u09BF\u09A4\u09CD\u09B0\u09B2\u09C7\u0996\u09BE\u09B0 \u0995\u09DF\u09C7\u0995\u099F\u09BF \u09B8\u09AB\u09B2 \u0995\u09BE\u09B0\u09CD\u09AF\u0995\u09CD\u09B0\u09AE \u09B9\u09B2\u09CB \u09B8\u09BE\u09DF\u09C7\u09A6\u09BE \u0996\u09BE\u09A8\u09AE \u09B8\u09CD\u09AE\u09B0\u09A3\u09C7 \u09E7\u09AE \u0986\u09B2\u09CB\u0995\u099A\u09BF\u09A4\u09CD\u09B0 \u0989\u09CE\u09B8\u09AC, \u0995\u09BE\u09AC\u09CD\u09AF\u09AE\u099E\u09CD\u099A, \u0985\u0995\u09CD\u09B7\u09B0\u09AE\u09BF\u09A4\u09CD\u09B0 \u098F\u09AC\u0982 \u09AC\u09C7\u09A4\u09BE\u09B0\u09AC\u09BE\u0995\u09CD\u09B8\u0964
            `).setURL("https://www.facebook.com/chitrolekha200").setColor(import_discord.Colors.Red);
    this.interaction.reply({
      embeds: [embed]
    }).catch(console.log);
  }
  contact() {
    const embed = new import_discord.EmbedBuilder().setTitle("\u09AF\u09CB\u0997\u09BE\u09AF\u09CB\u0997\u09C7\u0983").setThumbnail("https://images2.imgbox.com/c1/5c/3r0q45tc_o.jpg").setDescription(`
<:mail_logo:1108974613645508748><:blank:1108975128957694093><:blank:1108975128957694093>chitrolekha200@gmail.com

<:fb_logo:1108974235671613452><:blank:1108975128957694093><:blank:1108975128957694093>[facebook.com/chitrolekha200](https://www.facebook.com/chitrolekha200)

<:ig_logo:1108974447504937101><:blank:1108975128957694093><:blank:1108975128957694093>[instagram.com/chitrolekha200](https://www.instagram.com/chitrolekha200/)

<:tg_logo:1108974782415900713><:blank:1108975128957694093><:blank:1108975128957694093>[t.me/chitrolekha200](https://t.me/chitrolekha200)
            `).setColor(import_discord.Colors.Red);
    this.interaction.reply({
      embeds: [embed]
    }).catch(console.log);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CommandInteractionHandler
});
//# sourceMappingURL=interaction.js.map
