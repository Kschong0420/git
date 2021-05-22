const Discord = require('discord.js')

module.exports = {
  name: 'music_help',
  aliases: ["mh", "music", "musichelp"],
  cooldown: 30,
  async execute (client, message, args, Discord) {
      const newEmbed = new Discord.MessageEmbed()
        .setColor('#FFE666')
        .setTitle('Music Command List')
        .setDescription('Type v <command> to use me!')
        .addFields(
          { name: 'autoplay', value: 'enable or disable autoplay, if enable music bot will continue play music after song queue finished' },
          { name: 'filter <filter>', value: 'off, 3d, bassboost, vaporwave, nightcore, phaser, tremolo, reverse, karaoke, flanger, gate, haas, mcompand, surround, earwax' },
          { name: 'jump <value>', value: 'jump to the song according to the number'},
          { name: 'leave', value: 'let the bot leave the voice channel'},
          { name: 'np', value: 'get detail for music playing for now' },
          { name: 'nplyr', value: 'get the lyrics for current playing song(maybe not correct or cannot find)'},
          { name: 'pause', value: 'pause song' },
          { name: 'play <song name / video link>', value: 'after using this command choose your favourite song from list by typing a number without prefix' },
          { name: 'playSkip <song name / video link>', value: 'skip the current playing song and play the song you want without queue'},
          { name: 'queue', value: 'show the current song queue' },
          { name: 'repeat', value: 'let the bot auto repeat your song or song queue' },
          { name: 'resume', value: 'resume the song' },
          { name: 'seek <time>', value: 'Example: v seek 0:40'},
          { name: 'shuffle', value: 'shuffle the whole song queue'},
          { name: 'skip', value: 'skip the current song' },
          { name: 'volume <value>', value: 'set volume according to the value' }
        )
        .setImage('https://i.pinimg.com/564x/0b/e0/fb/0be0fbd076cc1e70da1add4c55e12149.jpg')
        .setFooter('You need to join a voice channel only you can use these commands.')

      message.channel.send(newEmbed)
    }}