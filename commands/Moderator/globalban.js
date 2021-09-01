const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'globalban',
    description: 'Globally ban a user from your server.',
    cooldown: 5,
    usage: 'globalban <userID> [reason]',
    category: 'Moderator',
   
    async execute(client, message, args) {
        if (!message.member.hasPermission('BAN_MEMBERS')) return message.lineReply('Unknown Command.')
        if (!message.guild.me.hasPermission('BAN_MEMBERS')) return message.lineReply('I do not have the permission \`BAN_MEMBERS\`')

        let userID = args[0]
        let reason = args.slice(1).join(' ') || 'No reason given.'

        if (!userID) return message.lineReply('Please specify a user ID to ban.')
        if (isNaN(userID)) return message.lineReply('The user ID must be a number.')

        if (userID === message.author.id) return message.lineReply('You cannot ban yourself.')
        if (userID == client.user.id) return message.lineReply('Don\'t try to ban me.')

        if(!userID.bannable) return message.lineReply('I do not have permission to ban that user!')

        client.users.fetch(userID).then(async (user) => {
            await message.guild.members.ban(user.id, { reason: reason })
            const bannedEmbed = new MessageEmbed()
                .setColor('RED')
                .setDescription(`<@${user.id}> was banned by ${message.author} for: \`${reason}\``)
            message.lineReplyNoMention(bannedEmbed)

        }).catch(err => {
            return message.lineReply(`There has been an error: **${err}**`)
        })


    }
}