import {
    Client,
    GatewayIntentBits
} from 'discord.js';
import express from "express"
import dotenv from "dotenv"
import { MessageHandler } from './message/message.js';
import { CommandInteractionHandler } from './commands/interaction.js';


dotenv.config()
const PORT = process.env.PORT || 3000;
const PREFIX = process.env.PREFIX || "-";

const server = express()

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
    if(interaction.isChatInputCommand()){
        //Commands Handler
        const commandHandler = new CommandInteractionHandler(interaction, client)
        let command = commandHandler[interaction.commandName.toLowerCase()]
        if(command){
            command = command.bind(commandHandler)
            try {
                command();
                return;
            }catch(err){ console.log(err) }
        }
        return;
    }
    if(interaction.isButton()){
        //Button Handler
        return;
    }
    if(interaction.isAnySelectMenu()){
        //Dropdown Handler
        return;
    }
});


client.on("messageCreate", async message => {
    if(message.author.bot){ return }
    if(!message.guild){ return }
    if(!message.content){ return }

    if(message.content.startsWith(PREFIX)){
        let args = message.content.substring(PREFIX.length).toLowerCase().split(" ");
        if(!args.length){ return }
        let commandName = args.shift();
        if(!commandName){ return }

        const commandHandler = new MessageHandler(message, args, client);

        let command = commandHandler[commandName];
        if(command){
            command = command.bind(commandHandler);
            try {
                command();
                return;
            } catch (err){ console.log(err) }
        }
    }
})

client.login(process.env.BOT_TOKEN || "");

server.get('/', (req, res) => {
    res.send('Online')
})

server.listen(PORT, () => {
    console.log(`Server Online on PORT ${PORT}`)
})