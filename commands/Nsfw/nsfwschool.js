module.exports = {
    name: 'nsfwschool',
    aliases: ['nschool'],
    category: 'Nsfw',
    description: 'School Uniforms!~ Yatta~!',
    usage: 'nsfwschool',
    cooldown: 0,
    async execute(client, message, args) {
        const Discord = require('discord.js');
        const akaneko = require("akaneko")

        if (message.channel.nsfw === true) {

            const embed = new Discord.MessageEmbed()
                .setImage(await akaneko.nsfw.school())
                .setColor('ff007f')
            message.lineReplyNoMention(embed)

        } else {
            message.lineReplyNoMention("This command can only be used in channels marked nsfw.")
        }
    }
};