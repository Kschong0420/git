// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'sfwaw', // anime wallpaper (desktop)
    cooldown: 0,
    description: 'get a sfw anime wallpaper (maybe contain nsfw).',
    usage: 'sfwaw',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.wallpaper())
        message.lineReplyNoMention(embed)
    }
}

//https://www.npmjs.com/package/hmtai
//search for more command