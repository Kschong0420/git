const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'lock',
    aliases: ["lock_on", "lock-on"],
    cooldown: 30,
    description: 'Lock a channel.',
    usage: 'lock',
    category: 'Moderator',
    async execute(client, message, args) {

        if (!message.guild.member(message.author).hasPermission("ADMINISTRATOR"))
            return message.lineReplyNoMention("Unknown Command.");
        message.channel.createOverwrite(message.guild.id, { SEND_MESSAGES: false }).then(() => {
            let embed = new MessageEmbed()
                .setAuthor(message.author.username, message.author.displayAvatarURL)
                .setThumbnail(message.guild.iconURL)
                .setDescription(":lock: Locked Channel: <#" + message.channel + "> ")
                .addField('By', `${message.author.tag}`)
                .setColor("RANDOM")
            return message.lineReplyNoMention(embed)
        })
    }
};