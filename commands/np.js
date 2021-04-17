const { MessageEmbed } = require("discord.js")
const createBar = require("string-progressbar")
const { toColonNotation } = require("colon-notation")
module.exports = {
    name: "np",
    aliases: ["now_playing"],
    async execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
        if (!queue && !client.distube.isPlaying(message)) return message.channel.send(`${client.emotes.error} | There is nothing playing right now!`)
        const song = queue.songs[0]
        const name = song.name
        const user = song.user.tag
        const avatar = song.user.displayAvatarURL({ dynamic: true, format: "png" })
        const link = song.url
        const time = song.duration * 1000
        const currenttime = queue.currentTime
        const tn = song.thumbnail
        const remaining = (time - currenttime) < 0 ? "◉ LIVE" : time - currenttime
        try {
            const embed = new MessageEmbed()
                .setColor("RANDOM")
                .setAuthor(user, avatar)
                .setTitle(name)
                .setURL(`${link}`)
                .setDescription(`${createBar(time === 0 ? currenttime : time, currenttime, 10)[0]} \`[${queue.formattedCurrentTime}/${song.formattedDuration}]\`\n` +
                `${client.distube.isPaused(message) === true ? ":pause_button:" : ":arrow_forward:"} ${time === 0 ? "" : `| Time Remaining: \`${toColonNotation(remaining)}\``}`)
                .setThumbnail(`${tn}`)
            message.channel.send(embed)
        } catch (e) {
            message.channel.send(`An error occured.\n\`${e}\``)
        }
    }
}