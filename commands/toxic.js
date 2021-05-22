const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "toxic",
    cooldown: 5,
    async execute(client, message, args) {
        const embed = new MessageEmbed()
            .setTitle('TOXIC!!!')
            .setURL('https://cdn.discordapp.com/emojis/821318335794905098.gif?v=1')
            .setThumbnail('https://cdn.discordapp.com/emojis/821318335794905098.gif?v=1')
            .setImage('https://cdn.discordapp.com/emojis/821318335794905098.gif?v=1')

        message.channel.send(embed)
    }
}