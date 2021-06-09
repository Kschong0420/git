// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwero',
    aliases: ['nero'],
    cooldown: 0,
    description: "eros, ero Uniforms, etc, you know what eros are :3",
    usage: "nsfwero",
    category: "NSFW",
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.ero())
        message.lineReplyNoMention(embed)
    }
}
