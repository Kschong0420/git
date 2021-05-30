const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "unban",
    description: 'Unbans A User Using Its ID',  // Optional
    cooldown: 5,
    async execute(client, message, args) {
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.lineReplyNoMention("Unknown Command.")

        const userID = args[0]
        if(!userID) return message.lineReply('You need to unban using user\'s ID.') // If User ID Is Not Provided.

        // To See If User Is Banned
        message.guild.fetchBans().then(bans => {
            if(bans.size == 0) return
            let bannedUser = bans.find(b => b.user.id == userID)

            if(bannedUser) { // If User Is Banned Then BOT Will Unban

                const embed =  new MessageEmbed()
                .setTitle('User Unbanned')
                .addField('Target:', `<@${userID}>`)
                .addField('Unbanned By:', message.author)
                .addField('User ID:', userID)
                .setColor('RANDOM')

                message.lineReplyNoMention(embed).then(message.guild.members.unban(bannedUser.user))
            } else {
                message.lineReply('Invalid banned user ID.') // If User Is Not Banned.
            }
        })


    }
}