// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwcuckold',
    aliases: ['ncuckold'],
    cooldown: 0,
    description: 'Wow, I won\'t even question your fetishes.',
    usage: 'nsfwcuckold',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.cuckold())
        .setColor('ff007f')
        message.lineReplyNoMention(embed)
    }
}
