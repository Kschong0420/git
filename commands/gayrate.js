const Discord = require("discord.js");

module.exports = {
     name: "gayrate",
     aliases: ["howgay"],
     async execute(client, message, args) {
          const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

          const gayrate = Math.floor(Math.random() * 100)
          const embed = new Discord.MessageEmbed()
               .addField(":rainbow_flag:  Gay Rate :rainbow_flag:  ", `I rate ${user} a ${gayrate} out of 100 on the gay scale`)
               .setThumbnail(user.displayAvatarURL)
          message.channel.send({ embed })
     }}