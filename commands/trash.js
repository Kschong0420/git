const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "trash",
    description: "trash gif",
    cooldown: 7,
    description: 'Someone should stay in rubbish bin.',
    usage: 'trash <username>',
    category: 'Image',

    async execute(client, message, args) {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author 

        let avatar = user.user.displayAvatarURL({dynamic: false, format: "png"});

        let image = await canvacord.Canvas.trash(avatar);

        let trash = new Discord.MessageAttachment(image, "trash.png")

        message.channel.send(trash);
    }
}
