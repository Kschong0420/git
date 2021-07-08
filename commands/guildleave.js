module.exports = {
    name: "guildleave",
    aliases: [],
    category: "Owner",
    description: "Leave a guild",
    usage: "guildleave <server id>",
    async execute(client, message, args) {
        if (message.author.id !== "759368420453384213") return message.lineReplyNoMention("Unknown Command.");
        const guild = client.guilds.cache.get(args[0]);

        if (!guild)
            return message.lineReplyNoMention(
                "No guild ID was specified. Please specify a guild ID."
            );

        await guild.leave();
        message.lineReplyNoMention(
            `Left **${guild.name}** with \`${guild.memberCount}\` members.`
        );
    },
};