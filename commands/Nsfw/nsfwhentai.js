// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwhentai',
    aliases: ['nhentai'],
    cooldown: 0,
    description: 'Sends a random hentai imageURL~',
    usage: 'nsfwhentai',
    category: 'NSFW',
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.hentai())
        .setColor('ff007f')
        message.lineReplyNoMention(embed)
    }
}
