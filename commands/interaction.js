import { Client, CommandInteraction } from "discord.js";

export class CommandInteractionHandler {
    /**
     * Handle message commands
     * @param {CommandInteraction} interaction
     * @param {Client} client 
     */
    constructor(interaction, client){
        this.interaction = interaction;
        this.client = client;
    }
    ping(){
        this.message.reply(`🏓Latency is ${
            Date.now() - this.message.createdTimestamp
        }ms.`).catch(console.log)
    }
}