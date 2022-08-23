// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwgangbang',
    aliases: ['ngangbang'],
    cooldown: 0,
    description: '5 on 1? Uh..',
    usage: 'nsfwgangbang',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.gangbang())
        .setColor('ff007f')
        message.lineReplyNoMention(embed)
    }
}
