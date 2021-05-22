const Discord = require("discord.js");

module.exports = {
     name: "sexyrate",
     aliases: ["sexy"],
     cooldown: 5,
     async execute(client, message, args) {
          const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;

          const sexyrate = Math.floor(Math.random() * 100)
          const embed = new Discord.MessageEmbed()
               .addField(":heart_decoration: Sexy Rate :heart_decoration: ", `I rate ${user} a ${sexyrate} out of 100 on the gay scale`)
               .setThumbnail(message.author.displayAvatarURL)
          message.channel.send({ embed })
     }}