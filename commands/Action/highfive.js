const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
  name: "highfive",
  category: "Action",
  description: "Highfive with someone!",
  usage: "highfive <username>",
  cooldown: 7,
  async execute(client, message, args) {
    try {
      const check = message.mentions.users.first()
      const author = message.author.username;
      const user = message.mentions.users.first().username
      if (!user) return message.lineReplyNoMention("Please mention someone.")
      if (check.id === message.author.id) return message.lineReplyNoMention('Don\'t try to highfive with yourself.')
      const data = await (await fetch('https://api.miki.bot/images/random?tags=highfive')).json();
      if (!(data || data.url)) return message.lineReplyNoMention('An error occured.')
      const highfive = new Discord.MessageEmbed()
        .setTitle(`**${author}** and **${user}** is highfive! (>e<)/|(>a<)`, true)
        .setImage(data.url)
        .setColor(0xCAFFCA)
      message.lineReplyNoMention(highfive);
    } catch (error) {
      console.log(error);
      return message.lineReplyNoMention('Please mention someone.')
    }
  }
}