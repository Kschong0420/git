// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwuniform',
    aliases: ['nuniform'],
    cooldown: 0,
    description: 'School and many other Uniforms~',
    usage: 'nsfwuniform',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.uniform())
        message.lineReplyNoMention(embed)
    }
}
