const { Client, Message, MessageEmbed } = require('discord.js');

const prefix = "your prefix"
module.exports = {
   name: 'show',
   cooldown: 10,
   aliases: ["shown", "unhide", "show-channel", "shown-channel"],
   description: 'Show a hidden channel.',
   usage: 'show <channel>',
   category: 'Moderator',
   async execute(client, message, args) {


      if (!message.member.hasPermission("ADMINISTRATOR")) return message.lineReplyNoMention('Unknown Command.');
      let channel = message.mentions.channels.first();
      let channel_find = message.guild.channels.cache.find(ch => ch.id == channel);
      const prefix = process.env.PREFIX
      if (!channel) return message.lineReply(`Syntax Error! Use ${prefix} show \`<MentionChannel>\``)
      if (!channel_find) return message.lineReplyNoMention('Channel not found!');
      channel_find.updateOverwrite(message.guild.id, {
         VIEW_CHANNEL: true
      });
      message.lineReplyNoMention('Channel has been shown!');
   },
};