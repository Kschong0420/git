const Discord = require('discord.js')

module.exports = {
  name: 'op',
  description: 'Nekopara Opening Song List',
  execute (client, message, args) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor('#FFE666')
      .setTitle('Nekopara Opening Song List')
      .setDescription('Click the link to check the song!')
      .addFields(
        { name: 'Taiyou Paradise', value: 'https://youtu.be/wLDLnu9Ub3s' },
        { name: 'Doki Doki Kokoro Flavor', value: 'https://youtu.be/MvkI-6Vw87k' },
        { name: 'Nekoichi', value: 'https://youtu.be/7i1q-mih8Is' },
        { name: 'SweetxSweet', value: 'https://youtu.be/hHSkFls-rgM' },
        { name: 'Shiny Happy Days', value: 'https://youtu.be/c23W5sNxNO4' },
        { name: 'Baby Lady Love', value: 'https://youtu.be/NVdoS1GgD3k' },
        { name: 'Switch/PS4 intro 1', value: 'https://youtu.be/z1rZVgpC8xc' },
        { name: 'Switch/PS4 intro 2 - Tokimeki Emotion', value: 'https://youtu.be/dflERjiF1dM' },
        { name: 'Switch/PS4 intro 3', value: 'https://youtu.be/peWRxL1Wck8' },
        { name: 'Extra Song - Grandfather Clock', value: 'https://youtu.be/9eD83vDdyzo' }
      )
      .setImage('https://cdn.discordapp.com/attachments/814445307764670495/814473794399764510/anime-nekopara-azuki-nekopara-chocola-nekopara-cinnamon-nekopara-hd-wallpaper-preview.jpg')

    message.channel.send(newEmbed)
  }
}
