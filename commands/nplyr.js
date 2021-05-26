const lyricsFinder = require('lyrics-finder');
module.exports = {
    name: "nplyr",
    aliases: ["now_playing_lyrics"],
    async execute(client, message) {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
        if (!queue && !client.distube.isPlaying(message)) return message.channel.send(`${client.emotes.error} | There is nothing playing right now!`)
        const song = queue.songs[0]
        const name = song.name
        try {
            const title = name
            let lyrics = await lyricsFinder(title) || `${client.emotes.error} | Not found`;

            await message.channel.send(`${lyrics}`, {
                split: true
            });
        } catch (e) {
            message.reply(`${client.emotes.error} | ${e}`)
        }
    }
}

