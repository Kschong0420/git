const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'esnipe',
    aliases: ['editsnipe'],
    cooldown: 7,
    description: 'snipe an edited message.',
    usage: 'esnipe',
    category: 'Util',
    async execute(client, message, args) {
        const msg = client.esnipes.get(message.channel.id)
        if (!msg) {
            return message.lineReplyNoMention('There is nothing to snipe.')
        }

        const embed = new MessageEmbed()
        .setAuthor(msg.author, msg.profilephoto)
        .setDescription(`**Message Before Edited :**\n${msg.content}`)
        .setColor('RANDOM')
        .setTimestamp(msg.date)
        .setFooter('Get sniped lol')
        if (msg.image) embed.setImage(msg.image)

        message.lineReplyNoMention(embed)
    } //that should be it, now lets test it !
}