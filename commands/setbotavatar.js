const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "setabotvatar",
  category: "Owner",
  usage: "setbotavatar <link>",
  aliases: ["sba", "setbotpfp"],
  description: "Set bot avatar from a link",
  cooldown: 0,
  async execute(client, message, args) {
    if (message.deletable) {
      message.delete();
    }
    if (!args || args.length < 1) {
      return client.err(message, "Owner", "setBotAvatar", 404);
    }
    client.user.setAvatar(args.join(" "));
    message.channel
      .send("Vanilla's profile picture has been changed.")
      //.then(m => m.delete({ timeout: 10000 }));
  },
};