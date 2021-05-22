module.exports = {
  name: 'nuke',
  description: 'nuke the whole chat and grow back!',
  cooldown: 0,
  async execute (client, message, args) {
    if (message.author.id !== "759368420453384213") return message.channel.send("Unknown Command.");
    //if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Unknown Command.')
    //if (!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.reply('I need MANAGE_CHANNELS permissions!') // give bot manage channels permission to work

    await message.channel.clone().then((ch) => {
      ch.setParent(message.channel.parent.id)
      ch.setPosition(message.channel.position)
      message.channel.delete()

      ch.send('This channel has been nuked!')
    })
  }
}

//chocola : 812374761770188800
//vanilla : 759368420453384213