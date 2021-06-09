const Discord = require('discord.js')
const canvacord = require('canvacord')

module.exports = {
    name: 'quote',
    cooldown: 5,
    description: 'Quote someone.',
    usage: 'quote <text>',
    category: 'Image',

    async execute(client, message, args) {

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
        
        if (!user) return message.lineReply('Please specify a user.')
    
        let msg = args.join(" ").slice(22)

        if (!msg) return message.lineReply('Please insert some text')

        const e = user.displayAvatarURL({ format: 'png' })

        const upperCase = str => {
            return str.toUpperCase().replace(/_/g, " ").split(" ")
                .join(" ");
        }

        const img = await canvacord.Canvas.quote({ username: `${user.username}`, color: `${upperCase(user.displayHexColor)}`, message: `${msg}`, image: e })
        let attachment = new Discord.MessageAttachment(img, "quote.png");
        return message.lineReplyNoMention(attachment);
    }
}

