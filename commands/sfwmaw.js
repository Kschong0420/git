// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'sfwmaw', // mobile phone anime wallpaper (phone)
    cooldown: 0,
    description: 'get a sfw mobile phone anime wallpaper (maybe contain nsfw).',
    usage: 'sfwmaw',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.mobileWallpaper())
        message.lineReplyNoMention(embed)
    }
}

//https://www.npmjs.com/package/hmtai
//search for more command