// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwtentacles',
    aliases: ['ntentacles', 'nsfwtentacle', 'ntentacle'],
    cooldown: 0,
    description: 'I\'m sorry but, why do you like it? Uh..',
    usage: 'nsfwtentacles',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.tentacles())
        .setColor('ff007f')
        message.lineReplyNoMention(embed)
    }
}
