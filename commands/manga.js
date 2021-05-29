const aq = require("animequote");
const Kitsu = require("kitsu.js");
const kitsu = new Kitsu();
const moment = require("moment");

module.exports = {
  name: 'manga',
  description: "Searches for an manga on Kitsu.io! If no manga name is given, it gives you a random suggestion!",
  cooldown: 5,
  aliases: ["mg"],
  async execute(client, message, args, Discord) {
    try {
      const search = args.join(" ");
      if (!(search)) {
        kitsu.searchManga(aq().quoteanime).then((result) => {

          const manga = result[0];
          const embed = new Discord.MessageEmbed(message);
          embed.setAuthor("Kitsu", "https://kitsu.io/favicon-194x194-2f4dbec5ffe82b8f61a3c6d28a77bc6e.png", `https://kitsu.io/manga/${manga.slug}`);
          //embed.setAuthor(`${manga.titles.english}`, manga.posterImage.original);
          embed.setTitle(manga.titles.english ? manga.titles.english : manga.titles.romaji);
          embed.setDescription(manga.synopsis.replace(/<[^>]*>/g, "").split("\n")[0]);
          embed.addField("❯\u2000Information", `•\u2000**Japanese Name:** ${manga.titles.romaji}\n•\u2000**Age Rating:** ${manga.ageRating ? manga.ageRating : "`N/A`"}\n•\u2000**Chapters:** ${manga.chapterCount ? manga.chapterCount : "`N/A`"}`);
          embed.addField("❯\u2000Stats", `•\u2000**Average Rating:** ${manga.averageRating ? manga.averageRating : "`N/A`"}\n•\u2000**Rating Rank:** ${manga.ratingRank ? manga.ratingRank : "`N/A`"}\n•\u2000**Popularity Rank:** ${manga.popularityRank ? manga.popularityRank : "`N/A`"}`);
          embed.addField("❯\u2000Status", `•\u2000**Volumes:** ${manga.volumeCount ? manga.volumeCount : "`N/A`"}\n•\u2000**Start Date:** ${moment(manga.startDate).format("LL")}\n•\u2000**End Date:** ${manga.endDate ? moment(manga.endDate).format("LL") : "Ongoing"}`);
          embed.setThumbnail(manga.posterImage.original);
          message.lineReplyNoMention(`\`📖\` Try reading **${manga.titles.english ? manga.titles.english : manga.titles.romaji}**!\n`, { embed: embed });
        });
        return;
      }

      kitsu.searchManga(search).then((result) => {
        if (result.length === 0) return message.channel.send(`\`🚫\` No search results found, maybe try searching for something that exists.`);

        const manga = result[0];
        const embed = new Discord.MessageEmbed(message);
        embed.setAuthor("Kitsu", "https://kitsu.io/favicon-194x194-2f4dbec5ffe82b8f61a3c6d28a77bc6e.png", `https://kitsu.io/manga/${manga.slug}`);
        //embed.setAuthor(`${manga.titles.english}`, manga.posterImage.original);
        embed.setTitle(manga.titles.english ? manga.titles.english : manga.titles.romaji);
        embed.setDescription(manga.synopsis.replace(/<[^>]*>/g, "").split("\n")[0]);
        embed.addField("❯\u2000Information", `•\u2000**Japanese Name:** ${manga.titles.romaji}\n•\u2000**Age Rating:** ${manga.ageRating ? manga.ageRating : "`N/A`"}\n•\u2000**Chapters:** ${manga.chapterCount ? manga.chapterCount : "`N/A`"}`);
        embed.addField("❯\u2000Stats", `•\u2000**Average Rating:** ${manga.averageRating ? manga.averageRating : "`N/A`"}\n•\u2000**Rating Rank:** ${manga.ratingRank ? manga.ratingRank : "`N/A`"}\n•\u2000**Popularity Rank:** ${manga.popularityRank ? manga.popularityRank : "`N/A`"}`);
        embed.addField("❯\u2000Status", `•\u2000**Volumes:** ${manga.volumeCount ? manga.volumeCount : "`N/A`"}\n•\u2000**Start Date:** ${moment(manga.startDate).format("LL")}\n•\u2000**End Date:** ${manga.endDate ? moment(manga.endDate).format("LL") : "Ongoing"}`);
        embed.setThumbnail(manga.posterImage.original);
        message.lineReplyNoMention("", { embed: embed });
      });
      return;
    } catch (e) {
      return console.log(e)
    }
  }
}