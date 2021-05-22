const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'serverlist',
    aliases: ["sl"],
    description: 'List of servers',
    cooldown: 0,
    async execute(client, message, args) {
        if (message.author.id !== "759368420453384213") return message.channel.send("Unknown Command.");
        let serverlist = ''
        client.guilds.cache.forEach((guild) => {
            serverlist = serverlist.concat("** - **" + guild.name + "| ID: " + guild.id + `| Members:` + guild.memberCount + "\n")
        })

        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`Servers that have Vanilla Bot`, '')
            .setDescription(serverlist)
        message.channel.send({ embed });
    }
}