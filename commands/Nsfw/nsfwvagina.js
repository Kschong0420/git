// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwvagina',
    aliases: ['nvagina'],
    cooldown: 0,
    description: 'The genitals of a female, or a cat, you give the meaning.',
    usage: 'nsfwvagina',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.vagina())
        .setColor('ff007f')
        message.lineReplyNoMention(embed)
    }
}
