const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "sleep",
    category: "Action",
    description: "Goodnight.",
    usage: "sleep",
    cooldown: 7,
    async execute(client, message, args) {
        try {
            const author = message.author.username;
            const res = await fetch('https://shiro.gg/api/images/sleep');
            const img = (await res.json()).url;
            const sleep = new Discord.MessageEmbed()
                .setTitle(`**${author}** is sleeping tight :3`, true)
                .setImage(img)
                .setColor('#4B0082')
            message.lineReplyNoMention(sleep);
        } catch (error) {
            console.log(error);
            return message.lineReplyNoMention('Please mention someone.')
        }
    }
}