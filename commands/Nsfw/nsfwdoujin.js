module.exports = {
    name: 'nsfwdoujin',
    aliases: ['ndoujin'],
    category: 'Nsfw',
    description: 'Sends a random doujin page imageURL!',
    usage: 'nsfwdoujin',
    cooldown: 0,
    async execute(client, message, args) {
        const Discord = require('discord.js');
        const akaneko = require("akaneko")

        if (message.channel.nsfw === true) {

            const embed = new Discord.MessageEmbed()
                .setImage(await akaneko.nsfw.doujin())
                .setColor('ff007f')
            message.lineReplyNoMention(embed)

        } else {
            message.lineReplyNoMention("This command can only be used in channels marked nsfw.")
        }
    }
};