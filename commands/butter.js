module.exports = {
  name: 'butter',
  cooldown: 5,
  description: 'this is a butterfly command!',
  execute (client, message, args) {
    message.channel.send('fly ~')
  }
}
