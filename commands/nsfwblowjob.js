// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwblowjob',
    aliases: ['nblowjob'],
    cooldown: 0,
    description: 'Basically an image of a girl sucking on a sharp blade!.',
    usage: 'nsfwblowjob',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.blowjob())
        message.lineReplyNoMention(embed)
    }
}
