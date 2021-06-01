const { Client, Message, MessageEmbed } = require("discord.js")

module.exports = {
    name: 'sudo',
    category: 'fun',
    cooldown: 10,
    description: 'Make anyone say anything!',
    async execute (client, message, args) {
      if (!message.member.hasPermission("MANAGE_WEBHOOKS")) return message.lineReply("You need the `MANAGE_WEBHOOKS` permission to use this command.");
      if (!message.guild.me.hasPermission("MANAGE_WEBHOOKS")) return message.lineReplyNoMention("I need the `MANAGE_WEBHOOKS` permission to use this command.");
        if (!args[0]) return message.lineReply('Please mention someone!')
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if (!member) return message.lineReply(`Couldn't find this user! Please enter a valid user else it's not gonna works.`)

        message.channel.createWebhook(member.user.username, {
            avatar: member.user.displayAvatarURL({ dynamic: true })
        }).then(webhook => {
            webhook.send(args.slice(1).join(' '))
            setTimeout(() => {
                webhook.delete()
            }, 3000)
        })
    }
}