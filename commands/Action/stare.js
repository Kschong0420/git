const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
  name: "stare",
  category: "Action",
  description: "Stare at someone!",
  usage: "stare <username>",
  cooldown: 7,
  async execute(client, message, args) {
    try {
      const check = message.mentions.users.first()
      const author = message.author.username;
      const user = message.mentions.users.first().username
      if (!user) return message.lineReplyNoMention("Please mention someone.")
      if (check.id === message.author.id) return message.lineReplyNoMention('Don\'t try to stare at yourself.')
      const data = await (await fetch('https://api.miki.bot/images/random?tags=stare')).json();
      if (!(data || data.url)) return message.lineReplyNoMention('An error occured.')
      const stare = new Discord.MessageEmbed()
        .setTitle(`**${author}** is staring **${user}**! o-o`, true)
        .setImage(data.url)
        .setColor(0xCAFFCA)
      message.lineReplyNoMention(stare);
    } catch (error) {
      console.log(error);
      return message.lineReplyNoMention('Please mention someone.')
    }
  }
}