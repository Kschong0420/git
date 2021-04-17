const { toMilliseconds } = require("colon-notation")
module.exports = {
    name: "seek",
    aliases: ["s"],
    description: "jump to the second of the song you want",
    cooldown: "5",

    async execute(client, message, args) {
        try {
            if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
            if (!client.distube.isPlaying(message)) return message.channel.send(`${client.emotes.error} | There is nothing playing right now!`)
            if (!args[0]) return message.channel.send("Please tell me how many seconds to jump. Example: 0:40")
            const queue = client.distube.getQueue(message)
            const song = queue.songs[0]
            const duration = song.duration * 1000
            const fduration = song.formattedDuration
            const islive = song.isLive
            const atm = toMilliseconds(args[0])
            if (islive === true) return message.channel.send(`${client.emotes.error} | Live broadcasting is not supported!`)
            if (atm > duration) return message.channel.send(`${client.emotes.error} | Please enter the correct number! The current video length is \`${fduration}\``)
            message.channel.send(`${client.emotes.success} | Jump to \`${args[0]}\` ! *If you jump too long, the song may start again!*`) 
            client.distube.seek(message, Number(atm))
        } catch (e) {
            message.channel.send(`An error has occurred.\n\`${e}\``)
        }
    }
}