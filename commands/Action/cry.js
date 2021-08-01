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
      const check = message.mentions.users.first()
      const author = message.author.username;
      const res = await fetch('https://shiro.gg/api/images/cry');
      const img = (await res.json()).url;
      if (check) {
          if (check.id === message.author.id) {
              const cry = new Discord.MessageEmbed()
                  .setTitle(`**${author}** is crying! T-T`, true)
                  .setImage(img)
                  .setColor('#00FFFF')
              message.lineReplyNoMention(cry)
          } else {
              const user = message.mentions.users.first().username
              const cry = new Discord.MessageEmbed()
                  .setTitle(`**${author}** let **${user}** crying! T-T`, true)
                  .setImage(img)
                  .setColor('#00FFFF')
              message.lineReplyNoMention(cry)
          }
      } if (!check) {
          const cry = new Discord.MessageEmbed()
              .setTitle(`**${author}** is crying! T-T`, true)
              .setImage(img)
              .setColor('#00FFFF')
          message.lineReplyNoMention(cry)
      }
    } catch (error) {
      console.log(error);
      return message.lineReplyNoMention('Please mention someone.')
    }
		}
	}