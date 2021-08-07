const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "kill",
    category: "Action",
    description: "Kill someone!",
    usage: "kill <username>",
    cooldown: 7,
    async execute(client, message, args) {
        try {
            const check = message.mentions.users.first()
            const author = message.author.username;
            const user = message.mentions.users.first().username
            if (!user) return message.lineReplyNoMention("Please mention someone.")
            if (check.id === message.author.id) return message.lineReplyNoMention('Don\'t commit suicide!')
            const res = await fetch('https://waifu.pics/api/sfw/kill');
            const img = (await res.json()).url;
            const kill = new Discord.MessageEmbed()
                .setTitle(`**${user}** has been killed by **${author}**! OTL`, true)
                .setImage(img)
                .setColor('#FF1493')
            message.lineReplyNoMention(kill);
        } catch (error) {
            console.log(error);
            return message.lineReplyNoMention('Please mention someone.')
        }
    }
}