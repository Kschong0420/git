const Discord = require('discord.js');
const osu = require('node-osu');
const osuapikey = process.env.OSU;
const osuApi = new osu.Api(osuapikey, {
    notFoundAsError: true,
    completeScores: true
})

module.exports = {
    name: 'taikobest',
    aliases: ["taikob", "taikoscore", "tkbest", 'tkb', 'tkscore'],
    category: "Osu",
    description: "Check out someone best 3 scores in osu taiko mode.",
    usage: "taikobest <username>",
    cooldown: 5,
    async execute(client, message, args) {
        const user = args.join(' ')
        if(!user) return message.lineReplyNoMention("Please specify an osu username.")
        const au = await osuApi.getUser({ u: user, m: '1' })
        osuApi.getUserBest({ u: args[0], m: '1' }).then(scores => {
            const best = new Discord.MessageEmbed()
            .setTitle("3 Best Scores")
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
            .setFooter(message.author.username, message.author.displayAvatarURL({ dynamic : true }))
            .setTimestamp()
            message.lineReplyNoMention(best);
        });
    }
}