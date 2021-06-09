// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwmaw',
    aliases: ['nmaw'],
    cooldown: 0,
    description: 'NSFW Anime Mobile Wallpaper.',
    usage: 'nsfwmaw',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.nsfwMobileWallpaper())
        message.lineReplyNoMention(embed)
    }
}
