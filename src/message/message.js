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
        this.message.reply(`🏓Latency is ${
            Date.now() - this.message.createdTimestamp
        }ms. API Latency is ${
            Math.round(this.client.ws.ping)
        }ms`).catch(console.log)
    }
}