const Discord = require('discord.js');
const osu = require('node-osu');
const osuapikey = process.env.OSU;
const osuApi = new osu.Api(osuapikey, {
    notFoundAsError: true,
    completeScores: true
})

module.exports = {
    name: 'ctbbest',
    aliases: ["ctbb", "ctbscore"],
    category: "Osu",
    description: "Check out your best 3 scores in osu ctb mode.",
    usage: "v ctbbest <username>",
    cooldown: 5,
    async execute(client, message, args) {
        const user = args.join(' ')
        if(!user) return message.lineReplyNoMention("Please specify an osu username")
        const au = await osuApi.getUser({ u: user, m: '2' })
        osuApi.getUserBest({ u: args[0], m: '2' }).then(scores => {
            const best = new Discord.MessageEmbed()
            .setTitle("3 Best Scores")
            .setColor('#FF1493')
            .setThumbnail(`http://s.ppy.sh/a/${au.id}`)
            .addField("Best Score:", scores[0].score, true)
            .addField("BeatMap:", scores[0].beatmap.title, true)
            .addField("Accuracy during this score:", scores[0].accuracy, true)
            .addField("Best Score:", scores[1].score, true)
            .addField("BeatMap:", scores[1].beatmap.title, true)
            .addField("Accuracy during this score:", scores[1].accuracy, true)
            .addField("Best Score:", scores[2].score, true)
            .addField("BeatMap:", scores[2].beatmap.title, true)
            .addField("Accuracy during this score:", scores[2].accuracy, true)
            .setFooter(message.author.username, message.author.displayAvatarURL({ dynamic : true }))
            .setTimestamp()
            message.lineReplyNoMention(best);
        });
    }
}