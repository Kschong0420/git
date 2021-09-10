const Discord = require('discord.js');

module.exports = {
    name: 'valmap',
    aliases: ['valorantmaps', 'valorant-maps', 'valmaps', 'map', 'valorantmap'],
    cooldown: 15,
    usage: 'valmap <map name>',
    category: 'Image',
    description: 'Return a valorant map image.',
    async execute (client, message, args) {
        let mapName = message.content.substring(message.content.indexOf(' ') + 1);
        mapName = mapName.toLowerCase()
        if (!args[0]) return message.lineReplyNoMention('Please provide a valid map.')
        if (mapName.includes('ascent')) {
            const ascent = new Discord.MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('Ascent')
                .setURL('https://blitz.gg/valorant/maps/ascent')
                .setImage('https://i.imgur.com/BB0K2AI.png')
                .setColor('RANDOM')

            message.lineReplyNoMention(ascent)
        }

        if (mapName.includes('bind')) {
            const bind = new Discord.MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('Bind')
                .setURL('https://blitz.gg/valorant/maps/bind')
                .setImage('https://i.imgur.com/PNuTJl5.png')
                .setColor('RANDOM')

            message.lineReplyNoMention(bind)
        }

        if (mapName.includes('haven')) {
            const haven = new Discord.MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('Haven')
                .setURL('https://blitz.gg/valorant/maps/haven')
                .setImage('https://i.imgur.com/I2TUFhy.png')
                .setColor('RANDOM')

            message.lineReplyNoMention(haven)
        }

        if (mapName.includes('split')) {
            const split = new Discord.MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('Split')
                .setURL('https://blitz.gg/valorant/maps/split')
                .setImage('https://i.imgur.com/OMHAW47.png')
                .setColor('RANDOM')

            message.lineReplyNoMention(split)
        }

        if (mapName.includes('ice') || mapName.includes('box')) {
            const icebox = new Discord.MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle('Ice Box')
                .setURL('https://blitz.gg/valorant/maps/icebox')
                .setImage('https://i.imgur.com/PDhlT5o.png')
                .setColor('RANDOM')

            message.lineReplyNoMention(icebox)
        }
    },
}