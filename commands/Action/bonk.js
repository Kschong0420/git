const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "bonk",
    category: "Action",
    description: "Kill someone!",
    usage: "bonk <username>",
    cooldown: 7,
    async execute(client, message, args) {
        try {
            const check = message.mentions.users.first()
            const author = message.author.username;
            const user = message.mentions.users.first().username
            if (!user) return message.lineReplyNoMention("Please mention someone.")
            if (check.id === message.author.id) return message.lineReplyNoMention('Don\'t bonk yourself.')
            const res = await fetch('https://waifu.pics/api/sfw/bonk');
            const img = (await res.json()).url;
            const bonk = new Discord.MessageEmbed()
                .setTitle(`**${user}** has been bonked by **${author}** <:bonk:873652209345253426>`, true)
                .setImage(img)
                .setColor('#FF1493')
            message.lineReplyNoMention(bonk);
        } catch (error) {
            console.log(error);
            return message.lineReplyNoMention('Please mention someone.')
        }
    }
}