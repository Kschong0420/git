// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwmanga',
    aliases: ['nmanga'],
    cooldown: 0,
    description: 'Sends a random doujin page imageURL!',
    usage: 'nsfwmanga',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.manga())
        .setColor('ff007f')
        message.lineReplyNoMention(embed)
    }
}
