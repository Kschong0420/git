module.exports = {
    name: "leave",
    aliases: ["disconnect", "stop"],
    cooldown: 5,
    inVoiceChannel: true,
    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
        const queue = client.distube.getQueue(message)
        client.distube.stop(message)
        message.channel.send(`${client.emotes.success} | Stopped!`)
    }
}