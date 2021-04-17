const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "rip",
    description: "rip gif",

    async execute(client, message, args) {

        const user = message.mentions.users.first() || message.author || client.users.cache.get(u => u.id === args[0])

        let avatar = user.displayAvatarURL({dynamic: false, format: "png"});

        let image = await canvacord.Canvas.rip(avatar);

        let rip = new Discord.MessageAttachment(image, "rip.png")

        message.channel.send(rip);
    }
}
