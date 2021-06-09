module.exports = {
    name: "pause",
    aliases: ["pause", "hold"],
    cooldown: 0,
    inVoiceChannel: true,
    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.lineReplyNoMention(`${client.emotes.error} | You must be in a voice channel!`)
        const queue = client.distube.getQueue(message)
        if (!queue) return message.lineReplyNoMention(`${client.emotes.error} | There is nothing in the queue right now!`)
        if(message.guild.me.voice.channel) {
            if(message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.lineReplyNoMention(`${client.emotes.error} You must be in my voice channel`)
          }
        client.distube.pause(message)
        message.lineReplyNoMention(`${client.emotes.pause} | Song Paused!`)       
    }
}