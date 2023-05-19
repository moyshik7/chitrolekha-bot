import { ActionRowBuilder, ButtonBuilder, ButtonStyle, Client, CommandInteraction, EmbedBuilder } from "discord.js";

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
        if(this.interaction.user.id != "584309117380853770"){ return }

        const buttonRow = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId(`addrole_it_${this.interaction.user.id}`)
                    .setLabel(`IT Team`)
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId(`addrole_art_${this.interaction.user.id}`)
                    .setLabel(`Art Team`)
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId(`addrole_cultural_${this.interaction.user.id}`)
                    .setLabel(`Cultural Team`)
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId(`addrole_srijoni_${this.interaction.user.id}`)
                    .setLabel(`Srijoni Team`)
                    .setStyle(ButtonStyle.Success),
                new ButtonBuilder()
                    .setCustomId(`addrole_journalism_${this.interaction.user.id}`)
                    .setLabel(`Journalism Team`)
                    .setStyle(ButtonStyle.Success)
                
            );

        const embed = new EmbedBuilder()
            .setTitle("Pick your Team")
            .addFields([{
                name: "__**IT Team**__",
                value: "Anything about Computer :v I mean graphics, website, app egula banano/maintenance"
            }, {
                name: "\u200B",
                value: "\u200B"
            }, {
                name: "__**Art Team**__",
                value: "Art or Writing e skilled hole eikhane join kora jabe. Tomar regularly art/writing e time deya lagbe and magazine ber hoile oikhane tomar gula jabe + you have to judge submissions from outside"
            }, {
                name: "\u200B",
                value: "\u200B"
            }, {
                name: "__**Cultural Team**__",
                value: "Amra kopot er mayre sudi"
            }, {
                name: "\u200B",
                value: "\u200B"
            }, {
                name: "__**Srijoni Team**__",
                value: "mainly shob department er shobaike niye ekta sub committee. nothing else. Tui jekono dept er member hoilei tui srijoni team er member"
            }, {
                name: "\u200B",
                value: "\u200B"
            }, {
                name: "__**Journalism Team**__",
                value: "art and writing er motoi journalism e. just informative articles niye."
            }])
            .setThumbnail("https://images2.imgbox.com/c1/5c/3r0q45tc_o.jpg")
        
        this.interaction.reply({
            content: "Apply for roles from this list",
            components: [buttonRow],
            embeds: [embed]
        })
    }
}