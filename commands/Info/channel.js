const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "channel",
    cooldown: 5,
    aliases: ['ci', 'channeli', 'cinfo', 'channelinfo'],
    description: 'Check a channel info.',
    usage: 'channel <mentioned channel>',
    category: 'Info',
    async execute(bot, message, args) {
        let channel = message.mentions.channels.first() || bot.guilds.cache.get(message.guild.id).channels.cache.get(args[0]) || message.guild.channels.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.channel;
        if (!channel) return message.lineReplyNoMention("**Channel Not Found!**");

        let channelembed = new MessageEmbed()
            .setTitle(`Channel Information for ${channel.name}`)
            .setThumbnail(message.guild.iconURL())
            .addField("**NSFW**", channel.nsfw, true)
            .addField("**Channel ID**", channel.id, true)
            .addField("**Channel Type**", channel.type)
            .addField("**Channel Description**", `${channel.topic || "No Description"}`)
            .addField("**Channel Created At**", channel.createdAt)
            .setColor("GREEN")
        message.lineReplyNoMention(channelembed);
    }
}