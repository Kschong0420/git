const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
  name: "bite",
  category: "Action",
  description: "Bite something!",
  usage: "bite <username>",
  cooldown: 7,
  async execute(client, message, args) {
    try {
      const check = message.mentions.users.first()
      const author = message.author.username;
      const user = message.mentions.users.first().username
      if (!user) return message.lineReplyNoMention("Please mention someone.")
      if (check.id === message.author.id) return message.lineReplyNoMention('Don\'t bite yourself.')
      const data = await (await fetch('https://api.miki.bot/images/random?tags=bite')).json();
      if (!(data || data.url)) return message.lineReplyNoMention('An error occured.')
      const bite = new Discord.MessageEmbed()
        .setTitle(`**${author}** is biting **${user}**! oAo`, true)
        .setImage(data.url)
        .setColor(0xCAFFCA)
      message.lineReplyNoMention(bite);
    } catch (error) {
      console.log(error);
      return message.lineReplyNoMention('Please mention someone.')
    }
  }
}