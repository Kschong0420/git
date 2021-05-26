const Discord = require('discord.js');
const fs = require('fs');
const convert = require('parse-ms')

module.exports = {
    name: "spotify",
    aliases: ['spot', 'sy', 'stf'],
    cooldown: 5,
    async execute(client, message, args) {
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
    
        let status;
        if (user.presence.activities.length === 1) status = user.presence.activities[0];
        else if (user.presence.activities.length > 1) status = user.presence.activities[1];
    
        if (user.presence.activities.length === 0 || status.name !== "Spotify" && status.type !== "LISTENING") {
            const nostatus = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setDescription("The user you mentioned didnt't using spotify now!")
            return message.lineReplyNoMention(nostatus);
        }
    
        if (status !== null && status.type === "LISTENING" && status.name === "Spotify" && status.assets !== null) {
            let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
                url = `https:/open.spotify.com/track/${status.syncID}`,
                name = status.details,
                artist = status.state,
                album = status.assets.largeText,
                timeStart = status.timestamps.start,
                timeEnd = status.timestamps.end,
                timeConvert = convert(timeEnd - timeStart);
    
            let minutes = timeConvert.minutes < 10 ? `0${timeConvert.minutes}` : timeConvert.minutes;
            let seconds = timeConvert.seconds < 10 ? `0${timeConvert.seconds}` : timeConvert.seconds;
            let time = `${minutes}:${seconds}`;
    
            const information = new Discord.MessageEmbed()
            .setAuthor("Spotify track information")
            .setColor(0x1ED768)
            .setThumbnail(image)
            .addField("Name:", name, true)
            .addField("Album:", album, true)
            .addField("Artist:", artist, true)
            .addField("Duration:", time, false)
            .addField("Now Listening:", `[\`${artist} - ${name}\`](${url})`, false)
            return message.lineReplyNoMention(information)
            }
        }
    }