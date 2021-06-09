const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "wanted",
    cooldown: 7,
    description: 'Let someone become target.',
    usage: 'wanted <username>',
    category: 'Image',

    async execute(client, message, args) {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author 

        let avatar = user.user.displayAvatarURL({dynamic: false, format: "png"});

        let image = await canvacord.Canvas.wanted(avatar);

        let wanted = new Discord.MessageAttachment(image, "wanted.png")

        message.lineReplyNoMention(wanted);
    }
}
