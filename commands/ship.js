const Discord = require("discord.js")

module.exports = {
    name: "ship",
    cooldown: 5,
    async execute(client, message, args) {
        if (!args[0]) return message.channel.send("Please mention someone!")
        if (!args[1]) return message.channel.send("Please menton someone else!")
        if (args[0] || args[1]) {
            var FirstUser = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            var SecondUser = message.mentions.members.first(-1) || message.guild.members.cache.get(args[1])

            if (!FirstUser) return message.channel.send(`Unknown username: **${args[0]}**!`)
            if (!SecondUser) return message.channel.send(`Unknown username: **${args[1]}**!`)

            if (FirstUser || SecondUser) {
                const FirstUserSliced = FirstUser.user.username.slice(0, FirstUser.user.username.length / 2)
                const SecondUserSliced = SecondUser.map(user => { return user.user.username.slice(user.user.username.length / 2) })
                const SecondUserName = SecondUser.map(user => { return user.user.username })

                message.channel.send(`${FirstUser.user.username} 💕 ${SecondUserName} = **${FirstUserSliced}${SecondUserSliced}**`)
            }

        }
    }
}