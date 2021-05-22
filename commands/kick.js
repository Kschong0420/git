module.exports = { 
    name: "kick",
    description: "kicks someone",
    cooldown: 0,
    async execute(client, message, args, Discord) {
	  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Unknown Command.")
        let target = message.mentions.members.first()

        if(!target) return message.reply("Please mention someone to kick!")

        if(target.id === message.author.id) {
            return message.reply("You cannot kick yourself!")
        }
      
        if(target.id === client.user.id) return message.channel.send('Unknown Command.')

        if(message.member.roles.highest.position <= target.roles.highest.position) return message.channel.send('You cannot kick someone that has an equal or higher role than you!')
      
        if(!target.bannable) return message.channel.send('I do not have permission to kick that user!')

        let reason = args.slice(1).join(' ')

        if(!reason) return message.reply("Please give a reason!")

        let embed = new Discord.MessageEmbed()
        .setTitle("Member kicked")
        .addField("Target", target.user.tag)
        .addField("Moderator", message.author.tag)
        .addField("Reason", `${reason}`)
        await message.channel.send(embed)
        await target.kick(reason)
    }
}