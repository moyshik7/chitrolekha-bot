import { ActionRowBuilder, ButtonBuilder, ButtonStyle, Client, Colors, CommandInteraction, EmbedBuilder } from "discord.js";

export class CommandInteractionHandler {

    interaction: CommandInteraction;
    client: Client;
    db: any; //Google madarchod kono type deynai ogor mayresudi

    constructor(interaction: CommandInteraction, client: Client, db?: any){
        this.interaction = interaction;
        this.client = client;
        this.db = db;
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
        
        this.interaction.reply({
            components: [buttonRow],
            embeds: [embed]
        }).catch(console.log)
    }
    about(){
        const embed = new EmbedBuilder()
            .setTitle("চিত্রলেখা")
            .setThumbnail("https://images2.imgbox.com/c1/5c/3r0q45tc_o.jpg")
            .setDescription(`
আমরা ইতিবাচক পরিবর্তনে বিশ্বাসী। সে বিশ্বাস থেকেই মে-২০১৮ থেকে বর্তমান প্রজন্মের কিশোর বয়সীদের শিল্প-সাহিত্য ও সংস্কৃতির প্রতি অনুরাগী করে তুলতেই এই ক্ষুদ্র প্রয়াস।
\n
চিত্রলেখার একটি ত্রৈমাসিক ম্যাগাজিন যার প্রথম ৩টি সংখ্যা ছাপানো এবং এখনো পর্যন্ত তিনটি সাধারণ এবং একটি বিশেষ সংখ্যা অনলাইনে প্রকাশ পেয়েছে যা আমাদের ওয়েবসাইটে বিনামূল্যে পড়ার সুযোগ রয়েছে। এছাড়া চিত্রলেখার কয়েকটি সফল কার্যক্রম হলো সায়েদা খানম স্মরণে ১ম আলোকচিত্র উৎসব, কাব্যমঞ্চ, অক্ষরমিত্র এবং বেতারবাক্স।
            `)
            .setURL("https://www.facebook.com/chitrolekha200")
            .setColor(Colors.Red);

        this.interaction.reply({
            embeds: [embed]
        }).catch(console.log)
    }
    contact(){
        const embed = new EmbedBuilder()
            .setTitle("যোগাযোগেঃ")
            .setThumbnail("https://images2.imgbox.com/c1/5c/3r0q45tc_o.jpg")
            .setDescription(`
<:mail_logo:1108974613645508748><:blank:1108975128957694093><:blank:1108975128957694093>chitrolekha200@gmail.com

<:fb_logo:1108974235671613452><:blank:1108975128957694093><:blank:1108975128957694093>[facebook.com/chitrolekha200](https://www.facebook.com/chitrolekha200)

<:ig_logo:1108974447504937101><:blank:1108975128957694093><:blank:1108975128957694093>[instagram.com/chitrolekha200](https://www.instagram.com/chitrolekha200/)

<:tg_logo:1108974782415900713><:blank:1108975128957694093><:blank:1108975128957694093>[t.me/chitrolekha200](https://t.me/chitrolekha200)
            `)
            .setColor(Colors.Red);

        this.interaction.reply({
            embeds: [embed]
        }).catch(console.log)
    }
}