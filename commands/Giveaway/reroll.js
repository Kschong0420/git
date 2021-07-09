const { Client, Message, MessageEmbed } = require("discord.js");
module.exports = {
    name: "reroll",
    aliases: ["greroll", "groll"],
    usage: "reroll <Message ID>",
    description: "Reroll a giveaway",
    cooldown: 3,
    category: "Giveaway",
    async execute(client, message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.lineReplyNoMention("Unknown Command.")
        if (!args[0]) return message.lineReply('Please insert a messageID.')
        const giveaway = client.giveaways.giveaways.find(
            g => g.messageID === args[0]
        );
        if (!giveaway) return message.lineReply('Giveaway not found.')
        client.giveaways.reroll(giveaway.messageID);
    },
};