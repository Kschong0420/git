module.exports = {
    name: "previous",
    aliases: ["pv"],
    cooldown: 0,
    description: 'Play a previous song.',
    usage: 'previous',
    category: 'Music',
    async execute(client, message, args) {
        if(!message.member.voice.channel) return message.channel.send(`${client.emotes.error} You must be in voice channel first`)
        const string = args.join(" ")
        if (!string) return message.channel.send(`${client.emotes.error} | Please enter a previous song url or query to play.`)
        if(message.guild.me.voice.channel) {
            if(message.guild.me.voice.channel.id !== message.member.voice.channel.id) return message.channel.send(`${client.emotes.error} You must be in my voice channel`)
          }
        try {
            client.distube.previous(message, string)
        } catch (e) {
            message.channel.send(`${client.emotes.error} | Error: \`${e}\``)
        }
    }
}