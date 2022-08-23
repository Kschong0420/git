module.exports = {
    name: 'vc',
    aliases: ['vc'],
    category: 'Owner',
    usage: 'vc',
    description: 'shows bot voice channel.',

    async execute(client, message, args) {
        if (message.author.id !== "759368420453384213") return message.lineReplyNoMention("Unknown Command.");
        message.lineReplyNoMention(`${client.user.username} connected in **${client.voice.connections.size}** channels !`);
    },
};