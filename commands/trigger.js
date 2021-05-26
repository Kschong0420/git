const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "trigger",
    description: "Trigger gif",
    cooldown: 10,

    async execute(client, message, args) {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 

        let avatar = user.user.displayAvatarURL({dynamic: false, format: "png"});

        let image = await canvacord.Canvas.trigger(avatar);

        let triggered = new Discord.MessageAttachment(image, "triggered.gif")

        message.lineReplyNoMention(triggered);
    }
}
