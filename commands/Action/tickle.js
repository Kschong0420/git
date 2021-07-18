const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
  name: "tickle",
  category: "Action",
  description: "Tickle someone! (・∀・)",
  usage: "tickle <username>",
  cooldown: 7,
  async execute(client, message, args) {
    try {
      const check = message.mentions.users.first()
      const author = message.author.username;
      const user = message.mentions.users.first().username
      if (!user) return message.lineReplyNoMention("Please mention someone.")
      if (check.id === message.author.id) return message.lineReplyNoMention("You can't tickle yourself.")
      const data = await (await fetch('https://nekos.life/api/v2/img/tickle')).json();
      if (!(data || data.url)) return message.lineReplyNoMention('An error occured.')
      const ticklee = new Discord.MessageEmbed()
        .setTitle(`**${author}** is tickling to **${user}** (ㆁωㆁ)`, true)
        .setImage(data.url)
        .setColor('RANDOM')
      message.lineReplyNoMention(ticklee);
    } catch (error) {
      console.log(error);
      return message.lineReplyNoMention('Please mention someone.')
    }
  }
}