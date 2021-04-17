module.exports = {
  name: 'butter',
  description: 'this is a butterfly command!',
  execute (client, message, args) {
    message.channel.send('fly ~')
  }
}
