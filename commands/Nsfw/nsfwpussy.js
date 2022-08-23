module.exports = {
    name: 'nsfwpussy',
    aliases: ['pussy', 'npussy'],
    category: 'Nsfw',
    description: 'The genitals of a female, or a cat, you give the meaning.',
    usage: 'nsfwpussy',
    cooldown: 0,
    async execute(client, message, args) {
        const Discord = require('discord.js');
        const akaneko = require("akaneko")

        if (message.channel.nsfw === true) {

            const embed = new Discord.MessageEmbed()
                .setImage(await akaneko.nsfw.pussy())
                .setColor('ff007f')
            message.lineReplyNoMention(embed)

        } else {
            message.lineReplyNoMention("This command can only be used in channels marked nsfw.")
        }
    }
};