// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwelves',
    aliases: ['nelves'],
    cooldown: 0,
    description: 'So, it\'s not Elvis Presley, but i know, you like it :).',
    usage: 'nsfwelves',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.elves())
        message.lineReplyNoMention(embed)
    }
}
