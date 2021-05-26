module.exports = { 
    name: "kick",
    description: "kicks someone",
    cooldown: 0,
    async execute(client, message, args, Discord) {
	  if(!message.member.hasPermission("KICK_MEMBERS")) return message.lineReplyNoMention("Unknown Command.")
        let target = message.mentions.members.first()

        if(!target) return message.lineReply("Please mention someone to kick!")

        if(target.id === message.author.id) {
            return message.lineReply("You cannot kick yourself!")
        }
      
        if(target.id === client.user.id) return message.lineReplyNoMention('Unknown Command.')

        if(message.member.roles.highest.position <= target.roles.highest.position) return message.lineReply('You cannot kick someone that has an equal or higher role than you!')
      
        if(!target.bannable) return message.lineReplyNoMention('I do not have permission to kick that user!')

        let reason = args.slice(1).join(' ')

        if(!reason) return message.lineReply("Please give a reason!")

        let embed = new Discord.MessageEmbed()
        .setTitle("Member kicked")
        .addField("Target", target.user.tag)
        .addField("Moderator", message.author.tag)
        .addField("Reason", `${reason}`)
        await message.lineReplyNoMention(embed)
        await target.kick(reason)
    }
}