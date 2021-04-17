const Discord = require('discord.js')

module.exports = {
  name: 'report',
  description: 'Report bug to owner',
  execute (client, message, args, Discord) {
    const owner = client.users.cache.get('759368420453384213')

    const query = args.join(' ')
    if (!query) return message.reply('Please specify a query')

    const messageEmbed = new Discord.MessageEmbed()
      .setColor('#A3ABAF')
      .setTitle('New Report!')
      .addFields(
        { name: 'Author', value: `${message.author.toString()}` },
        { name: 'Guild', value: `${message.guild.name}` },
        { name: 'Report', value: `${query}` }
      )
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()

    owner.send(messageEmbed)
    message.reply('Your report has been sent!')

    message.author.send(messageEmbed)
    message.channel.send('You can check your report in dm')

    message.delete().catch(err => console.log(err))
  }
}
