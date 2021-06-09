const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "rainbow",
    aliases: ["gay"],
    cooldown: 7,
    description: "Let someone avatar become rainbow",
    usage: 'rainbow <username>',
    category: 'Image',

    async execute(client, message, args) {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.yauthor 

        let avatar = user.displayAvatarURL({dynamic: false, format: "png", size: 4096});

        let image = await canvacord.Canvas.rainbow(avatar);

        let rainbow = new Discord.MessageAttachment(image, "rainbow.png")

        message.channel.send(rainbow);
    }
}
