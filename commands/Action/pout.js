const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
    name: "pout",
    category: "Action",
    description: "Let someone pout!",
    usage: "pout <username>",
    cooldown: 7,
    async execute(client, message, args) {
        try {
            const check = message.mentions.users.first()
            const author = message.author.username;
            const user = message.mentions.users.first().username
            if (!user) return message.lineReplyNoMention("Please mention someone.")
            if (check.id === message.author.id) return message.lineReplyNoMention('Even though you can let yourself pout but it\'s bored, try let someone pout.')
            const res = await fetch('https://shiro.gg/api/images/pout');
            const img = (await res.json()).url;
            const pout = new Discord.MessageEmbed()
                .setTitle(`**${author}** let **${user}** pout! (●´ϖ\`●)`, true)
                .setImage(img)
                .setColor('#00FFFF')
            message.lineReplyNoMention(pout);
        } catch (error) {
            console.log(error);
            return message.lineReplyNoMention('Please mention someone.')
        }
    }
}