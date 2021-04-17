module.exports = {
    name: "pause",
    aliases: ["pause", "hold"],
    inVoiceChannel: true,
    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
        if (queue.pause) {
            client.distube.resume(message)
            return message.channel.send(`${client.emotes.resume} | Song Resumed!`)
        }
        client.distube.pause(message)
        message.channel.send(`${client.emotes.pause} | Song Paused!`)       
    }
}