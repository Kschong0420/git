const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
	name: "slap",
	category: "Action",
	description: "Slap someone! (>▽<)",
    usage: "slap <username>",
    cooldown: 7,
	async execute(client, message, args) {
      try {
      const author = message.author.username;
      const user = message.mentions.users.first().username
      if(!user) return message.lineReplyNoMention("Please mention someone.").then(m => m.delete(5000));
      const data = await (await fetch('https://nekos.life/api/v2/img/slap')).json();
      if (!(data || data.url)) return message.lineReplyNoMention('An error occured.').then(m => m.delete(5000));
      const slapie = new Discord.MessageEmbed()
          .setTitle(`**${user}** has been slapped by **${author}** (｡•́︿•̀｡)`, true)
          .setImage(data.url)
          .setColor(0xACFFCA)
           message.lineReplyNoMention(slapie);
    } catch (error) {
      console.log(error);
      return message.lineReplyNoMention('Please mention someone.').then(m => m.delete(5000));
    }
		}
	}