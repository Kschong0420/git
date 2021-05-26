const Discord = require("discord.js");
module.exports = {
    name: "percentage",
    aliases: ["%", "percent", "pct"],
    cooldown: 2,
    async execute(client, message, args) {
    const amount = args[0]
    const maximum = args[1]
    const percentage = (amount / maximum) * 100;
    message.lineReplyNoMention(`${amount} is ${percentage}% of ${maximum}.`);
}}