const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'snipe',
    async execute(client, message, args) {
        const msg = client.snipes.get(message.channel.id)
        if (!msg) return message.reply('There\'s nothing to snipe!')
        const embed = new MessageEmbed()
            .setAuthor(msg.author, msg.member.user.displayAvatarURL())
            .setDescription(msg.content)
            .setFooter('Get sniped lol')
            .setColor("RED")
            .setTimestamp()
        message.channel.send(embed)
    }
}