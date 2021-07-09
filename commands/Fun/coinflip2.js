const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "coinflip2",
    cooldown: 5,
    description: "Flips a coin.",
    usage: 'coinflip2',
    category: 'Fun',
    async execute(client, message, args) {
        const choices = ["heads", "tails"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new MessageEmbed()
        .setTitle("Coinflip!")
        .setDescription(`You flipped a **${choice}**!`)
        message.lineReplyNoMention(embed)
    }
}