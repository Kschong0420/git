const { Message, MessageEmbed } = require("discord.js");
//const { Default_Prefix, Color } = require("../../config.js");
const Discord = require("discord.js");
//const db = require("wio.db");
const moment = require("moment");
const fetch = require("node-fetch");

module.exports = {
  name: "ss",
  aliases: ["screenshot"],
  category: "Image",
  description: "Take a screenshot of any webpage.",
  cooldown: 10,
  usage: "ss <URL>",
  async execute(client, message, args) {
    const user = message.author
    const urls = args[0];
    if (!urls)
      return message.lineReply(`${user}, please send me a link to screen shot.`)
        //.then(m => m.delete({ timeout: 5000 }).catch(e => {}));
    if (urls.length < 8)
      return message.lineReply(
          "https is too short to reach - 8 limit"
        )
        //.then(m => m.delete({ timeout: 9000 }).catch(e => {}));

    const site = /^(https?:\/\/)/i.test(urls) ? urls : `http://${urls}`;
    try {
      const { body } = await fetch(
        `https://image.thum.io/get/width/1920/crop/675/noanimate/${site}`
      );

      return message.lineReplyNoMention(
        `Here is a screenshot from \`${urls}\`.`,
        {
          files: [{ attachment: body, name: "Screenshot.png" }]
        }
      );
    } catch (err) {
      if (err.status === 404)
        return message.lineReplyNoMention("Could not find any results. Invalid URL?")
          //.then(m => m.delete({ timeout: 14000 }).catch(e => {}));
      return message.lineReply(`An error occurred: \`${err.message}\`. Try again later!`)
        //.then(m => m.delete({ timeout: 13000 }).catch(e => {}));
    }
  }
};