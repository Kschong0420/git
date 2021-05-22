const { MessageEmbed } = require("discord.js");

module.exports = {
        name: 'roleinfo',
        aliases: ["rinfo", "ri"],
        cooldown: 0,
    async execute(client, message, args) {
        if (!args[0]) return message.channel.send("Please Enter A Role!")
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        if (!role) return message.channel.send("Please Enter A Valid Role!");

        const status = {
            false: "No",
            true: "Yes"
        }

        let roleembed = new MessageEmbed()
            .setColor("#00ff00")
            .setAuthor("Role Info")
            .setThumbnail(message.guild.iconURL())
            .addField("Name", role.name, true)
            .addField("ID", `\`${role.id}\``, true)
            .addField("Hex", role.hexColor, true)
            .addField("Members", role.members.size, true)
            .addField("Position", role.position, true)
            .addField("Mentionable", status[role.mentionable], true)
            .setFooter(message.member.displayName, message.author.displayAvatarURL())
            .setTimestamp()

        message.channel.send(roleembed);
    }
}