import { Client, Message } from "discord.js";

export class MessageHandler {
    /**
     * Handle message commands
     * @param {Message} message 
     * @param {Array<string>} args
     * @param {Client} client 
     */
    constructor(message, args, client){
        this.message = message;
        this.args = args;
        this.client = client
    }
    ping(){
        this.message.reply(`Pong ${this.client.ws.ping}ms`).catch(console.log)
    }
}