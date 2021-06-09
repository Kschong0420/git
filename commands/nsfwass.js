// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwass',
    aliases: ['nass'],
    cooldown: 0,
    description: 'I know you like anime ass~ uwu',
    usage: 'nsfwass',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.ass())
        message.lineReplyNoMention(embed)
    }
}
