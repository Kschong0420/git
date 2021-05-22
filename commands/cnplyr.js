const { Message, MessageEmbed } = require("discord.js");
const lyricsFinder = require("lyrics-finder")

module.exports = {
    name: 'cnplyr',
    aliases: ["clearly-now-playing-lyrics"],
    cooldown: 30,


    async execute (client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} | You must be in a voice channel!`)
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
        if (!queue && !client.distube.isPlaying(message)) return message.channel.send(`${client.emotes.error} | There is nothing playing right now!`)
        const song = queue.songs[0]
        const name = song.name

        try {
            const title = name

            let lyrics = await lyricsFinder(title) || `Lyrics to that song was not found.`;

            const embed = new MessageEmbed()
            .setTitle(`Lyrics for ${title}`)
            .setColor("RANDOM")
            .setDescription(lyrics, {
                split: true,
                 })
                message.channel.send({ embed: embed });
                
            
        } catch (error) {
            message.reply(`An error had occured: ${error}`)
        }
    }
};