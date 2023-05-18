import { Client, Message } from "discord.js";

class MessageHandler {
    /**
     * 
     * @param {Message} message 
     * @param {Client} client 
     */
    constructor(message, client){
        this.message = message;
        this.client = client
    }
    ping(){
        this.message.reply(`Pong ${this.client.ws.ping}ms`).catch(console.log)
    }
}