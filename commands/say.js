module.exports = {
  name: 'say', 
  cooldown: 5,
  description: 'send a message imputted!',
  execute (client, message, args) {
    const sayMessage = args.join(' ')
    message.delete().catch(err => console.log(err))
    message.channel.send(sayMessage)
  }
}
