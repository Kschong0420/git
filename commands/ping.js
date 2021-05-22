const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "ping",
  aliases: ["ms"],
  cooldown: 5,
  description: "Returns Latency and API Ping",
  timeout: 10000,
    async execute(client, message, args) {
      const msg = await message.channel.send("Pinging...");
      const Embed = new MessageEmbed()
        .setTitle("Pong!")
        .setAuthor(`${message.author.username}` , message.author.displayAvatarURL())
        .setDescription(
          `⌛ Latency is ${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms\n⏲️ API Ping is ${Math.round(client.ws.ping)}`
        )
        .setColor('#fb644c');
      msg.edit(Embed);
      msg.edit("\u200b");
    }
};