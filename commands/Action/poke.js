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
      const author = message.author.username;
      const user = message.mentions.users.first().username
      if(!user) return message.lineReplyNoMention("Please mention someone.").then(m => m.delete(5000));
      const data = await (await fetch('https://nekos.life/api/v2/img/poke')).json();
      if (!(data || data.url)) return message.lineReplyNoMention('An error occured.').then(m => m.delete(5000));
      const poke = new Discord.MessageEmbed()
          .setTitle(`**${author}** pokes **${user}** ರ╭╮ರ`, true)
          .setImage(data.url)
          .setColor('RANDOM')
           message.lineReplyNoMention(poke);
    } catch (error) {
      console.log(error);
      return message.lineReplyNoMention('Please mention someone.').then(m => m.delete(5000));
    }
		}
	}