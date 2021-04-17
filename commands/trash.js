const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "trash",
    description: "trash gif",

    async execute(client, message, args) {

        const user = message.mentions.users.first() || message.author || client.users.cache.get(u => u.id === args[0])

        let avatar = user.displayAvatarURL({dynamic: false, format: "png"});

        let image = await canvacord.Canvas.trash(avatar);

        let trash = new Discord.MessageAttachment(image, "trash.png")

        message.channel.send(trash);
    }
}
