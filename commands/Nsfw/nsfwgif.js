// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwgif',
    aliases: ['ngif'],
    cooldown: 0,
    description: 'Basically an animated image, so yes :3',
    usage: 'nsfwgif',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.gif())
        .setColor('ff007f')
        message.lineReplyNoMention(embed)
    }
}
