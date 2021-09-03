const Discord = require("discord.js");

module.exports = {
    name: 'leftgun',
    cooldown: 7,
    category: 'Image',
    description: 'Even emoji also can use gun?!',
    usage: 'leftgun [mention user or emoji]',
    aliases: ['lgun', 'lg', 'leftg', 'gunleft', 'gl', 'gleft', 'gunl'],
    async execute(client, message, args) {
        const lolz = message.mentions.users.first() || message.author;

        try {
            const emoji =
                client.emojis.cache.find(x => x.name === args[0].split(":")[1]).url

            let em = new Discord.MessageEmbed()
                .setImage(`https://api.weky.xyz/canvas/gun?image=${emoji}`)
                .setColor("ORANGE")
            message.lineReplyNoMention(em)
        } catch (e) {
            const av = lolz.displayAvatarURL({ dynamic: false, size: 4096, format: "png" })
            let em = new Discord.MessageEmbed()
                .setImage(`https://api.weky.xyz/canvas/gun?image=${av}`)
                .setColor("ORANGE")
            message.lineReplyNoMention(em)
        }

    }

}