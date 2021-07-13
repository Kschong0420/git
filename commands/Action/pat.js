const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
	name: "pat",
	category: "Action",
	description: "Pat someone! :3",
    usage: "pat <username>",
    cooldown: 7,
	async execute(client, message, args) {
      try {
      const author = message.author.username;
      const user = message.mentions.users.first().username
      if(!user) return message.lineReplyNoMention("Please mention someone.").then(m => m.delete(5000));
      const data = await (await fetch('https://nekos.life/api/v2/img/pat')).json();
      if (!(data || data.url)) return message.lineReplyNoMention('An error occured.').then(m => m.delete(5000));
      const patie = new Discord.MessageEmbed()
          .setTitle(`**${user}** has been patted by **${author}** (^ω^)`, true)
          .setImage(data.url)
          .setColor(0xFCCFAC)
           message.lineReplyNoMention(patie);
    } catch (error) {
      console.log(error);
      return message.lineReplyNoMention('Please mention someone.').then(m => m.delete(5000));
    }
		}
	}