module.exports = {
    name: "filter",
    aliases: ["filters"],
    cooldown: 10,
    description: 'Use a filter to the song.',
    usage: 'filter <off/3d/bassboost/vaporwave/nightcore/phaser/tremolo/reverse/karaoke/flanger/gate/haas/mcompand/surround/earwax>',
    category: 'Music',
    inVoiceChannel: true,
    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
        if(message.guild.me.voice.channel) {
            if(message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.channel.send(`${client.emotes.error} You must be in my voice channel`)
          }
        const songislive = queue.songs[0].isLive
        if (songislive === true) return message.channel.send(`${client.emotes.error} | Filters cannot be applied to live broadcasting!`)
        if (args[0] === "off" && queue.filter) client.distube.setFilter(message, queue.filter)
        else if (Object.keys(client.distube.filters).includes(args[0])) client.distube.setFilter(message, args[0])
        else if (args[0]) return message.channel.send(`${client.emotes.error} | Not a valid filter`)
        message.channel.send(`Current Queue Filter: \`${queue.filter || "Off"}\``)
    }
}

