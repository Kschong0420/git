// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwthighs',
    aliases: ['nthighs'],
    cooldown: 0,
    description: "Oh, i so like it, it's best of the best, like a religion <3",
    usage: 'nsfwthighs',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.thighs())
        message.lineReplyNoMention(embed)
    }
}
