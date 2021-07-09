module.exports = {
    name: "pl#001",
    cooldown: 45,
    inVoiceChannel: true,
    description: 'Play nekopara opening song playlist.',
    usage: 'pl#001',
    category: 'Music',
    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
        let songs = ["https://youtu.be/wLDLnu9Ub3s", "https://youtu.be/MvkI-6Vw87k", "https://youtu.be/7i1q-mih8Is", "https://youtu.be/hHSkFls-rgM", "https://youtu.be/c23W5sNxNO4", "https://youtu.be/NVdoS1GgD3k", "https://youtu.be/z1rZVgpC8xc", "https://youtu.be/dflERjiF1dM", "https://youtu.be/peWRxL1Wck8", "https://youtu.be/9eD83vDdyzo"];
        try {
            client.distube.playCustomPlaylist(message, songs, { name : `Nekopara opening song`})
            message.channel.send(`${client.emotes.success} | Loading playlist #001, this process will take some time.`)
        } catch (e) {
            message.channel.send(`${client.emotes.error} | ${e}`)
        }
    }
}

///////
//let songs = ["", "", "", "", "", "", "", ""]; //8 song if want can add more
