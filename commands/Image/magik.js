const Discord = require("discord.js");
const AmeClient = require("amethyste-api");
const AmeAPI = new AmeClient("87b859c834e1c31d089b6be91effbdd4dc6c4d91e27e95cc2b28aa28c15d3f66fa6d8dda889e7d3648b9b08d28d3fdde6957cfa156c31f7f44e68d273419ed47");

module.exports = {
 name: "magik",
 aliases: ["magic"],
 description: "Add a dash of magik to the user avatar.",
 category: "Image",
 usage: "magik [user mention or user id]",
 cooldown: 10,
 async execute (client, message, args) {
  try {
   const User = (await message.mentions.members.first()) || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find((r) => r.user.username.toLowerCase().includes() === args.join(" ").toLocaleLowerCase()) || message.guild.members.cache.find((r) => r.displayName.toLowerCase().includes() === args.join(" ").toLocaleLowerCase()) || message.member;
   const buffer = await AmeAPI.generate("magik", {
    url: User.user.displayAvatarURL({
     format: "png",
     size: 2048,
    }),
   });
   const attachment = new Discord.MessageAttachment(buffer, "magik.png");
   message.lineReplyNoMention(attachment);
  } catch (err) {
   console.log(err);
   message.lineReplyNoMention("An error occured.");
  }
 },
};