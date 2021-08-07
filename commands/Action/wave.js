const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "wave",
    category: "Action",
    description: "Kill someone!",
    usage: "wave <username>",
    cooldown: 7,
    async execute(client, message, args) {
        try {
            const check = message.mentions.users.first()
            const author = message.author.username;
            const user = message.mentions.users.first().username
            if (!user) return message.lineReplyNoMention("Please mention someone.")
            if (check.id === message.author.id) return message.lineReplyNoMention('You want to wave to air?')
            const res = await fetch('https://waifu.pics/api/sfw/wave');
            const img = (await res.json()).url;
            const wave = new Discord.MessageEmbed()
                .setTitle(`**${author}** is waving to **${user}** owo`, true)
                .setImage(img)
                .setColor('#FF1493')
            message.lineReplyNoMention(wave);
        } catch (error) {
            console.log(error);
            return message.lineReplyNoMention('Please mention someone.')
        }
    }
}