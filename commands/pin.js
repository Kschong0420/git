module.exports = {
    name: 'pin',
    description: "Pin a message.",
    aliases: ["pins"],
    cooldown: 2,
    usage: 'pin <channel> <Message ID>',
    category: 'Moderator',
    async execute(client, message, args) {
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.lineReplyNoMention(`Unknown Command.`)
      if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.lineReply(`I can't pin a message`)
      const channel = await message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
      if(!channel) return message.lineReply(`Please mention a channel to find message`)
      const msg = await channel.messages.fetch(args[1])
      if(!msg) return message.lineReply(`Can't find the message with ID on that channel`);
      await msg.pin()
      message.lineReplyNoMention(`Successfully pinned message ID: \`${msg.id}\`.`)
      .catch(err => {
        console.log(err)
        message.lineReplyNoMention(`An error occured when pinning that message.`)
      })
    }
  }