module.exports = {
    name: "playskip",
    aliases: ["playSkip"],
    cooldown: 0,
    inVoiceChannel: true,
    description: 'Skip the current song and insert a song you want.',
    usage: 'playskip <song> \`then\` <number>',
    category: 'Music',
    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing playing!`)
        const string = args.join(" ")
        if (!string) return message.channel.send(`${client.emotes.error} | Please enter a song url or query to search.`)
        if(message.guild.me.voice.channel) {
            if(message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.channel.send(`${client.emotes.error} You must be in my voice channel`)
          }
        try {
            client.distube.playSkip(message, string)
        } catch (e) {
            message.channel.send(`${client.emotes.error} | Error: \`${e}\``)
        }
    }
}