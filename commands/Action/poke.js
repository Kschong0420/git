const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
  name: "poke",
  category: "Action",
  description: "Poke someone! (・∀・)",
  usage: "poke <username>",
  cooldown: 7,
  async execute(client, message, args) {
    try {
      const check = message.mentions.users.first()
      const author = message.author.username;
      const user = message.mentions.users.first().username
      if (!user) return message.lineReplyNoMention("Please mention someone.")
      if (check.id === message.author.id) return message.lineReplyNoMention("You can't poke yourself.")
      const data = await (await fetch('https://nekos.life/api/v2/img/poke')).json();
      if (!(data || data.url)) return message.lineReplyNoMention('An error occured.')
      const poke = new Discord.MessageEmbed()
        .setTitle(`**${author}** pokes **${user}** ರ╭╮ರ`, true)
        .setImage(data.url)
        .setColor('RANDOM')
      message.lineReplyNoMention(poke);
    } catch (error) {
      console.log(error);
      return message.lineReplyNoMention('Please mention someone.')
    }
  }
}