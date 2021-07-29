const { moment } = require('moment')

module.exports = {
    name: 'snipe',
    cooldown: 10,
    description: 'Snipe a deleted message.',
    usage: 'snipe [value]',
    category: 'Util',
    async execute(client, message, args, Discord) {
        const snipes = client.snipes.get(message.channel.id)
        if (!snipes) {
            return message.lineReplyNoMention('There is nothing to snipe.')
        }

        const snipe = +args[0] - 1 || 0
        const target = snipes[snipe]
        if(!target) return message.lineReplyNoMention(`There is only \`${snipes.length}\` messages. `)

        const { msg, image, date, time } = target;
        message.lineReplyNoMention(
            new Discord.MessageEmbed()
            .setAuthor(msg.author.tag, msg.author.displayAvatarURL({ dynamic: true }))
            .setImage(image)
            .setDescription(msg.content)
            .setColor('RANDOM')
            .setTimestamp(date)
            //.setFooter(`${moment(time).fromNow()} |  ${snipe - 1} / ${snipes.length}`)
            .setFooter(`Get sniped lol |  ${snipe + 1} / ${snipes.length}`)
        )
    } //that should be it, now lets test it !
}