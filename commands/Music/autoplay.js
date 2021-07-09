module.exports = {
    name: "autoplay",
    aliases: ["auto", "atp", "ap", "at"],
    cooldown: 3,
    description: 'Enable or disable autoplay, if enable music bot will continue play music after song queue finished.',
    usage: 'autoplay',
    category: 'Music',
    async execute(client, message) {
        try {
            if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
            const queue = client.distube.getQueue(message)
            if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
            if(message.guild.me.voice.channel) {
                if(message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.channel.send(`${client.emotes.error} You must be in my voice channel`)
              }
            const mode = client.distube.toggleAutoplay(message)
            message.channel.send(`${client.emotes.repeat} | Autoplay ${(mode ? `is on now!` : `is off now!`)}`)
        } catch (e) {
            message.channel.send(`An error has occurred.\n\`${e}\``)
        }
    }
}