import { ButtonInteraction } from "discord.js";
import { RoleList } from "./rolelist";

export const AddRoleOnClick = (interaction: ButtonInteraction, args: Array<string>) => {
    if(args.length < 2){ return }

    interaction.deferUpdate().then(() => {
        const roleID = RoleList.get(args[0])
        if(!roleID){ return }

        interaction.guild.roles.fetch(roleID).then(role => {
            if(!role){ return }
            interaction.guild.members.fetch(args[1]).then(member => {
                if(!member){ return }

                member.roles.add(role).then(() => {
                    //Done adding role
                    //Maybe send notification in DM
                    interaction.message.delete().then(() => {
                        interaction.channel.send(`Added Role **${args[0].toUpperCase()}** to **${member.user.username}#${member.user.discriminator}**\nApproved by: <@${interaction.user.id}>`)
                        .catch(console.log)
                    }).catch(console.log)
                }).catch(console.log)
            }).catch(console.log)
        }).catch(console.log)
    }).catch(console.log)
}