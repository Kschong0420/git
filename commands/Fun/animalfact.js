const axios = require("axios").default;
const Discord = require("discord.js");

module.exports = {
 name: "animalfact",
 aliases: ["af", "afact", "aft"],
 description: "Shows a random fact about animal.",
 category: "Fun",
 usage: "animalfact <animal>",
 cooldown: 3,
 async execute(client, message, args) {
  try {
   if (!args[0]) {
    return message.lineReplyNoMention('Please provide an animal name.');
   }
   const options = {
    method: "GET",
    url: `https://some-random-api.ml/facts/${args.join(" ")}`,
   };
   axios
    .request(options)
    .then((response) => {
     const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setFooter(
       "Requested by " + `${message.author.username}`,
       message.author.displayAvatarURL({
        dynamic: true,
        format: "png",
        size: 2048,
       })
      )
      .setTitle(`✨ ${args.join(" ")} Fact`)
      .setDescription(response.data.fact);
     message.lineReplyNoMention(embed);
    })
    .catch(() => {
     return message.lineReplyNoMention("Sorry, we don't have any facts for that animal.");
    });
  } catch (err) {
   message.lineReplyNoMention("An error occured.");
  }
 },
};