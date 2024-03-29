const { MessageEmbed } = require("discord.js")
const createBar = require("string-progressbar")
const { toColonNotation } = require("colon-notation")
module.exports = {
    name: "np",
    aliases: ["now_playing"],
    cooldown: 5,
    description: 'Show the music playing currently by Vanilla.',
    usage: 'np',
    category: 'Music',
    async execute(client, message, args) {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
        //if (!queue && !client.distube.isPlaying(message)) return message.channel.send(`${client.emotes.error} | There is nothing playing right now!`)
        const song = queue.songs[0]
        const name = song.name
        const user = song.user.tag
        const avatar = song.user.displayAvatarURL({ dynamic: true, format: "png" })
        const link = song.url
        const time = song.duration 
        const currenttime = queue.currentTime
        const tn = song.thumbnail
        const remaining = (time - currenttime) < 0 ? "◉ LIVE" : time - currenttime
        try {
            const embed = new MessageEmbed()
                .setColor("RANDOM")
                .setAuthor(user, avatar)
                .setTitle(name)
                .setURL(`${link}`)
                .setDescription(`${createBar.splitBar(time === 0 ? currenttime : time, currenttime, 10)[0]} \`[${queue.formattedCurrentTime}/${song.formattedDuration}]\`\n` +
                `${":pause_button:"} ${time === 0 ? "" : `| Time Remaining: \`${toColonNotation(remaining * 1000)}\``}`)
                .setThumbnail(`${tn}`)
            message.channel.send(embed)
            //message.channel.send(queue.currentTime)
            //message.channel.send(time)
            //message.channel.send(remaining)
        } catch (e) {
            message.channel.send(`An error occured.\n\`${e}\``)
        }
    }
}