const { MessageEmbed } = require('discord.js');

module.exports = {
      name: 'servericon',
      cooldown: 10,
      aliases: ['serveravatar', 'savatar', 'si'],

  async execute(client, message, args) {
    const embed = new MessageEmbed()
      .setTitle(`${message.guild.name}'s Icon`)
      .setImage(message.guild.iconURL({ dynamic: true, size: 4096 }))
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.lineReplyNoMention(embed);
  }
};