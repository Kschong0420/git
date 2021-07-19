const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "pout",
    category: "Action",
    description: "Let yourself or someone pout!",
    usage: "pout [username]",
    cooldown: 7,
    async execute(client, message, args) {
        try {
            const check = message.mentions.users.first()
            const author = message.author.username;
            const res = await fetch('https://shiro.gg/api/images/pout');
            const img = (await res.json()).url;
            if (check) {
                if (check.id === message.author.id) {
                    const pout = new Discord.MessageEmbed()
                        .setTitle(`**${author}** is pouting! (●´ϖ\`●)`, true)
                        .setImage(img)
                        .setColor('#00FFFF')
                    message.lineReplyNoMention(pout)
                } else {
                    const user = message.mentions.users.first().username
                    const pout = new Discord.MessageEmbed()
                        .setTitle(`**${author}** let **${user}** pout! (●´ϖ\`●)`, true)
                        .setImage(img)
                        .setColor('#00FFFF')
                    message.lineReplyNoMention(pout)
                }
            } if (!check) {
                const pout = new Discord.MessageEmbed()
                    .setTitle(`**${author}** is pouting! (●´ϖ\`●)`, true)
                    .setImage(img)
                    .setColor('#00FFFF')
                message.lineReplyNoMention(pout)
            }
        } catch (error) {
            console.log(error);
            return message.lineReplyNoMention('Please mention someone.')
        }
    }
}