// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwcreampie',
    aliases: ['ncreampie'],
    cooldown: 0,
    description: 'So hot, sticky, and inside uwu.',
    usage: 'nsfwcreampie',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.creampie())
        .setColor('ff007f')
        message.lineReplyNoMention(embed)
    }
}
