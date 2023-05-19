"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var import_discord = require("discord.js");
var import_express = __toESM(require("express"));
var dotenv = __toESM(require("dotenv"));
var import_message = require("./message/message");
var import_interaction = require("./commands/interaction");
var import_buttons = require("./buttons/buttons");
dotenv.config({ path: __dirname + "/../.env" });
const PORT = process.env.PORT || 3e3;
const PREFIX = process.env.PREFIX || "-";
const server = (0, import_express.default)();
const client = new import_discord.Client({ intents: [
  import_discord.GatewayIntentBits.Guilds,
  import_discord.GatewayIntentBits.GuildMessages,
  import_discord.GatewayIntentBits.MessageContent
] });
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("interactionCreate", async (interaction) => {
  if (interaction.isChatInputCommand()) {
    const commandHandler = new import_interaction.CommandInteractionHandler(interaction, client);
    let command = commandHandler[interaction.commandName.toLowerCase()];
    if (command) {
      command = command.bind(commandHandler);
      try {
        command();
      } catch (err) {
        console.log(err);
      }
    }
    return;
  }
  if (interaction.isButton()) {
    let args = interaction.customId.toLowerCase().split("_");
    if (!args.length) {
      return;
    }
    const actionName = args.shift();
    const buttonHandler = new import_buttons.ButtonInteractionHandler(interaction, args, client);
    let action = buttonHandler[actionName];
    if (action) {
      action = action.bind(buttonHandler);
      try {
        action();
        return;
      } catch (err) {
        console.log(err);
      }
    }
    return;
  }
  if (interaction.isAnySelectMenu()) {
    return;
  }
});
client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }
  if (!message.guild) {
    return;
  }
  if (!message.content) {
    return;
  }
  if (message.content.startsWith(PREFIX)) {
    let args = message.content.substring(PREFIX.length).toLowerCase().split(" ");
    if (!args.length) {
      return;
    }
    let commandName = args.shift();
    if (!commandName) {
      return;
    }
    const commandHandler = new import_message.MessageHandler(message, args, client);
    let command = commandHandler[commandName];
    if (command) {
      command = command.bind(commandHandler);
      try {
        command();
        return;
      } catch (err) {
        console.log(err);
      }
    }
  }
});
client.login(process.env.BOT_TOKEN || "");
server.get("/", (req, res) => {
  res.send("Online");
});
server.listen(PORT, () => {
  console.log(`Server Online on PORT ${PORT}`);
});
//# sourceMappingURL=main.js.map
