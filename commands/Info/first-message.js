const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "first-message",
    aliases: ['fm'],
    description: "Get the first message in a channel",
    category: "Info",
    cooldown: 15,
    async execute(client, message, args) {
        const fetchmessages = await message.channel.messages.fetch({ limit: 1, after: 1 })
        const msg = fetchmessages.first()

        const embed = new MessageEmbed()
            .setTitle(`First message in ${message.channel.name}.`)
            .setDescription(`
      **Message Content:** ${msg.content}
      **Sent By:** ${msg.author}
      **Date sent:** <t:${parseInt(msg.createdTimestamp / 1000)}:R>
      **URL:** [Click Me](${msg.url})
      `)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setColor(client.randomColor)
            .setTimestamp()
        message.lineReplyNoMention({ embed: embed })
    },
};
