const Discord = require('discord.js')

module.exports = {
  name: 'ed',
  cooldown: 10,
  description: 'Nekopara ending song',
  usage: 'ed',
  category: 'Info',
  execute (client, message, args) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor('#FFE666')
      .setTitle('Nekopara Ending Song List')
      .setDescription('Click the link to check the song!')
      .addFields(
        { name: 'Neko Paradise', value: 'https://youtu.be/bAZFZ-zILy4' },
        { name: '100 Nyan Power De Yumegokoti', value: 'https://youtu.be/h0bj2dHz_60' },
        { name: 'Duca Glowing', value: 'https://youtu.be/ya8kQx14cIY' },
        { name: 'Nekaigoto', value: 'https://youtu.be/N2x1aeM3shc' },
        { name: 'Hidamari no Kaori', value: 'https://youtu.be/1rkWn0AZsE4' },
        { name: 'Symphony', value: 'https://youtu.be/PMPrVvdctOI' },
        { name: 'Mew Mew Cake', value: 'https://youtu.be/HhnETSN6U_E' },
        { name: 'Extra Song - Honto No Kokoro', value: 'https://youtu.be/cE3aVLmGPWE' }
      )
      .setImage('https://cdn.discordapp.com/attachments/814445307764670495/814473765039767592/anime-nekopara-azuki-nekopara-coconut-nekopara-wallpaper-preview.jpg')

    message.lineReplyNoMention(newEmbed)
  }
}
