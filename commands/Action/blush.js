const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "blush",
    category: "Action",
    description: "Let someone blush!",
    usage: "blush <username>",
    cooldown: 7,
    async execute(client, message, args) {
        try {
            const check = message.mentions.users.first()
            const author = message.author.username;
            const user = message.mentions.users.first().username
            if (!user) return message.lineReplyNoMention("Please mention someone.")
            if (check.id === message.author.id) return message.lineReplyNoMention('You can\'t let yourself blush.')
            const res = await fetch('https://shiro.gg/api/images/blush');
            const img = (await res.json()).url;
            const blush = new Discord.MessageEmbed()
                .setTitle(`**${author}** let **${user} blushing!** (°ー°〃)`, true)
                .setImage(img)
                .setColor('#FFC0CB')
            message.lineReplyNoMention(blush);
        } catch (error) {
            console.log(error);
            return message.lineReplyNoMention('Please mention someone.')
        }
    }
}