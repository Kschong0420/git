module.exports = {
  name: 'butter',
  cooldown: 5,
  description: 'this is a butterfly command!',
  usage: 'butter',
  category: 'Fun',
  execute (client, message, args) {
    message.lineReplyNoMention('fly ~')
  }
}
