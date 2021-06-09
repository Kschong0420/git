const { MessageEmbed } = require('discord.js');

module.exports = {
        name: "poll",
        aliases: ["polls"],
        cooldown: 30,
        description: 'Make a poll.',
        usage: 'poll ',
        category: 'Moderator',
    
    async execute(client, message, args) {
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.lineReplyNoMention("Unknown Command.");

        if (!args[0])
            return message.lineReply("Please Enter A Query!");

        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle(`Poll For ${message.guild.name} Sever`)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setDescription(args.join(' '))
        var msg = await message.lineReplyNoMention(embed);

        await msg.react('✅');
        await msg.react('❌');

        message.delete({ timeout: 1000 });
    }
}