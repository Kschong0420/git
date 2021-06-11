// ---------- NOTE: YOU NEED AN APIKEY ---------

const fetch = require("node-fetch").default;
const { MessageEmbed } = require("discord.js");

const apiKey = "WKTXwCVoosGtQNCNfIymRmx1t"
const apiUrl = "https://api.monkedev.com"

module.exports = {
  name: "8ball2",
  category: 'Fun',
  cooldown: 5,
  description: 'Let the bot help you to answer your question.',
  usage: '8ball2 <question>',
  async execute(client, message, args) {
    if (!args[0])
      return message.lineReply(
        `What is your question? | \`8ball2 <Question>\``
      );
    var res = await (
      await fetch(`${apiUrl}/fun/8ball?key=${apiKey}`)
    ).json();
    const embed = new MessageEmbed()
      .setColor(`RANDOM`)
      .setTitle(
        `:question: | __**Question**__: \`${args.join(" ").slice(0, 210)}\``
      )
      .setDescription(`:mag_right: **|** **__Answer__**: \`${res.answer}\``);
    message.lineReplyNoMention(embed);
  },
};


// npm i node-fetch