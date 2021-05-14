const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "rip",
    description: "rip gif",

    async execute(client, message, args) {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

        let avatar = user.displayAvatarURL({dynamic: false, format: "png"});

        let image = await canvacord.Canvas.rip(avatar);

        let rip = new Discord.MessageAttachment(image, "rip.png")

        message.channel.send(rip);
    }
}
