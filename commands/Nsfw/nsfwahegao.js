// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwahegao',
    aliases: ['nahegao'],
    cooldown: 0,
    description: 'So happy woman faces :))',
    usage: 'nsfwahegao',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.ahegao())
        .setColor('ff007f')
        message.lineReplyNoMention(embed)
    }
}
