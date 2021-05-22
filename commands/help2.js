const Discord = require("discord.js")

module.exports = {
    name: "help2",
    aliases: ["h", "cmd", "command"],
    cooldown: 30,
    async execute(client, message, args) {
        const embed = new Discord.MessageEmbed()
            .setTitle("Commands")
            .setDescription(client.commands.map(cmd => `\`${cmd.name}\``).join(", "))
            .setTimestamp()
        message.channel.send(embed)
    }
}