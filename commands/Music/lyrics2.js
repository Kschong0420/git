const fetch = require("node-fetch")
const Discord = require("discord.js")
module.exports = {
    name: 'lyric2',
    aliases: ["l2", "lyrics2", "lyr2"],
    cooldown: 15,
    description: 'Show a song lyric.',
    usage: 'lyric <artist> \`then type\` <song name>',
    category: 'Music',
    async execute(client, message, args) {
        const song = args.join(" ")
        if (!song) return message.lineReplyNoMention("Please provide a song to search for!")
        const json = await fetch(`https://api.popcat.xyz/lyrics?song=${encodeURIComponent(song)}`).then(r => r.json())
        if (json.error) return message.lineReplyNoMention("Song not found!")
        const url = `${song.replace(" ", "+")}`
        let lyrics = json.lyrics;
        if (lyrics.length > 4096) lyrics = `Too long to show, visit [https://popcat.xyz/lyrics/${url}](https://popcat.xyz/lyrics/${url}) For full lyrics`
        const embed = new Discord.MessageEmbed()
            .setTitle(json.full_title === "none" ? json.title : json.full_title)
            .setURL(json.url)
            .setThumbnail(json.image)
            .addField("Artist", json.artist)
            .setDescription("Lyrics:\n\n" + lyrics)
            .setColor("ffc0cb")
        message.lineReplyNoMention(embed)
    }
}