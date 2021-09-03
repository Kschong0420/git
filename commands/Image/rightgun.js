const Discord = require("discord.js");

module.exports = {
    name: 'gun',
    cooldown: 7,
    category: 'Image',
    description: 'Even emoji also can use gun?!',
    usage: 'gun [mention user or emoji]',
    aliases: ['rightgun', 'rg', 'rgun', 'rightg', 'gunright', 'gunr', 'gright'],

    async execute(client, message, args) {
        const lolz = message.mentions.users.first() || message.author;

        try {
            const emoji =
                client.emojis.cache.find(x => x.name === args[0].split(":")[1]).url

            let em = new Discord.MessageEmbed()
                .setImage(`https://api.popcat.xyz/gun?image=${emoji}`)
                .setColor("ORANGE")
            message.lineReplyNoMention(em)
        } catch (e) {
            const av = lolz.displayAvatarURL({ dynamic: false, size: 4096, format: "png" })
            let em = new Discord.MessageEmbed()
                .setImage(`https://api.popcat.xyz/gun?image=${av}`)
                .setColor("ORANGE")
            message.lineReplyNoMention(em)
        }

    }

}