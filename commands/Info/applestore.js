const Discord = require("discord.js");
const AppleStore = require("app-store-scraper");

//By Legendary Emoji | :D

module.exports = {
  name: "applestore",
  aliases: ["astore", "as"],
  description: "Show applestore application information of your given name.",
  usage: "applestore <Application Name>",
  category: "Info",
  cooldown: 5,
  async execute (client, message, args) {
    if (!args[0])
      return message.lineReplyNoMention(
        `Please give something to search.`
      );

    AppleStore.search({
      term: args.join(" "),
      num: 1,
      lang: 'en-us'
    }).then(Data => {
      let App;

      try {
        App = JSON.parse(JSON.stringify(Data[0]));
      } catch (error) {
        return message.lineReplyNoMention(
          `No application found.`
        );
      }
      
      let Description = App.description.length > 200 ? `${App.description.substr(0, 200)}...` : App.description
      let Price = App.free ? "FREE" : `$${App.price}`;
      let Score = App.score.toFixed(1);

      let Embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(App.icon)
        .setURL(App.url)
        .setTitle(`${App.title}`)
        .setDescription(Description)
        .addField(`Price`, Price, true)
        .addField(`Developer`, App.developer, true)
        .addField(`Score`, Score, true)
        .setFooter(`Requested by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp();

      return message.lineReplyNoMention(Embed);
    });
  }
};