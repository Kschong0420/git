const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
  name: 'roast',
  description: 'Send a roast command from an api.',
  cooldown: 30,
  usage: 'roast <username>',
  category: 'Fun',
  async execute (client, message, args) {
    if (!args[0]) return message.lineReply('Invalid Command Format: \`v roast @user\`');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase())
    if (!mentionedMember) return message.lineReply('The user mentioned is not in the server.');
    const msg = await message.lineReplyNoMention('Getting a roast...');
    fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
      .then(res => res.json())
      .then(json => {
        const roastEmbed = new Discord.MessageEmbed()
          .setTitle(mentionedMember.user.tag + ` ${json.insult}`);
        msg.edit(roastEmbed);
      });
  }
}
