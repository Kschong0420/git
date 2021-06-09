// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwincest',
    aliases: ['nincest'],
    cooldown: 0,
    description: 'I know, you like it. Brother and sister <3 And..mo...omg',
    usage: 'nsfwincest',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.incest())
        message.lineReplyNoMention(embed)
    }
}
