module.exports = {
    name: "play",
    aliases: ["p"],
    cooldown: 0,
    inVoiceChannel: true,
    description: 'Play a song.',
    usage: 'play <song name/song url/playlist url> \`then\` <number>',
    category: 'Music',
    async execute(client, message, args) {
        if(!message.member.voice.channel) return message.channel.send(`${client.emotes.error} You must be in voice channel first`)
        const string = args.join(" ")
        if (!string) return message.channel.send(`${client.emotes.error} | Please enter a song url or query to search.`)
        if(message.guild.me.voice.channel) {
            if(message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.channel.send(`${client.emotes.error} You must be in my voice channel.`)
          }
        try {
            client.distube.play(message, string)
        } catch (e) {
            message.channel.send(`${client.emotes.error} | Error: \`${e}\``)
        }
    }
}