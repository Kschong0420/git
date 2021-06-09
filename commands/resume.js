module.exports = {
    name: "resume",
    aliases: ["resume", "unpause"],
    cooldown: 0,
    inVoiceChannel: true,
    description: 'Resume the song.',
    usage: 'resume',
    category: 'Music',
    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
        if(message.guild.me.voice.channel) {
            if(message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.lineReplyNoMention(`${client.emotes.error} You must be in my voice channel`)
          }
        client.distube.resume(message)
        message.channel.send(`${client.emotes.resume} | Song Resumed!`)
    }
}