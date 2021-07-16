const Discord = require('discord.js');
const osu = require('node-osu');
const osuapikey = process.env.OSU;
const osuApi = new osu.Api(osuapikey, {
    notFoundAsError: true,
    completeScores: true
})

module.exports = {
    name: 'osurecent',
    aliases: ["osurc", "osurecent", "circlerc", "circlerecent"],
    category: "Osu",
    description: "Check out someone recent play beatmap last 24 hours in osu circle mode.",
    usage: "osurecent <username>",
    cooldown: 5,
    async execute(client, message, args) {
        try {
            const user = args.join(' ')
            if (!user) return message.lineReplyNoMention("Please specify an osu username.")
            const au = await osuApi.getUser({ u: user })
            osuApi.getUserRecent({ u: args[0] }).then(scores => {
                const recent = new Discord.MessageEmbed()
                    .setTitle(`${user}'s Recent Playing Record in Circle Mode`)
                    .setColor('#FF1493')
                    .setThumbnail(`http://s.ppy.sh/a/${au.id}`)
                    .addField("Best Score:", scores[0].score, true)
                    .addField("BeatMap:", scores[0].beatmap.title, true)
                    .addField("Accuracy:", Math.round(scores[0].accuracy * 10000) / 100 + '%', true)
                    .addField("Best Score:", scores[1].score, true)
                    .addField("BeatMap:", scores[1].beatmap.title, true)
                    .addField("Accuracy:", Math.round(scores[1].accuracy * 10000) / 100 + '%', true)
                    .addField("Best Score:", scores[2].score, true)
                    .addField("BeatMap:", scores[2].beatmap.title, true)
                    .addField("Accuracy:", Math.round(scores[2].accuracy * 10000) / 100 + '%', true)
                    .setFooter(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()
                message.lineReplyNoMention(recent);
            });
        } catch (e) {
            message.lineReplyNoMention(`${user} didn\'t play osu circle mode recently.`)
        }
    }
}