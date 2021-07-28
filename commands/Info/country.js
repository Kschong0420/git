const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
 name: "country",
 description: "Gets a country info.",
 category: "Info",
 usage: "country <country name>",
 cooldown: 7,
 async execute(client, message, args) {
  try {
   const country = args.join(" ");
   if (!country) {
    return message.lineReplyNoMention('Please provide a country name.');
   }
   const url = "https://restcountries.eu/rest/v2/name/" + country;
   let response;
   try {
    response = await fetch(url).then((res) => res.json());
   } catch (e) {
    return message.lineReplyNoMention('An error occured.');
   }
   const data = response[0];
   if (!data) {
    return message.lineReplyNoMention('Please provide a country name.');
   }
   const embed = new Discord.MessageEmbed() // Prettier
    .setColor("RANDOM")
    .setTitle(data.name + " Information")
    .setThumbnail(`https://www.countryflags.io/${data.alpha2Code}/flat/64.png`)
    .setTimestamp()
    .addField("🖊️ Native Name", `\`\`\`${data.nativeName}\`\`\``)
    .addField("🏛️ Capital", `\`\`\`${data.capital ? data.capital : "None"}\`\`\``)
    .addField("📍 Location", `\`\`\`${data.subregion ? data.subregion : data.region}\`\`\``)
    .addField("💱 Currency", `\`\`\`${data.currencies[0].code} ${data.currencies[0].symbol}\`\`\``)
    .addField(":people_holding_hands: Population", `\`\`\`${data.population.toLocaleString()}\`\`\``)
    .addField("🌐 Area", `\`\`\`${data.area.toLocaleString()}km\`\`\``)
    .addField("👅 Languages", `\`\`\`${data.languages.map((lang) => lang.name).join("/")}\`\`\``)
    .setFooter(
     "Requested by " + `${message.author.username}`,
     message.author.displayAvatarURL({
      dynamic: true,
      format: "png",
      size: 2048,
     })
    );
   message.lineReplyNoMention(embed);
  } catch (err) {
   message.lineReplyNoMention('An error occured.');
  }
 },
};