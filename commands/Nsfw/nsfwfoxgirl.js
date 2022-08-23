module.exports = {
    name: 'nsfwfoxgirl',
    aliases: ['foxgirl', 'nfoxgirl'],
    category: 'Nsfw',
    description: 'Girl\'s that are wannabe foxes, yes',
    usage: 'nsfwfoxgirl',
    cooldown: 0,
    async execute(client, message, args) {
        const Discord = require('discord.js');
        const akaneko = require("akaneko")

        if (message.channel.nsfw === true) {

            const embed = new Discord.MessageEmbed()
                .setImage(await akaneko.nsfw.foxgirl())
                .setColor('ff007f')
            message.lineReplyNoMention(embed)

        } else {
            message.lineReplyNoMention("This command can only be used in channels marked nsfw.")
        }
    }
};