module.exports = {
    name: "pl#003",
    cooldown: 45,
    inVoiceChannel: true,
    aliases: ["ja-song"],
    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
        let songs = [
            "https://www.youtube.com/watch?v=7lvDCMkjcsM",//不可思議のカルテ
            "https://www.youtube.com/watch?v=dy90tA3TT1c",//yoasobi 怪物
            "https://www.youtube.com/watch?v=PKRUKalbx3s",//sorairo days
            "https://www.youtube.com/watch?v=FUH9S44D1BM",//Flow-Colors
            "https://www.youtube.com/watch?v=x8VYWazR5mE"//夜に駆ける
        ];
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
