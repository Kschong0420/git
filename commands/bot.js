const { MessageEmbed } = require('discord.js');
const { stripIndent } = require('common-tags');

module.exports = {
      name: 'bot',
      aliases: ['botinfo', 'bot', 'botservice', 'botservices', 'bs', 'bi'],
  async execute(client, message, args) {
    const counts = stripIndent`
      Servers :: ${message.client.guilds.cache.size}
      Users   :: ${message.client.users.cache.size}
    `;
    const embed = new MessageEmbed()
      .setTitle('Vanilla\'s Bot Info')
      .setDescription(stripIndent`\`\`\`asciidoc\n${counts}\`\`\``)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};