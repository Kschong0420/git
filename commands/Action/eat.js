const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "eat",
    category: "Action",
    description: "Nom Nom Nom.",
    usage: "eat",
    cooldown: 7,
    async execute(client, message, args) {
        try {
            const author = message.author.username;
            const res = await fetch('https://shiro.gg/api/images/nom');
            const img = (await res.json()).url;
            const eat = new Discord.MessageEmbed()
                .setTitle(`**${author}** is eating cutely :3`, true)
                .setImage(img)
                .setColor('#4B0082')
            message.lineReplyNoMention(eat);
        } catch (error) {
            console.log(error);
            return message.lineReplyNoMention('Please mention someone.')
        }
    }
}