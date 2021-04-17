const Discord = require("discord.js");

module.exports = {
     name: "gayrate",
     aliases: ["howgay"],
     async execute(client, message, args) {
          const gayrate = Math.floor(Math.random() * 100)
          const embed = new Discord.MessageEmbed()
               .addField(":rainbow_flag:  Gay Rate :rainbow_flag:  ", "I rate you a " + gayrate + " out of 100 on the gay scale")
               .setThumbnail(message.author.displayAvatarURL)
          message.channel.send({ embed })
     }}