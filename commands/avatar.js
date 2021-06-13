const MessageEmbed = require("discord.js").MessageEmbed;
module.exports = {
  name: "avatar",
  category: "Info",
  description: "Return a user avatar picture.",
  usage: 'avatar [username]',
  cooldown: 5,
  async execute(client, message, args) {
    const user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]) ||
      message.guild.members.cache.find((u) =>
        u.user.username.toLowerCase().includes(
          args.join(" ") || u.user.tag.toLowerCase() === args.join(" ")
        )
      ) ||
      message.member;
    const pngFormat = user.user.displayAvatarURL({ format: "png" });
    const jpgFormat = user.user.displayAvatarURL({ format: "jpg" });
    const webpFormat = user.user.displayAvatarURL();
    const avatar = user.user.displayAvatarURL({ dynamic: true, size: 4096});
    message.channel.send(
      new MessageEmbed()
        .setTitle(`${user.user.username}'s avatar`)
        .setDescription(
          `[png](${pngFormat}) | [jpg](${jpgFormat}) | [webp](${webpFormat})`
        )
        .setImage(avatar)
    );
  },
};
