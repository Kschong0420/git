const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
	name: "hug",
	category: "Action",
	description: "Hug someone! :3",
    usage: "hug <username>",
    cooldown: 7,
	async execute(client, message, args) {
      try {
      const author = message.author.username;
      const user = message.mentions.users.first().username
      if(!user) return message.lineReplyNoMention("Please mention someone.").then(m => m.delete(5000));
      const data = await (await fetch('https://nekos.life/api/v2/img/hug')).json();
      if (!(data || data.url)) return message.lineReplyNoMention('An error occured.').then(m => m.delete(5000));
      const hugie = new Discord.MessageEmbed()
          .setTitle(`**${user}** has been hugged by **${author}** (つ≧▽≦)つ`, true)
          .setImage(data.url)
          .setColor(0xFACFCA)
           message.lineReplyNoMention(hugie);
    } catch (error) {
      console.log(error);
      return message.lineReplyNoMention('Please mention someone.').then(m => m.delete(5000));
    }
		}
	}