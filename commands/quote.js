const Discord = require('discord.js')
const canvacord = require('canvacord')

module.exports = {
    name: 'quote',

    async execute(client, message, args) {

        let user = message.mentions.members.first()
    
        let msg = args.join(" ").slice(22)

        if(user){
            msg = args.slice(1).join(" ");
        } else {
            msg = args.slice(" ")
            user = message.member;
        }

        const e = user.user.displayAvatarURL({ format: 'png' })

        const upperCase = str => {
            return str.toUpperCase().replace(/_/g, " ").split(" ")
                .join(" ");
        }
        const img = await canvacord.Canvas.quote({ username: `${user.user.username}`, color: `${upperCase(user.displayHexColor)}`, message: `${msg}`, image: e })
        let attachment = new Discord.MessageAttachment(img, "quote.png");
        return message.channel.send(attachment);
    }
}
