const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "invert",
    description: "invert gif",

    async execute(client, message, args) {

        const user = message.mentions.users.first() || message.author || client.users.cache.get(u => u.id === args[0])

        let avatar = user.displayAvatarURL({dynamic: false, format: "png", size: 4096});

        let image = await canvacord.Canvas.invert(avatar);

        let invert = new Discord.MessageAttachment(image, "invert.png")

        message.channel.send(invert);
    }
}
