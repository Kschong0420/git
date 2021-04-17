const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "wasted",
    description: "wasted gif",

    async execute(client, message, args) {

        const user = message.mentions.users.first() || message.author || client.users.cache.get(u => u.id === args[0])

        let avatar = user.displayAvatarURL({dynamic: false, format: "png"});

        let image = await canvacord.Canvas.wasted(avatar);

        let wasted = new Discord.MessageAttachment(image, "wasted.png")

        message.channel.send(wasted);
    }
}
