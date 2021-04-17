const { MessageEmbed } = require("discord.js")

module.exports = {
  name: 'cringe',
  description: 'CRINGE!',
  execute(client, message, args) {
    const embed = new MessageEmbed()
      .setTitle('This guy is fxxking CRINGE!!!')
      .setColor('RED')
      .setDescription('If you wanna see video below copy the link and paste in youtube to check CRINGE song!!!')
      .setFooter("OMG it's cringe god!")
      .setThumbnail('https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif')
      .setImage('https://media.giphy.com/media/Ju7l5y9osyymQ/giphy.gif')
      .addFields(
        { name: 'when renai circulation meet CRINGE!!!', value: 'https://youtu.be/FyYSaA2o-2o' },
        { name: '4K 60FPS remastered cringe video', value: 'https://youtu.be/o-YBDTqX_ZU' }
      )
    message.channel.send(embed)
  }
}

//rick astley
//https://yt3.ggpht.com/ytc/AAUvwni36SveDisR-vOAmmklBfJxnnjuRG3ihzfrwEfORA=s900-c-k-c0x00ffffff-no-rj