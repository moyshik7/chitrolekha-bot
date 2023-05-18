import {
    Client,
    GatewayIntentBits
} from 'discord.js';
import express from "express"


const PORT = process.env.PORT || 3000;

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
  if (!interaction.isButton) return; //emne   --Shera!!

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN || "");

server.get('/', (req, res) => {
    res.send('Online')
})

server.listen(PORT, () => {
    console.log(`Server Online on PORT ${PORT}`)
})