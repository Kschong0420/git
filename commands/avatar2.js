const { MessageEmbed } = require("discord.js")
module.exports = {
    name: "avatar2",
    cooldown: 5,
    description: "Displays someone's avatar!",
    async execute(client, message, args) {
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.author 
        const avatar = user.displayAvatarURL({ size: 4096, dynamic: true})
        let embed = new MessageEmbed()
        .setTitle("Avatar")
        .setImage(avatar)
        .setTimestamp()
        message.lineReplyNoMention(embed)
    }
}