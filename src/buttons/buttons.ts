import { ActionRowBuilder, ButtonBuilder, ButtonInteraction, ButtonStyle, Client, Colors, EmbedBuilder } from "discord.js";
import { AddRoleOnClick } from "./func/addrole";


export class ButtonInteractionHandler{
    interaction: ButtonInteraction;
    args: Array<string>;
    client: Client;
    db: any; //Google madarchod kono type deynai ogor mayresudi

    constructor(interaction: ButtonInteraction, args: Array<string>, client: Client, db?: any){
        this.interaction = interaction;
        this.args = args;
        this.client = client;
        this.db = db;
    }
    addrole(){
        this.interaction.deferUpdate().catch(console.log)
        if(this.args.length < 2){ return }
        this.interaction.guild.channels.fetch("1108981275412406292").then(channel => {
            if(!channel){ return }
            if(!channel.isTextBased()){ return }
            this.interaction.guild.members.fetch(this.args[1]).then(member => {
                if(!member){ return }
                const embed = new EmbedBuilder()
                    .setTitle("Role Application")
                    .setDescription(`**${member.user.username}#${member.user.discriminator}** wants to join the **${this.args[0].toUpperCase()}** team\nPending approval`)
                    .setColor(Colors.Red);
                const row = new ActionRowBuilder()
                    .addComponents(new ButtonBuilder()
                        .setCustomId(`approve_${this.args[0]}_${this.args[1]}`)
                        .setStyle(ButtonStyle.Success)
                        .setLabel("Approve"),
                    new ButtonBuilder()
                        .setCustomId(`denyrequest_${this.args[0]}_${this.args[1]}`)
                        .setStyle(ButtonStyle.Danger)
                        .setLabel("Deny")
                    ) as ActionRowBuilder<ButtonBuilder>;
                channel.send({
                    embeds: [embed],
                    components: [row]
                }).catch(console.log)
            }).catch(console.log)
        }).catch(console.log)
    }
    approve(){
        AddRoleOnClick(this.interaction, this.args)
    }
    denyrequest(){
        this.interaction.deferUpdate().catch(console.log)
        this.interaction.message.delete().catch(console.log)

        //Maybe it will send "your request was denied" in DM
    }
}