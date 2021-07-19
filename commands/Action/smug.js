const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "smug",
    category: "Action",
    description: "Smug.",
    usage: "smug",
    cooldown: 7,
    async execute(client, message, args) {
        try {
            const author = message.author.username;
            const res = await fetch('https://shiro.gg/api/images/smug');
            const img = (await res.json()).url;
            const smug = new Discord.MessageEmbed()
                .setTitle(`**${author}** smug :3`, true)
                .setImage(img)
                .setColor('#FF7F50')
            message.lineReplyNoMention(smug);
        } catch (error) {
            console.log(error);
            return message.lineReplyNoMention('Please mention someone.')
        }
    }
}