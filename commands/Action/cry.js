const Discord = require('discord.js');
const fetch = require("node-fetch");

module.exports = {
	name: "cry",
	category: "Action",
	description: "Who let you crying!?",
    usage: "cry <username>",
    cooldown: 7,
	async execute(client, message, args) {
      try {
      const author = message.author.username;
      const user = message.mentions.users.first().username
      const check = message.mentions.users.first()
      if(!user) return message.lineReplyNoMention("Please mention someone.")
      if (check.id === message.author.id) return message.lineReplyNoMention("You can't let yourself crying.")
      const res = await fetch('https://shiro.gg/api/images/cry');
      const img = (await res.json()).url;
      const cry = new Discord.MessageEmbed()
          .setTitle(`**${user}** let **${author} crying!** T-T`, true)
          .setImage(img)
          .setColor('BLUE')
           message.lineReplyNoMention(cry);
    } catch (error) {
      console.log(error);
      return message.lineReplyNoMention('Please mention someone.')
    }
		}
	}