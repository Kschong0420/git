module.exports = {
    name: "shuffle",
    cooldown: 0,
    inVoiceChannel: true,
    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
        try {
            client.distube.shuffle(message)
            message.channel.send(`${client.emotes.success} | All song in queue is successfully shuffle!`)
        } catch (e) {
            message.channel.send(`${client.emotes.error} | ${e}`)
        }
    }
}

