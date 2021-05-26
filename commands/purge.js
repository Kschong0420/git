const { MessageFlags } = require('discord.js')

module.exports = {
  name: 'purge',
  description: 'Deletes amount of messages inputted!',
  cooldown: 0,
  async execute (client, message, args) {
    if (message.member.hasPermission('MANAGE_MESSAGES')) {
      const deleteCount = parseInt(args[0], 10)
      const deleteMessages = `Deleted ${deleteCount} messages.`

      if (!deleteCount || deleteCount > 100 || deleteCount < 2) return message.lineReply('Please provide a number between 2 to 100 for the number of message to delete.')
      message.delete()
      const fetched = await message.channel.messages.fetch({
        limit: deleteCount
      })

      message.channel.bulkDelete(fetched)
        .catch(error => console.log(`Cannot delete messages because of ${error}`))
        .then(message.lineReply(deleteMessages))
        .catch(err => {
          console.log(err)
        })
    } else {
      message.lineReply('you do not have permission to use this command')
    }
  }
}
