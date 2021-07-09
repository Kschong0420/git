const { Client, Message, Util } = require("discord.js")

module.exports = {
    name: "steal",
    description: 'Steal emoji from other server.',
    category: "Moderator",
    usage: "steal <emoji> [emoji] [emoji] [emoji] [emoji]",
    async execute(client, message, args, Discord) {
        if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.lineReplyNoMention("Unknown Command.")
        if(!args.length) return message.lineReply("Please specify some emoji.")
        
        for (const rawEmoji of args) {
            const parsedEmoji = Util.parseEmoji(rawEmoji);

            if(parsedEmoji.id) {
                const extension = parsedEmoji.animated ? ".gif" : ".png";
                const url = `https://cdn.discordapp.com/emojis/${parsedEmoji.id + extension}`
                message.guild.emojis
                .create(url, parsedEmoji.name)
                .then((emoji) => message.lineReplyNoMention(`Added: \`${emoji.url}\``))
            }
        }
    }
}