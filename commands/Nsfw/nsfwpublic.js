// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwpublic',
    aliases: ['npublic'],
    cooldown: 0,
    description: 'Some people like do it on a public..uh~',
    usage: 'nsfwpublic',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.public())
        .setColor('ff007f')
        message.lineReplyNoMention(embed)
    }
}
