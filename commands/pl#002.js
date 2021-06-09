module.exports = {
    name: "pl#002",
    cooldown: 45,
    inVoiceChannel: true,
    description: 'Play nekopara ending song playlist.',
    usage: 'pl#002',
    category: 'Music',
    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
        let songs = ["https://youtu.be/bAZFZ-zILy4", "https://youtu.be/h0bj2dHz_60", "https://youtu.be/ya8kQx14cIY", "https://youtu.be/N2x1aeM3shc", "https://youtu.be/WetLWga9BEs", "https://youtu.be/PMPrVvdctOI", "https://youtu.be/HhnETSN6U_E", "https://youtu.be/cE3aVLmGPWE"];
        try {
            client.distube.playCustomPlaylist(message, songs, { name : `Nekopara ending song`})
            message.channel.send(`${client.emotes.success} | Loading playlist #002, this process will take some time.`)
        } catch (e) {
            message.channel.send(`${client.emotes.error} | ${e}`)
        }
    }
}

///////
//let songs = ["", "", "", "", "", "", "", ""]; //8 song if want can add more
