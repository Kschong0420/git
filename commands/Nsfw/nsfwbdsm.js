// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwbdsm',
    aliases: ['nbdsm'],
    cooldown: 0,
    description: 'If you don\'t know what it is, search it up',
    usage: 'nsfwbdsm',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.bdsm())
        .setColor('ff007f')
        message.lineReplyNoMention(embed)
    }
}
