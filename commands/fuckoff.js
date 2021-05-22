module.exports = {
    name: "fuckoff",
    cooldown: 43200,
    inVoiceChannel: true,
    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send('Hentai baker master, someone rude at me!')
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send("Don't try to be rude at me!!!")
        client.distube.stop(message)
        message.channel.send('Shigure also praised me for being calm but u are really making me mad now!')
    }
}