import {
    Client,
    GatewayIntentBits
} from 'discord.js';
import express from "express"
import dotenv from "dotenv"
import { MessageHandler } from './message/message.js';


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
    if(!interaction.isButton) return;

    if (interaction.commandName === 'ping') {
        await interaction.reply('Pong!');
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

        let commandHandler = new MessageHandler(message, args, client);

        let command = commandHandler[commandName];
        if(command){
            command = command.bind(commandHandler);
            try {
                command();
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