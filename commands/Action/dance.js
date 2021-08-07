const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "dance",
    category: "Action",
    description: "It's my showtime!",
    usage: "dance",
    cooldown: 7,
    async execute(client, message, args) {
        try {
            const author = message.author.username;
            const res = await fetch('https://waifu.pics/api/sfw/dance');
            const img = (await res.json()).url;
            const dance = new Discord.MessageEmbed()
                .setTitle(`**${author}** is dancing >///<`, true)
                .setImage(img)
                .setColor('#4B0082')
            message.lineReplyNoMention(dance);
        } catch (error) {
            console.log(error);
            return message.lineReplyNoMention('An error occured.')
        }
    }
}