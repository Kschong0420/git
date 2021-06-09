const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "wasted",
    description: "Someone is wasted.",
    cooldown: 10,
    usage: 'wasted <username>',
    category: 'Image',

    async execute(client, message, args) {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author 

        let avatar = user.user.displayAvatarURL({dynamic: false, format: "png"});

        let image = await canvacord.Canvas.wasted(avatar);

        let wasted = new Discord.MessageAttachment(image, "wasted.png")

        message.lineReplyNoMention(wasted);
    }
}
