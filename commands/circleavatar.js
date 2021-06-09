const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "circleavatar",
    aliases: ["ca", "ci", "cicon", "cavatar"],
    cooldown: 7,
    description: 'Check someone avatar in circle form.',
    usage: 'circleavatar [username]',
    category: 'Image',

    async execute(client, message, args) {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author 

        let avatar = user.user.displayAvatarURL({size: 4096, dynamic: true, format: "png"});

        let image = await canvacord.Canvas.circle(avatar);

        let circle = new Discord.MessageAttachment(image, "circle.png")

        message.lineReplyNoMention(circle);
    }
}
