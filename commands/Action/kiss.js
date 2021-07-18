const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
  name: "kiss",
  category: "Action",
  description: "Kiss someone! (◕દ◕)",
  usage: "kiss <username>",
  cooldown: 7,
  async execute(client, message, args) {
    try {
      const check = message.mentions.users.first()
      const author = message.author.username;
      const user = message.mentions.users.first().username
      if (!user) return message.lineReplyNoMention("Please mention someone.")
      if (check.id === message.author.id) return message.lineReplyNoMention("You can't kiss yourself.")
      const data = await (await fetch('https://nekos.life/api/v2/img/kiss')).json();
      if (!(data || data.url)) return message.lineReplyNoMention('An error occured.')
      const kiss = new Discord.MessageEmbed()
        .setTitle(`**${user}** has been kissed by **${author}** (◕દ◕)`, true)
        .setImage(data.url)
        .setColor(0xCCFAAF)
      message.lineReplyNoMention(kiss);
    } catch (error) {
      console.log(error);
      return message.lineReplyNoMention('Please mention someone.')
    }
  }
}