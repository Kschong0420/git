module.exports = {
  name: 'say', 
  description: 'send a message imputted!',
  execute (client, message, args) {
    const sayMessage = args.join(' ')
    message.delete().catch(err => console.log(err))
    message.channel.send(sayMessage)
  }
}
