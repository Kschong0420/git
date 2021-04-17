const Discord = require('discord.js')
const discordImgGen = require('image-generation-for-discord')//npm i image-generation-for-discord

module.exports = {
    name: "kannapaper",
    aliases: ["kp"],
    async execute(client, message, args) {
        const text = args.join(" ")
        if (!text) return message.channel.send("Please write something on Kanna's paper")
        if (text.length > 48) return message.channel.send("You write too many text until Kanna cannot write all in her paper.")

        const img = await discordImgGen.kannapaper(text)
        message.channel.send(new Discord.MessageAttachment(img, "kannapaper.png"))
    }
}
