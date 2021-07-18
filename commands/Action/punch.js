const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "punch",
    category: "Action",
    description: "Punch someone!",
    usage: "punch <username>",
    cooldown: 7,
    async execute(client, message, args) {
        try {
            const check = message.mentions.users.first()
            const author = message.author.username;
            const user = message.mentions.users.first().username
            if (!user) return message.lineReplyNoMention("Please mention someone.")
            if (check.id === message.author.id) return message.lineReplyNoMention('Don\'t punch yourself.')
            const res = await fetch('https://shiro.gg/api/images/punch');
            const img = (await res.json()).url;
            const punch = new Discord.MessageEmbed()
                .setTitle(`**${author}** is punching **${user}! PAIN** (@_@) `, true)
                .setImage(img)
                .setColor('#FF1493')
            message.lineReplyNoMention(punch);
        } catch (error) {
            console.log(error);
            return message.lineReplyNoMention('Please mention someone.')
        }
    }
}