const Discord = require("discord.js");

module.exports = {
     name: "sexyrate",
     aliases: ["sexy"],
     async execute(client, message, args) {
          const sexyrate = Math.floor(Math.random() * 100)
          const embed = new Discord.MessageEmbed()
               .addField(":heart_decoration: Sexy Rate :heart_decoration: ", "I rate you a " + sexyrate + " out of 100 on the sexy scale")
               .setThumbnail(message.author.displayAvatarURL)
          message.channel.send({ embed })
     }}