import { ActionRowBuilder, ButtonBuilder, ButtonInteraction, ButtonStyle, Client, Colors, EmbedBuilder } from "discord.js";


export class ButtonInteractionHandler{
    /**
     * Handles Button interactions
     * @param {ButtonInteraction} interaction 
     * @param {Array<String>} args
     * @param {Client} client 
     */
    constructor(interaction, args, client){
        this.interaction = interaction;
        this.args = args;
        this.client = client;
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
                    );
                channel.send({
                    embeds: [embed],
                    components: [row]
                }).catch(console.log)
            }).catch(console.log)
        }).catch(console.log)
    }
}