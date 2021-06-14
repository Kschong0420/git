const ms = require("ms");
const { Client, Message, MessageEmbed } = require("discord.js");
module.exports = {
  name: "giveaway",
  aliases: ["gstart"],
  description: "Start a giveaway",
  usage: "giveaway <Channel> <Time> <Winners(Number)> <Prize>",
  category: "giveaway",
  cooldown: 5,
  async execute(client, message, args) {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.lineReplyNoMention("Unknown Command.")
    const channel = message.mentions.channels.first();
    if (!channel) return message.lineReply('Please mention a channel.')
    const duration = args[1];
    if (!duration) return message.lineReply('`Time` not found or invalid argument.')
    const winners = parseInt(args[2]);
    if (!winners) return message.lineReply('Missing `Winners` argument')
    if (isNaN(winners)) return message.lineReply('`Winner` argument must be a number.')
    const prize = args.slice(3).join(" ");
    if (!prize) return message.lineReply('What prize you want to giveaway?')
    client.giveaways.start(channel, {
      time: ms(duration),
      prize: prize,
      winnerCount: winners,
      hostedBy: message.author,
      messages: {
        giveaway: "🎉🎉 **GIVEAWAY** 🎉🎉",
        giveawayEnded: "🎉🎉 **GIVEAWAY ENDED** 🎉🎉",
        timeRemaining: "Time Remaining **{duration}**!",
        inviteToParticipate: "React with 🎉 to enter!",
        winMessage: `Congratulations {winners}! You won the **${prize}**!`,
        noWinner: "Could not determine a winner!",
        embedFooter: "Made by Vanilla",
        hostedBy: "Hosted by: {user}",
        winners: "Winner(s)",
        messageURL: "",
        endedAt: "Ends at",
        units: {
          seconds: "seconds",
          minutes: "minutes",
          hours: "hours",
          days: "days",
          pluralS: false,
        },
      },
    });
    message. lineReply(`Giveaway is started in ${channel}`);
  },
};