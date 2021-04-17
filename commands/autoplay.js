module.exports = {
    name: "autoplay",
    aliases: ["auto", "atp", "ap", "at"],
    async execute(client, message) {
        try {
            if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
            if (!client.distube.isPlaying(message)) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
            const mode = client.distube.toggleAutoplay(message)
            message.channel.send(`${client.emotes.repeat} | Autoplay ${(mode ? `is on now!` : `is off now!`)}`)
        } catch (e) {
            message.channel.send(`An error has occurred.\n\`${e}\``)
        }
    }
}

//brokennnnnnnnnnnnnn