// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwboobjob',
    aliases: ['nboobjob'],
    cooldown: 0,
    description: 'So soft, round ... gentle ... damn we love it',
    usage: 'nsfwboobjob',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.boobjob())
        message.lineReplyNoMention(embed)
    }
}
