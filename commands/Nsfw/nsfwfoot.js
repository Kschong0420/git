// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwfoot',
    aliases: ['nfoot', 'nfootjob', 'nsfwfootjob'],
    cooldown: 0,
    description: 'So you like smelly feet huh?.',
    usage: 'nsfwfoot',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.foot())
        .setColor('ff007f')
        message.lineReplyNoMention(embed)
    }
}
