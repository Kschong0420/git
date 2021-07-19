const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'horoscope',
    aliases: [],
    category: 'Fun',
    description: 'Find out your horoscope for today.',
    usage: 'horoscope <constellation>',
    cooldown: 5,
    async execute(client, message, args) {
        const constellation = args.join(" ").toLowerCase()
        try {
            const data = await fetch(`http://sandipbgt.com/theastrologer/api/horoscope/${constellation}/today`)
                .then(res => res.json())
                .catch(() => null);
            return message.lineReplyNoMention(
                new MessageEmbed()
                    .setColor('RANDOM')
                    .setFooter(`Requested by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))
                    .setTitle(`Horoscope for **${constellation}** today!`)
                    .setTimestamp()
                    .addFields([
                        { name: 'Mood', inline: true, value: data.meta.mood || '\u200b' },
                        { name: 'Intensity', inline: true, value: data.meta.intensity || '\u200b' },
                        { name: 'Keywords', inline: true, value: data.meta.keywords || '\u200b' }
                    ])
            );
        } catch (e) {
            message.lineReplyNoMention('Please insert a valid constellation.')
        }
    }
};