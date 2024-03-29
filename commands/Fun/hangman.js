const { Permissions } = require('discord.js')
const { hangman } = require('reconlx')

module.exports = {
  name: 'hangman',
  cooldown: 10,
  description: 'Play a hangman game, only moderator can use this command.',
  usage: 'hangman <channel> <word>',
  category: 'Fun',
  execute (client, message, args) {
    const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
    if (!channel) return message.lineReply('Please specify a channel')
    const word = args.slice(1).join(' ')
    if (!word) return message.lineReply('Please specify a word to guess.')

    const hang = new hangman({
      message: message,
      word: word,
      client: client, // according to execute(<name>, messages, args)
      channelID: channel.id,
      permission: 'MANAGE_MESSAGES'
    })

    hang.start()
  }
}
