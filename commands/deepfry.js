const fetch = require("node-fetch")
const { MessageEmbed, MessageMentions } = require('discord.js')

module.exports = {
    name: "deepfry",
    cooldown: 7,
    description: 'Deepfry someone avatar.',
    usage: 'deepfry [username]',
    category: 'Image',
    async execute(client, message, args) {
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author 
        const avatar = user.user.displayAvatarURL({ dynamic: false, size: 4096})
        fetch(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${avatar}`)
        .then((res) =>  res.json())
        .then((data) => {
            let embed = new MessageEmbed()
            .setTitle("Deepfried!")
            .setImage(data.message)
            .setTimestamp()
            message.lineReplyNoMention(embed)
        })
    }
}