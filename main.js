import {
    Client,
    GatewayIntentBits
} from 'discord.js';
import express from "express"
import dotenv from "dotenv"


const PORT = process.env.PORT || 3000;
dotenv.config()

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
    if(!message.content){ return }

    if(message.content.toLowerCase().includes("kopot")){
        let count = 0;
        let interval = setInterval(() => {
            if(count >= 10){
                clearInterval(interval)
            }
            count += 1;
            message.reply({
                content: "<@851753629149167657> er mayresudi"
            }).catch(console.log)
        }, 1000)
    }
})

client.login(process.env.BOT_TOKEN || "");

server.get('/', (req, res) => {
    res.send('Online')
})

server.listen(PORT, () => {
    console.log(`Server Online on PORT ${PORT}`)
})