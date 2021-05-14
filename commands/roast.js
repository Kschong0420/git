const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
  name: 'roast',
  description: 'send a roast command from an api!',
  async execute (client, message, args) {
    if (!args[0]) return message.channel.send('Invalid Command Format: \`v roast @user\`');
    const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase())
    if (!mentionedMember) return message.channel.send('The user mentioned is not in the server.');
    const msg = await message.channel.send('Getting a roast...');
    fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
      .then(res => res.json())
      .then(json => {
        const roastEmbed = new Discord.MessageEmbed()
          .setTitle(mentionedMember.user.tag + ` ${json.insult}`);
        msg.edit(roastEmbed);
      });
  }
}
