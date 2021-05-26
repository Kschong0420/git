const { MessageEmbed } = require("discord.js")

module.exports = { // Your Command Handler
    name: "serverinfo3",
    description: 'Gives Info About A Server',
    cooldown: 20,

    async execute(client, message, args) { // Your Command Handler

        const { guild } = message
        const icon = message.guild.iconURL({ dynamic: true }) // Icon Of Server
        const roles = message.guild.roles.cache.map(e => e.toString()) // Roles Of Server
        const emojis = message.guild.emojis.cache.map(e =>  e.toString()) // Emojis Of Server
        const emojicount = message.guild.emojis.cache // EmojiCount If Server
        const members = message.guild.members.cache // Members In Server
        const create = message.guild.createdAt.toLocaleDateString() // Server Created Date

        const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`${message.guild.name} Info`, icon)
        .setThumbnail(`${icon}`)
        .addField('Server Onwer:-', `${guild.owner}`, true)
        .addField('Server ID:-', `${guild.id}`, true)
        .addField('Server Creation Date:-', `${create}`, true)
        .addField('Boost Count:-', `Boost ${guild.premiumSubscriptionCount}`, true)
        .addField('Boost Level:-', `Boost ${guild.premiumTier}`, true)
        .addField('Highest Role:-', `${guild.roles.highest}`, true)
        .addField('Member Count:-', `${members.size}(Total)\n${members.filter(member => !member.user.bot).size}(Human)\n${members.filter(member => member.user.bot).size}(BOT)`, true)
        .addField('Member Stats:-', `${guild.members.cache.filter(member => member.presence.status == 'online').size} Online\n${guild.members.cache.filter(member => member.presence.status == 'idle').size} Idle\n${guild.members.cache.filter(member => member.presence.status == 'dnd').size} DND\n${guild.members.cache.filter(member => member.presence.status == 'offline').size} Offline`, true)
        // .addField('Roles:-', `${roles}`, true) // <true> Means All Roles Will Come In Line
        .addField('Emoji Count:-', `${emojicount.size}(Total)\n${emojicount.filter(emoji => !emoji.animated).size}(Non Animated)\n${emojicount.filter(emoji => emoji.animated).size}(Animated)`, true)
        // .addField('Emojis:-', `${emojis}`, true) // <true> Means All Emojis Will Come In Line // This Will All Emojis Of Server
        .addField('Server Stats:-', `${guild.channels.cache.filter(channel => channel.type == 'text').size} ⌨️(Text Channel)\n${guild.channels.cache.filter(channel => channel.type == 'voice').size} 🔈(Voice Channel)\n${guild.channels.cache.filter(channel => channel.type == 'news').size} 📢(Announcement Channel)\n${guild.channels.cache.filter(channel => channel.type == 'category').size} 📁(Categories)`, true)
        .setTimestamp()
        .setFooter('Server Info', icon)
        message.lineReplyNoMention(embed)
    }
}