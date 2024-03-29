const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
  name: "baka",
  category: "Action",
  description: "Call someone a BAKA!",
  usage: "baka <username>",
  cooldown: 7,
  async execute(client, message, args) {
    try {
      const check = message.mentions.users.first()
      const author = message.author.username;
      const user = message.mentions.users.first().username
      if (!user) return message.lineReplyNoMention("Please mention someone.")
      if (check.id === message.author.id) return message.lineReplyNoMention('Don\'t say baka to yourself.')
      const data = await (await fetch('https://nekos.life/api/v2/img/baka')).json();
      if (!(data || data.url)) return message.lineReplyNoMention('An error occured.')
      const bakap = new Discord.MessageEmbed()
        .setTitle(`**${author}** is saying **${user}** BAKA! ಠ_ಠ`, true)
        .setImage(data.url)
        .setColor(0xCAFFCA)
      message.lineReplyNoMention(bakap);
    } catch (error) {
      console.log(error);
      return message.lineReplyNoMention('Please mention someone.')
    }
  }
}