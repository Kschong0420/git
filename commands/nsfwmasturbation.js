// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwmasturbation',
    aliases: ['masturbation', 'nsfwmastur', 'mastur', 'nmasturbation', 'nmastur'],
    cooldown: 0,
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.masturbation())
        message.lineReplyNoMention(embed)
    }
}
