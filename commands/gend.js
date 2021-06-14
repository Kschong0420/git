const { Client, Message, MessageEmbed } = require("discord.js");
module.exports = {
    name: "gend",
    category: "giveaway",
    usage: "gend <Message ID>",
    description: "End a giveaway",
    cooldown: 0,
    async execute(client, message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.lineReplyNoMention("Unknown Command.")
        if (!args[0]) return message.lineReply('Please insert a messageID.')
        const giveaway = client.giveaways.giveaways.find(
            g => g.messageID === args.join(" ")
        );
        if (!giveaway) return message.lineReply('Giveaway not found.')
        client.giveaways.edit(giveaway.messageID, {
            setEndTimestamp: Date.now(),
        });
    },
};