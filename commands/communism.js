const Discord = require('discord.js')
const discordImgGen = require('image-generation-for-discord')//npm i image-generation-for-discord

module.exports = {
    name: "communism",
    async execute(client, message, args) {
        const user = message.mentions.users.first() || message.author || client.users.cache.get(u => u.id === args[0])

        const avatar = user.avatarURL({ dynamic: false, format: "png", size: 4096 })
        const img = await discordImgGen.communism(avatar)
        message.channel.send(new Discord.MessageAttachment(img, "communism.png"))
    }
}
