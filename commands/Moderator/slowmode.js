module.exports = {
    name: "slowmode",
    description: "Set the slowmode of a channel.",
    cooldown: 2,
    usage: 'slowmode <time> [reason]',
    category: 'Moderator',
    async execute(client, message, args) {
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.lineReplyNoMention("Unknown Command.")
        }
        let duration = args[0]
        if(isNaN(duration)) return message.lineReply("Please give the time in seconds.")
        let reason = args.slice(1).join(" ")
        if (!reason) reason = "No reason given.";
        
        message.channel.setRateLimitPerUser(duration, reason)
        message.lineReplyNoMention(`Successfully set the slowmode to ${duration} seconds with Reason - ${reason}`)
    }
}