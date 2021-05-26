module.exports = {
    name: "jump",
    inVoiceChannel: true,
    cooldown: 3,
    async execute(client, message, args) {
        try {
            if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
            const queue = client.distube.getQueue(message)
            if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
            const jump = parseInt(args[0])
            if(message.guild.me.voice.channel) {
                if(message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.channel.send(`${client.emotes.error} You must be in my voice channel`)
              }
            if (isNaN(jump)) return message.channel.send(`${client.emotes.error} | Please enter a valid number!`)
            client.distube.jump(message, parseInt(args[0]))
            message.channel.send(`${client.emotes.success} | Sucessfully jump to no.\`${jump}\``)
        } catch (e) {
            message.channel.send('Invalis Song Number')
        }
    }
}

