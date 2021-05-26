const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'snipe',
    cooldown: 2,
    async execute(client, message, args) {
        const msg = client.snipes.get(message.channel.id)
        if (!msg) {
            return message.lineReplyNoMention('There is nothing to snipe.')
        }

        const embed = new MessageEmbed()
        .setAuthor(msg.author, msg.profilephoto)
        .setDescription(msg.content)
        .setColor('RANDOM')
        .setTimestamp(msg.date)
        .setFooter('Get sniped lol')
        if (msg.image) embed.setImage(msg.image)

        message.lineReplyNoMention(embed)
    } //that should be it, now lets test it !
}