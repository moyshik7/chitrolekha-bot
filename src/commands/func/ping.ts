import { ActionRowBuilder, ButtonBuilder, ButtonStyle, Colors, CommandInteraction, EmbedBuilder } from "discord.js";



export const PingCommand = (interaction: CommandInteraction) => {
    try {
        if(interaction.user.id === "584309117380853770"){
            const buttonRow = new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId(`addrole_it_${interaction.user.id}`)
                        .setLabel(`IT Team`)
                        .setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
                        .setCustomId(`addrole_art_${interaction.user.id}`)
                        .setLabel(`Art Team`)
                        .setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
                        .setCustomId(`addrole_cultural_${interaction.user.id}`)
                        .setLabel(`Cultural Team`)
                        .setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
                        .setCustomId(`addrole_srijoni_${interaction.user.id}`)
                        .setLabel(`Srijoni Team`)
                        .setStyle(ButtonStyle.Success),
                    new ButtonBuilder()
                        .setCustomId(`addrole_journalism_${interaction.user.id}`)
                        .setLabel(`Journalism Team`)
                        .setStyle(ButtonStyle.Success)
                
                ) as ActionRowBuilder<ButtonBuilder>;

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
                .setColor(Colors.Red);
        
            interaction.reply({
                components: [buttonRow],
                embeds: [embed]
            }).catch(console.log)
        } else {
            interaction.reply("pong")
        }
    } catch(err){ console.log(err) }
}