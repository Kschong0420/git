
module.exports = {
    name: 'jan',
    aliases: ['janice'],
    cooldown: 5,
    description: 'See what reaction after triggering Jan.',
    usage: 'jan',
    category: 'Fun',
    async execute (client, message, args, Discord) {

      const user = client.users.cache.get('715993208592662629')
      const img = 'https://cdn.discordapp.com/attachments/814445307764670495/871468935369859142/ezgif.com-gif-maker_1.gif'

      if (message.author.id === '715993208592662629') {
      const embed = new Discord.MessageEmbed()
      .setTitle('Triggering Jan!')
      .setDescription('**Jan triggered herself LOL**\n\n<:aaaaaaaaaaa:871471891448221736><:aaaaaaaaaaa:871471891448221736><:aaaaaaaaaaa:871471891448221736><:aaaaaaaaaaa:871471891448221736><:aaaaaaaaaaa:871471891448221736>')
      .setImage(img)
      .setTimestamp()
      .setThumbnail(user.displayAvatarURL({ dynamic: true }))
      .setColor('RED')

      message.lineReplyNoMention(embed)
      } else {
        const embed = new Discord.MessageEmbed()
        .setTitle('Triggering Jan!')
        .setDescription('<:aaaaaaaaaaa:871471891448221736><:aaaaaaaaaaa:871471891448221736><:aaaaaaaaaaa:871471891448221736><:aaaaaaaaaaa:871471891448221736><:aaaaaaaaaaa:871471891448221736>\n<:aaaaaaaaaaa:871471891448221736><:aaaaaaaaaaa:871471891448221736><:aaaaaaaaaaa:871471891448221736><:aaaaaaaaaaa:871471891448221736><:aaaaaaaaaaa:871471891448221736>')
        .setImage(img)
        .setTimestamp()
        .setThumbnail(user.displayAvatarURL({ dynamic: true }))
        .setColor('RED')
  
        message.lineReplyNoMention(embed)
      }
    }
  }
  