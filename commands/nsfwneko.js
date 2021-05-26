// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwneko',
    aliases: ['nneko', 'hneko', 'nsfwneko1', 'nneko1', 'hneko1'],
    cooldown: 0,
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.nsfwNeko())
        message.lineReplyNoMention(embed)
    }
}

//https://www.npmjs.com/package/hmtai
//search for more command