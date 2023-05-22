import { Client, CommandInteraction, EmbedBuilder} from "discord.js";



export const SubmitCommand = (interaction: CommandInteraction, client: Client) => {
    try {
        const text = interaction.options.get("text").value
        const title = interaction.options.get("title").value || "N/A"

        client.channels.fetch("1110184084015169680").then(channel => {
            if(channel.isTextBased()){
                const embed = new EmbedBuilder()
                    .setTitle(title as string)
                    .addFields([{
                        name: "**Submitted By:**",
                        value: `__**${interaction.user.username}#${interaction.user.discriminator}**__`
                    }, { 
                        name: '\u200b', 
                        value: '\u200b' 
                    }, { 
                        name: '\u200b', 
                        value: '\u200b' 
                    }])
                    .setDescription(text as string)
                    .setTimestamp()
                    .setThumbnail(interaction.user.displayAvatarURL({ size: 512 }))
                channel.send({
                    embeds: [embed]
                })
            }
        }).catch(console.log)
    } catch(err){ console.log(err) }
}

/*
{
    "name": "submit",
    "description": "Submit content through this command",
    "type": 1,
    "options": [{
        "name": "text",
        "description": "The content you want to submit",
        "type": 3,
        "required": true
    }, {
        "name": "title",
        "description": "Title for the content",
        "type": 3,
        "required": false
    }]
}
*/