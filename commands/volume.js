module.exports = {
    name: "volume",
    aliases: ["v", "set", "set-volume", "vol"],
    cooldown: 0,
    inVoiceChannel: true,
    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
        if(message.guild.me.voice.channel) {
            if(message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.channel.send(`${client.emotes.error} You must be in my voice channel`)
          }
        const volume = parseInt(args[0])
        if (isNaN(volume)) return message.channel.send(`${client.emotes.error} | Please enter a valid number!`)
        if (volume < 0) return message.channel.send(`${client.emotes.error} | Cannot set volume to negative value: \`${volume}%\``)
        if (volume > 200) return message.channel.send(`${client.emotes.error} | Please don't set the volume value too high!`)
        client.distube.setVolume(message, volume)
        message.channel.send(`${client.emotes.success} | Volume set to \`${volume}%\``)
    }
}