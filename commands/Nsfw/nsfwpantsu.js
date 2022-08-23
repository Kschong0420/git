// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwpantsu',
    aliases: ['npantsu'],
    cooldown: 0,
    description: 'I mean... just why? You like underwear?',
    usage: 'nsfwpantsu',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.pantsu())
        .setColor('ff007f')
        message.lineReplyNoMention(embed)
    }
}
