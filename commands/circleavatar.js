const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "circleavatar",
    aliases: ["ca", "ci", "cicon", "cavatar"],

    async execute(client, message, args) {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.author 

        let avatar = user.displayAvatarURL({size: 4096, dynamic: true, format: "png"});

        let image = await canvacord.Canvas.circle(avatar);

        let circle = new Discord.MessageAttachment(image, "circle.png")

        message.channel.send(circle);
    }
}
