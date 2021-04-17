const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "hitler",
    description: "hitler gif",

    async execute(client, message, args) {

        const user = message.mentions.users.first() || message.author || client.users.cache.get(u => u.id === args[0])

        let avatar = user.displayAvatarURL({dynamic: false, format: "png", size: 4096});

        let image = await canvacord.Canvas.hitler(avatar);

        let hitler = new Discord.MessageAttachment(image, "hitler.png")

        message.channel.send(hitler);
    }
}
