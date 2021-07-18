const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "lick",
    category: "Action",
    description: "Lick someone!",
    usage: "lick <username>",
    cooldown: 7,
    async execute(client, message, args) {
        try {
            const check = message.mentions.users.first()
            const author = message.author.username;
            const user = message.mentions.users.first().username
            if (!user) return message.lineReplyNoMention("Please mention someone.")
            if (check.id === message.author.id) return message.lineReplyNoMention('You can\'t lick yourself.')
            const res = await fetch('https://shiro.gg/api/images/lick');
            const img = (await res.json()).url;
            const lick = new Discord.MessageEmbed()
                .setTitle(`**${author}** is licking **${user}!** (>///<")`, true)
                .setImage(img)
                .setColor('#FF1493')
            message.lineReplyNoMention(lick);
        } catch (error) {
            console.log(error);
            return message.lineReplyNoMention('Please mention someone.')
        }
    }
}