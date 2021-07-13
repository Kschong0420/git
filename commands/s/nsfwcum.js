// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwcum',
    aliases: ['ncum'],
    cooldown: 0,
    description: 'Basically sticky white stuff that is usually milked from sharpies.',
    usage: 'nsfwcum',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.cum())
        message.lineReplyNoMention(embed)
    }
}
