const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "circleavatar",
    aliases: ["ca", "ci", "cicon", "cavatar"],

    async execute(client, message, args) {

        const user = message.mentions.users.first() || message.author || client.users.cache.get(u => u.id === args[0])

        let avatar = user.displayAvatarURL({size: 4096, dynamic: true, format: "png"});

        let image = await canvacord.Canvas.circle(avatar);

        let circle = new Discord.MessageAttachment(image, "circle.png")

        message.channel.send(circle);
    }
}
