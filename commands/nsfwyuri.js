// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwyuri',
    aliases: ['nyuri'],
    cooldown: 0,
    description: 'What about cute Les?~',
    usage: 'nsfwyuri',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.yuri())
        message.lineReplyNoMention(embed)
    }
}
