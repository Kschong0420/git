const { Client, Message, MessageEmbed } = require('discord.js');

const prefix = "your prefix"
module.exports = {
    name: 'hide',
    aliases: ["hc", "hide-channel"],
    cooldown: 10,
    async execute(client, message, args) {

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Unknown Command.');
        let channel = message.mentions.channels.first();
        let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
        const prefix = process.env.PREFIX 
        if (!channel) return message.channel.send(`Syntax Error! Use ${prefix} hide \`<MentionChannel>\``)
        if (!channel_find) return message.channel.send('Channel not found!');
        channel_find.updateOverwrite(message.guild.id, {
            VIEW_CHANNEL: false
        });
        message.channel.send('Channel has been hide!');

    },
};