const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "hitler",
    description: "hitler gif",
    cooldown: 7,
    description: 'Let someone become hitler.',
    usage: 'hitler <username>',
    category: 'Image',

    async execute(client, message, args) {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author 

        let avatar = user.user.displayAvatarURL({dynamic: false, format: "png", size: 4096});

        let image = await canvacord.Canvas.hitler(avatar);

        let hitler = new Discord.MessageAttachment(image, "hitler.png")

        message.lineReplyNoMention(hitler);
    }
}
