// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwfemdom',
    aliases: ['nfemdom'],
    cooldown: 0,
    description: 'Female Domination?.',
    usage: 'nsfwfendom',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.femdom())
        .setColor('ff007f')
        message.lineReplyNoMention(embed)
    }
}
