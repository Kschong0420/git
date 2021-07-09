module.exports = {
  name: 'say', 
  cooldown: 5,
  description: 'Send a message imputted.',
  usage: 'say <text>',
  category: 'Fun',
  async execute (client, message, args) {
    const sayMessage = args.join(' ')
    message.delete().catch(err => console.log(err))
    message.channel.send(sayMessage)
  }
}
