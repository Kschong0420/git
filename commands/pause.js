module.exports = {
    name: "pause",
    aliases: ["pause", "hold"],
    cooldown: 0,
    inVoiceChannel: true,
    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
        if(message.guild.me.voice.channel) {
            if(message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.channel.send(`${client.emotes.error} You must be in my voice channel`)
          }
        if (queue.pause) {
            client.distube.resume(message)
            return message.channel.send(`${client.emotes.resume} | Song Resumed!`)
        }
        client.distube.pause(message)
        message.channel.send(`${client.emotes.pause} | Song Paused!`)       
    }
}