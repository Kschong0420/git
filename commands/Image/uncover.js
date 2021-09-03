const Discord = require("discord.js");

module.exports = {
    name: 'uncover',
    cooldown: 7,
    category: 'Image',
    description: 'I feel unsafety.',
    usage: 'uncover [mention user or emoji]',

    async execute(client, message, args) {
        const lolz = message.mentions.users.first() || message.author;

        try {
            const emoji =
                client.emojis.cache.find(x => x.name === args[0].split(":")[1]).url

            let em = new Discord.MessageEmbed()
                .setImage(`https://api.popcat.xyz/uncover?image=${emoji}`)
                .setColor("ORANGE")
            message.lineReplyNoMention(em)
        } catch (e) {
            const av = lolz.displayAvatarURL({ dynamic: false, size: 4096, format: "png" })
            let em = new Discord.MessageEmbed()
                .setImage(`https://api.popcat.xyz/uncover?image=${av}`)
                .setColor("ORANGE")
            message.lineReplyNoMention(em)
        }

    }

}