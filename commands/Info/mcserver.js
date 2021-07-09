const util = require('minecraft-server-util')

module.exports = {
  name: 'mcserver',
  cooldown: 7,
  description: 'Get information about a minecraft server',
  usage: 'mcserver <ip> <port>',
  category: 'Info',
  execute (client, message, args, Discord) {
    if (!args[0]) return message.lineReply('Please enter a minecraft server ip!')
    if (!args[1]) return message.lineReply('Please enter a minecraft server port!')

    util.status(args[0], { port: parseInt(args[1]) }).then((response) => {
      const embed = new Discord.MessageEmbed()
        .setColor('#8FCDEB')
        .setTitle('Mc server status')
        .addFields(
          { name: 'Server IP', value: response.host },
          { name: 'Online Players', value: response.onlinePlayers },
          { name: 'Max Players', value: response.maxPlayers },
          { name: 'Version', value: response.version }
        )
        .setFooter('Mc server util by Vanilla')

      message.lineReplyNoMention(embed)
    })
      .catch((error) => {
        message.lineReplyNoMention('there was an error finding this server')
        throw error
      })
  }
}
