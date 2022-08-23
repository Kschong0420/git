module.exports = {
    name: 'nsfwmaid',
    aliases: ['nmaid'],
    category: 'Nsfw',
    description: 'Maids, Maid Uniforms, etc, you know what maids are :3',
    usage: 'nsfwmaid',
    cooldown: 0,
    async execute(client, message, args) {
        const Discord = require('discord.js');
        const akaneko = require("akaneko")

        if (message.channel.nsfw === true) {

            const embed = new Discord.MessageEmbed()
                .setImage(await akaneko.nsfw.maid())
                .setColor('ff007f')
            message.lineReplyNoMention(embed)

        } else {
            message.lineReplyNoMention("This command can only be used in channels marked nsfw.")
        }
    }
};