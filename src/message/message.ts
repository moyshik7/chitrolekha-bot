import { Client, Message } from "discord.js";

export class MessageHandler {
    
    message: Message;
    args: Array<string>;
    client: Client;
    db: any; //Google madarchod kono type deynai ogor mayresudi

    constructor(message: Message, args: Array<string>, client: Client, db?: any){
        this.message = message;
        this.args = args;
        this.client = client
        this.db = db;
    }
    ping(){
        this.message.reply(`🏓Latency is ${
            Date.now() - this.message.createdTimestamp
        }ms. API Latency is ${
            Math.round(this.client.ws.ping)
        }ms`).catch(console.log)
    }
}