const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "invert",
    description: "invert gif",
    cooldown: 10,
    description: 'Invert someone profile picture colour.',
    usage: 'invert [username]',
    category: 'Image',

    async execute(client, message, args) {

        //const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author
        
        let user;

        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]).user;
        } else {
            user = message.author;
        }

        let avatar = user.displayAvatarURL({ dynamic: false, format: "png", size: 4096 });

        let image = await canvacord.Canvas.invert(avatar);

        let invert = new Discord.MessageAttachment(image, "invert.png")

        message.lineReplyNoMention(invert);
    }
}
