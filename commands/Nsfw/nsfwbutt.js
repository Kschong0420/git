// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwzettaiRyouiki',
    aliases: ['nzettaiRyouiki', 'nsfwzr', 'nzr'],
    cooldown: 0,
    description: 'That one part of the flesh being squeeze in thigh-highs~<3',
    usage: 'nsfwcreampie',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.zettaiRyouiki())
        message.lineReplyNoMention(embed)
    }
}
