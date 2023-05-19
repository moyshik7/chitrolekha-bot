import { Client, GatewayIntentBits } from 'discord.js';
import express from "express"
import * as dotenv from "dotenv";
import { initializeApp, cert } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore"
import { ServiceAccount } from 'firebase-admin';
import { MessageHandler } from './message/message';
import { CommandInteractionHandler } from './commands/interaction';
import { ButtonInteractionHandler } from './buttons/buttons';

dotenv.config({ path: __dirname+ '/../.env' })

const PORT = process.env.PORT || 3000;
const PREFIX = process.env.PREFIX || "-";

const server = express()

let firebaseConfig: ServiceAccount = {};
firebaseConfig.projectId = process.env.FIREBASE_PROJECT_ID;
firebaseConfig.clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
firebaseConfig.privateKey = process.env.FIREBASE_PRIVAE_KEY;

initializeApp({
    credential: cert(firebaseConfig)
});
const db = getFirestore();

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers
] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    
    /*client.guilds.cache.get("1102917645579321415").members.fetch().then(async (members) => {
        console.log("fetched members")
        for (let [key, value] of members) {
            let user: DatabaseBasicUserType = {
                id: value.user.id,
                roles: [],
                username: value.user.username
            };

            if(!value.user.bot){
                await db.collection('users').doc(user.id).set(user)
                console.log(`Saved for ${user.username}`)
            }
        }
    }).catch(console.log)*/
    
});

client.on('interactionCreate', async interaction => {
    if(interaction.isChatInputCommand()){
        //Commands Handler
        const commandHandler = new CommandInteractionHandler(interaction, client, db)
        let command = commandHandler[interaction.commandName.toLowerCase()]
        if(command){
            command = command.bind(commandHandler)
            try {
                command();
            }catch(err){ console.log(err) }
        }
        return;
    }
    if(interaction.isButton()){
        //Button Handler

        let args = interaction.customId.toLowerCase().split("_");
        if(!args.length){ return }

        const actionName = args.shift();

        const buttonHandler = new ButtonInteractionHandler(interaction, args, client, db)

        let action = buttonHandler[actionName]
        if(action){
            action = action.bind(buttonHandler)
            try {
                action();
                return;
            }catch(err){ console.log(err) }
        }
        return;
    }
    if(interaction.isAnySelectMenu()){
        //Dropdown Handler
        return;
    }
});


client.on("messageCreate", message => {
    if(message.author.bot){ return }
    if(!message.guild){ return }
    if(!message.content){ return }

    if(message.content.startsWith(PREFIX)){
        let args = message.content.substring(PREFIX.length).toLowerCase().split(" ");
        if(!args.length){ return }
        let commandName = args.shift();
        if(!commandName){ return }

        const commandHandler = new MessageHandler(message, args, client, db);

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
