module.exports = {
    name: 'unpin',
    description: "Unpins a message",
    aliases: ["unpins"],
    cooldown: 2,
    //usage: '[#Channel] [Message ID]',
    async execute(client, message, args) {
      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.lineReplyNoMention(`Unknown Command.`)
      if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.lineReply(`I can't unpin a message`)
      const channel = await message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
      if(!channel) return message.lineReply(`Please mention a channel to find message`)
      const msg = await channel.messages.fetch(args[1])
      if(!msg) return message.lineReply(`Can't find the message with ID on that channel`);
      await msg.unpin()
      message.lineReplyNoMention(`Successfully unpinned message ID: \`${msg.id}\`.`)
      .catch(err => {
        console.log(err)
        message.lineReplyNoMention(`An error occured when unpinning that message.`)
      })
    }
  }