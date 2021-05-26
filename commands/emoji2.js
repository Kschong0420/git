const { MessageEmbed } = require("discord.js");

module.exports = {
        name: 'emoji2',
        aliases: ['e2'],
        cooldown: 30,
    async execute(client, message, args) {
  
      const emojis = [];
      message.guild.emojis.cache.forEach(e => emojis.push(`${e} **-** \`:${e.name}:\``));
  
      const embed = new MessageEmbed()
        .setTitle(`Emoji List [${message.guild.emojis.cache.size}]`)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor(message.guild.me.displayHexColor);
  
      const interval = 25;
      if (emojis.length === 0) message.lineReplyNoMention(embed.setDescription('No emojis found. 😢'));
      else if (emojis.length <= interval) {
        const range = (emojis.length == 1) ? '[1]' : `[1 - ${emojis.length}]`;
        message.lineReplyNoMention(embed
          .setTitle(`Emoji List ${range}`)
          .setDescription(emojis.join('\n'))
          .setThumbnail(message.guild.iconURL({ dynamic: true }))
        )};
        }}