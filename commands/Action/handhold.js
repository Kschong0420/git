const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "handhold",
    category: "Action",
    description: "Hold someone hand!",
    usage: "handhold <username>",
    cooldown: 7,
    async execute(client, message, args) {
        try {
            const check = message.mentions.users.first()
            const author = message.author.username;
            const user = message.mentions.users.first().username
            if (!user) return message.lineReplyNoMention("Please mention someone.")
            if (check.id === message.author.id) return message.lineReplyNoMention('Hold your hand yourself is bored LOL.')
            const res = await fetch('https://waifu.pics/api/sfw/handhold');
            const img = (await res.json()).url;
            const handhold = new Discord.MessageEmbed()
                .setTitle(`**${author}** is holding **${user}**'s hand! (>///<")`, true)
                .setImage(img)
                .setColor('#FF1493')
            message.lineReplyNoMention(handhold);
        } catch (error) {
            console.log(error);
            return message.lineReplyNoMention('Please mention someone.')
        }
    }
}