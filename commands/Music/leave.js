module.exports = {
    name: "leave",
    aliases: ["disconnect", "stop"],
    cooldown: 5,
    inVoiceChannel: true,
    description: 'Let Vanilla leave a voice channel.',
    usage: 'leave',
    category: 'Music',
    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
        if(message.guild.me.voice.channel) {
            if(message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.channel.send(`${client.emotes.error} You must be in my voice channel`)
          }
        client.distube.stop(message)
        message.channel.send(`${client.emotes.success} | Stopped!`)
    }
}