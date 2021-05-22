const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "wasted",
    description: "wasted gif",
    cooldown: 10,

    async execute(client, message, args) {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.author 

        let avatar = user.displayAvatarURL({dynamic: false, format: "png"});

        let image = await canvacord.Canvas.wasted(avatar);

        let wasted = new Discord.MessageAttachment(image, "wasted.png")

        message.channel.send(wasted);
    }
}
