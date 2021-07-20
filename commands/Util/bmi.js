const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "bmi",
  description: "Calculate your BMI",
  usage: "bmi <weight in kilograms> <height in centimeters>",
  category: "Util",
  cooldown: 5,
 async execute (client, message, args) {
    const weight = args[0];
    const height = args[1];

    if (!weight)
      return message.lineReplyNoMention("Please provide your weight in kilograms");

    if (!height)
      return message.lineReplyNoMention("Please provide your height in centimeters");

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    const embed = new MessageEmbed()
      .setTitle(`<:bmi:867131477564981258> ${message.author.username}'s BMI`)
      .setColor("YELLOW")
      .addField("Weight", `${weight}kg`, true)
      .addField("Height", `${height}cm`, true)
      .addField("BMI", bmi, true)
      .setFooter(`Requested by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))
      .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()

    message.lineReplyNoMention({ embed });
  },
};