module.exports = { 
    name: "ban",
    cooldown: 0,
    description: "Ban someone.",
    usage: 'ban <username> [reason]',
    category: 'Moderator',
    async execute(client, message, args, Discord) {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.lineReplyNoMention("Unknown Command.")
        let target = message.mentions.members.first()

        if(!target) return message.lineReply("Please mention someone to ban!")

        if(target.id === message.author.id) {
            return message.lineReply("You cannot ban yourself!")
        }
      
        if(target.id === client.user.id) return message.lineReplyNoMention("Unknown Command.")

        if(message.member.roles.highest.position <= target.roles.highest.position) return message.lineReply('You cannot ban someone that has an equal or higher role than you!')
      
        if(!target.bannable) return message.lineReply('I do not have permission to ban that user!')

        let reason = args.slice(1).join(' ')

        if (!reason) reason = "No reason given.";

        let embed = new Discord.MessageEmbed()
        .setTitle("Member Banned")
        .addField("Target", target.user.tag)
        .addField("Moderator", message.author.tag)
        .addField("Reason", `${reason}`)
        await message.lineReplyNoMention(embed)
        await target.ban({reason:reason})
    }
}