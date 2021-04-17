const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "wanted",
    description: "wanted gif",

    async execute(client, message, args) {

        const user = message.mentions.users.first() || message.author || client.users.cache.get(u => u.id === args[0])

        let avatar = user.displayAvatarURL({dynamic: false, format: "png"});

        let image = await canvacord.Canvas.wanted(avatar);

        let wanted = new Discord.MessageAttachment(image, "wanted.png")

        message.channel.send(wanted);
    }
}
