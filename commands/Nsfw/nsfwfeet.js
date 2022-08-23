module.exports = {
    name: 'nsfwfeet',
    aliases: ['feet', 'nfeet'],
    category: 'Nsfw',
    description: 'So you like smelly feet huh?',
    usage: 'nsfwfeet',
    cooldown: 0,
    async execute(client, message, args) {
        const Discord = require('discord.js');
        const akaneko = require("akaneko")

        if (message.channel.nsfw === true) {

            const embed = new Discord.MessageEmbed()
                .setImage(await akaneko.nsfw.feet())
                .setColor('ff007f')
            message.lineReplyNoMention(embed)

        } else {
            message.lineReplyNoMention("This command can only be used in channels marked nsfw.")
        }
    }
};