const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
  name: "feed",
  category: "Action",
  description: "Feed someone!",
  usage: "feed <username>",
  cooldown: 7,
  async execute(client, message, args) {
    try {
      const check = message.mentions.users.first()
      const author = message.author.username;
      const user = message.mentions.users.first().username
      if (!user) return message.lineReplyNoMention("Please mention someone.")
      if (check.id === message.author.id) return message.lineReplyNoMention("You can't feed yourself.")
      const data = await (await fetch('https://nekos.life/api/v2/img/feed')).json();
      if (!(data || data.url)) return message.lineReplyNoMention('An error occured.')
      const feed = new Discord.MessageEmbed()
        .setTitle(`**${author}** is feeding **${user}!** >///<`, true)
        .setImage(data.url)
        .setColor('ORANGE')
      message.lineReplyNoMention(feed);
    } catch (error) {
      console.log(error);
      return message.lineReplyNoMention('Please mention someone.')
    }
  }
}