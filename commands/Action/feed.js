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
      const author = message.author.username;
      const user = message.mentions.users.first().username
      if(!user) return message.lineReplyNoMention("Please mention someone.").then(m => m.delete(5000));
      const data = await (await fetch('https://nekos.life/api/v2/img/feed')).json();
      if (!(data || data.url)) return message.lineReplyNoMention('An error occured.').then(m => m.delete(5000));
      const feed = new Discord.MessageEmbed()
          .setTitle(`**${author}** is feeding **${user}!** >///<`, true)
          .setImage(data.url)
          .setColor('ORANGE')
           message.lineReplyNoMention(feed);
    } catch (error) {
      console.log(error);
      return message.lineReplyNoMention('Please mention someone.').then(m => m.delete(5000));
    }
		}
	}