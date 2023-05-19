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
var message_exports = {};
__export(message_exports, {
  MessageHandler: () => MessageHandler
});
module.exports = __toCommonJS(message_exports);
class MessageHandler {
  constructor(message, args, client) {
    this.message = message;
    this.args = args;
    this.client = client;
  }
  ping() {
    this.message.reply(`\u{1F3D3}Latency is ${Date.now() - this.message.createdTimestamp}ms. API Latency is ${Math.round(this.client.ws.ping)}ms`).catch(console.log);
  }
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  MessageHandler
});
//# sourceMappingURL=message.js.map
