const Discord = require('discord.js')

module.exports = {
  name: 'modhelp',
  cooldown: 0,
  description: 'Mod Command List',
  execute (client, message, args) {
    if (message.member.hasPermission('MANAGE_MESSAGES')) {
      const newEmbed = new Discord.MessageEmbed()
        .setColor('#BE0F34')
        .setTitle('Vanilla Command List')
        .setDescription('Type v <command> or V <command> to use me!')
        .addFields(
          { name: 'ban <username> <reason>', value: 'ban someone' },//require ban members perms
          { name: 'embed', value: 'can use for some important announcement' },//require manage messages perms
          { name: 'hangman <channel> <word>', value: 'open a new hangman game' },//require manage message perms
          { name: 'hide <channel>', value: 'hide the channel that you mentioned'},//require administrator perms
          { name: 'kick <username> <reason>', value: 'kick someone' },//require kick perms
          { name: 'lock', value: 'lock the channel where you use this command'},//require administrator perms
          { name: 'lockdown <on/off>', value: 'lock down the whole server' },//require administrator perms
         // { name: 'mute <username>', value: 'mute someone' },//require manage messages perms
          { name: 'pin <channel> <message ID>', value: 'pin a message'},//require manage messages perms
          { name: 'poll <text>', value: 'make a poll'},//require manage guild perms
          { name: 'pull <username>', value: 'pull someone to your current voice channel that you stay'},//require manage messages perms
          { name: 'purge <2 ~ 500>', value: 'clear the amount of message' },//require manage messages perms
          { name: 'slowmode <second> <reason>', value: 'let the channel in slow mode' },//require administrator perms
          { name: 'show <channel>', value: 'show the channel that you mentioned'},//require administrator perms
         // { name: 'tempmute <username> <time(ms)>', value: 'mute someone for temporary time in unit ms' },//require manage messages perms
          { name: 'unlock', value: 'unlock the channel'},//require administrator perms
          { name: 'unpin', value: 'unpin the message'},//require manage messages perms
          //{ name: 'unmute <username>', value: 'unmute someone' },//require manage messages perms
          { name: 'warn <username> <reason>', value: 'warn someone' },//require manage messages perms
        )
        .setImage('https://i.imgur.com/FdqTuMJ.jpg')

      message.lineReplyNoMention(newEmbed)
    } else {
      message.lineReply('Unknown Command.')
    }
  }
}

//{ name: 'nuke', value: 'clear channel and renew it' },//require administrator perms
