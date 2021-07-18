const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
	name: "wink",
	category: "Action",
	description: "wink someone!",
    usage: "wink <username>",
    cooldown: 7,
	async execute(client, message, args) {
      try {
      const author = message.author.username;
      const user = message.mentions.users.first().username
      if(!user) return message.lineReplyNoMention("Please mention someone.").then(m => m.delete(5000));
      const res = await fetch('https://some-random-api.ml/animu/wink');
      const img = (await res.json()).link;
      const wink = new Discord.MessageEmbed()
          .setTitle(`**${author}** is winking at **${user}!** >-<`, true)
          .setImage(img)
          .setColor(0xAACFCA)
           message.lineReplyNoMention(wink);
    } catch (error) {
      console.log(error);
      return message.lineReplyNoMention('Please mention someone.').then(m => m.delete(5000));
    }
		}
	}