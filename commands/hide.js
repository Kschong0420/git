module.exports = {
    name: 'hide',
    aliases: ["hc", "hide-channel"],
    cooldown: 5,
    description: 'Hide a channel.',
    usage: 'hide <channel>',
    category: 'Moderator',
    async execute(client, message, args) {

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.lineReplyNoMention('Unknown Command.');
        let channel = message.mentions.channels.first();
        let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
        const prefix = process.env.PREFIX 
        if (!channel) return message.lineReply(`Syntax Error! Use ${prefix} hide \`<MentionChannel>\``)
        if (!channel_find) return message.lineReplyNoMention('Channel not found!');
        channel_find.updateOverwrite(message.guild.id, {
            VIEW_CHANNEL: false
        });
        message.lineReplyNoMention('Channel has been hide!');

    },
};