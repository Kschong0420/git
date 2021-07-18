const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
  name: "cuddle",
  category: "Action",
  description: "Cuddle someone!",
  usage: "cuddle <username>",
  cooldown: 7,
  async execute(client, message, args) {
    try {
      const check = message.mentions.users.first()
      const author = message.author.username;
      const user = message.mentions.users.first().username
      if (!user) return message.lineReplyNoMention("Please mention someone.")
      if (check.id === message.author.id) return message.lineReplyNoMention("You can't cuddle yourself.")
      const data = await (await fetch('https://nekos.life/api/v2/img/cuddle')).json();
      if (!(data || data.url)) return message.lineReplyNoMention('An error occured.')
      const cuddlep = new Discord.MessageEmbed()
        .setTitle(`**${author}** is cuddling to **${user}**!`, true)
        .setImage(data.url)
        .setColor(0xAACFCA)
      message.lineReplyNoMention(cuddlep);
    } catch (error) {
      console.log(error);
      return message.lineReplyNoMention('Please mention someone.')
    }
  }
}