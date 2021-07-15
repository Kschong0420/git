const block = "⬛";
const heart = ":red_square:";//put your own block emoji if you have smth
const { MessageEmbed } = require("discord.js")

module.exports = {
    name: "ship",
    category: 'Fun',
    usage: "ship <username> \`or\` ship <user1> <user2>",
    cooldown: 5,
    description: 'See the ship meter between you and the user you mentioned or two users you mentioned.',

    async execute(client, message, args) {
        const user = message.mentions.users.first();
        if (!user) return message.lineReplyNoMention(`Please specify a user you want to ship with.`)
        if (user && user.id === message.author.id) {
            return message.lineReplyNoMention("Bruh you want to ship yourself XD.")
        }
        if (message.mentions.users.size < 2) {
            let loveEmbed = new MessageEmbed()
                .setColor('dd2e44')
                .setTitle('Shipping...')
                .setDescription(`Shipped ${message.author} and ${user}!`)
                .setImage(`https://api.popcatdev.repl.co/ship?user1=${message.author.displayAvatarURL({ dynamic: false, format: "png" })}&user2=${user.displayAvatarURL({ dynamic: false, format: "png" })}`)
                .addField(`**Ship Meter**`, ship())

            return message.lineReplyNoMention(loveEmbed)
        } else if (message.mentions.users.size > 1) {
            let luv = new MessageEmbed()
                .setColor('dd2e44')
                .setTitle('Shipping...')
                .setDescription(`Shipped ${message.mentions.users.first()} and ${message.mentions.users.last()}!`)
                .setImage(`https://api.popcatdev.repl.co/ship?user1=${message.mentions.users.first().displayAvatarURL({ dynamic: false, format: "png" })}&user2=${message.mentions.users.last().displayAvatarURL({ dynamic: false, format: "png" })}`)
                .addField(`**Ship Meter**`, ship())
            message.lineReplyNoMention(luv)
        }
    }
}

function ship() {
    const hearts = Math.floor(Math.random() * 110) + 0;
    const hearte = (hearts / 10)

    const str = `${heart.repeat(hearte)}${block.repeat(11 - hearte)} ${hearts}%`;
    return str;
}