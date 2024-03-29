const Discord = require("discord.js");
const PlayStore = require("google-play-scraper");

module.exports = {
  name: "playstore",
  aliases: ["pstore", "googleplaystore", "ps", "googleplay"],
  description: "Show playstore application information of your given name.",
  usage: "playstore <Application Name>",
  cooldown: 5,
  category: 'Info',

  async execute (client, message, args) {
    if (!args[0])
      return message.lineReply(
        `Please give something to search!`
      );

    PlayStore.search({
      term: args.join(" "),
      num: 1
    }).then(Data => {
      let App;

      try {
        App = JSON.parse(JSON.stringify(Data[0]));
      } catch (error) {
        return message.lineReplyNoMention(
          `No application found: **"${args.join(" ")}"**`
        );
      }

      let Embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setThumbnail(App.icon)
        .setURL(App.url)
        .setTitle(`${App.title}`)
        .setDescription(App.summary)
        .addField(`Price`, App.priceText, true)
        .addField(`Developer`, App.developer, true)
        .addField(`Score`, App.scoreText, true)
        .setFooter(`Requested by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp();

      return message.lineReplyNoMention(Embed);
    });
  }
};