const Discord = require("discord.js");

module.exports = {
    name: "id",
    aliases: ["userid"],
    description: "Display a user ID",
    usage: "id [username]",
    type: "Info",
    cooldown: 3,
    async execute(client, message, args) {
        var mention = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member
        const lolid = new Discord.MessageEmbed()
            //.setThumbnail(mention.user.avatarURL)
            .setColor("RANDOM")
            .setDescription(`${mention.user}\'s ID: ${mention.id}.`)
            .setTimestamp()
            .setFooter(`Requested by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))
        message.lineReplyNoMention(lolid)
    }
}