const fetch = require("node-fetch")
const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "car",
    cooldown: 5,
    usage: 'car',
    description: 'Returns a car name and image..',
    category: 'Info',
    async execute(client, message, args) {
        const { title, image } = await fetch("https://api.popcat.xyz/car").then(r => r.json())
        const embed = new MessageEmbed()
            .setColor("ffc0cb")
            .setImage(image)
            .setTitle(title)
            .setFooter(`Requested by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        message.lineReplyNoMention(embed)
    }
}