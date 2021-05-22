const { MessageEmbed } = require('discord.js');

module.exports = {
        name: "poll",
        aliases: ["polls"],
        cooldown: 30,
    
    async execute(client, message, args) {
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send("Unknown Command.");

        if (!args[0])
            return message.channel.send("Please Enter A Query!");

        const embed = new MessageEmbed()
            .setColor("GREEN")
            .setTitle(`Poll For ${message.guild.name} Sever`)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setDescription(args.join(' '))
        var msg = await message.channel.send(embed);

        await msg.react('✅');
        await msg.react('❌');

        message.delete({ timeout: 1000 });
    }
}