const discord = require('discord.js')
module.exports = { 
    name: "ban",
    description: "ban someone",
    async execute(client, message, args) {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Unknown Command.")
        let target = message.mentions.members.first()

        if(!target) return message.reply("Please mention someone to ban!")

        if(target.id === message.author.id) {
            return message.reply("You cannot ban yourself!")
        }

        let reason = args.slice(1).join(' ')

        if(!reason) return message.reply("Please give a reason!")

        let embed = new discord.MessageEmbed()
        .setTitle("Member Banned")
        .addField("Target", target.user.tag)
        .addField("Moderator", message.author.tag)
        .addField("Reason", `${reason}`)
        await message.channel.send(embed)
        await target.ban({reason:reason})
    }
}