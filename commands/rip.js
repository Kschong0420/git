const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "rip",
    description: "rip gif",
    cooldown: 10,

    async execute(client, message, args) {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author 

        let avatar = user.user.displayAvatarURL({dynamic: false, format: "png"});

        let image = await canvacord.Canvas.rip(avatar);

        let rip = new Discord.MessageAttachment(image, "rip.png")

        message.channel.send(rip);
    }
}
