const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "invert",
    description: "invert gif",

    async execute(client, message, args) {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.author 

        let avatar = user.displayAvatarURL({dynamic: false, format: "png", size: 4096});

        let image = await canvacord.Canvas.invert(avatar);

        let invert = new Discord.MessageAttachment(image, "invert.png")

        message.channel.send(invert);
    }
}
