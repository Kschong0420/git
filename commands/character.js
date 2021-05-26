const Discord = require('discord.js')

module.exports = {
  name: 'character',
  cooldown: 30,
  description: 'Nekopara Introduction',
  execute (client, message, args) {
    const newEmbed = new Discord.MessageEmbed()
      .setColor('#FFE666')
      .setTitle('Nekopara Introduction')
      .setDescription('Type v <name> to know about character details in nekopara!')
      .addFields(
        { name: 'Chocola', value: 'Twin elder sister with Vanilla' },
        { name: 'Vanilla', value: 'Twin sister with Chocola' },
        { name: 'Azuki', value: 'The elder sister in Minaduki house' },
        { name: 'Coconut', value: 'The nekogirl who got the biggest boing boing' },
        { name: 'Maple', value: 'Like to tastes tea with her sensitive cat tongue' },
        { name: 'Cinnamon', value: 'Horny everyday' },
        { name: 'Fraise', value: 'Live in French' },
        { name: 'Milk', value: 'Help her master to sell takoyaki' },
        { name: 'Cacao', value: 'The cat girl who has encounter chocola for many years' },
        { name: 'Shigure', value: 'Kashou sister' }
      )
      .setImage('https://images5.alphacoders.com/653/thumb-1920-653610.jpg')

    message.lineReplyNoMention(newEmbed)
  }
}
