// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwmasturbation',
    aliases: ['masturbation', 'nsfwmastur', 'mastur', 'nmasturbation', 'nmastur', "nmtbt"],
    cooldown: 0,
    description: 'You like lewd solo?~',
    usage: 'nsfwmasturbation',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.masturbation())
        message.lineReplyNoMention(embed)
    }
}
