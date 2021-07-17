const Discord = require('discord.js')
const osu = require('node-osu');
const api = new osu.Api(process.env.OSU, {
    notFoundAsError: true,
    completeScores: false
})

module.exports = {
    name: "obeatmap",
    aliases: ['osu-beatmap', 'osubeatmap', 'circlebeatmap'],
    category: "Osu",
    description: "Shows info of a osu circle mode beatmap from osu.",
    usage: "obeatmap <beatmap ID>",
    cooldown: 5,
    async execute(client, message, args) {
        let beatmap = args[0]
        if (!args[0]) return message.lineReplyNoMention('Please provide a valid ID of beatmap in circle mode.')
       
        api.getBeatmaps({ b: beatmap }).then(beatmaps => {
            const embed = new Discord.MessageEmbed()
                .setAuthor("Osu " + beatmaps[0].mode, "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Osu%21Logo_%282015%29.png/800px-Osu%21Logo_%282015%29.png")
                .setTitle(beatmaps[0].title)
                .setThumbnail(`https://b.ppy.sh/thumb/${beatmaps[0].beatmapSetId}.jpg`)
                .setDescription(`Version: ${beatmaps[0].version}`)
                //.setImage(`https://assets.ppy.sh/beatmaps/${beatmaps[0].beatmapSetId}/covers/cover.jpg?1`)
                .setURL(`https://osu.ppy.sh/beatmapsets/${beatmaps[0].beatmapSetId}#osu/${beatmap[0]}`)
                .setColor("#D0436A")
                .addField('Name', beatmaps[0].title, true)
                .addField('Artist', beatmaps[0].artist, true)
                .addField('Creator', beatmaps[0].creator, true)
                .addField('Played Count', beatmaps[0].counts.plays, true)
                .addField('Max Combo', `${beatmaps[0].maxCombo}x`, true)
                .addField("Stars", Math.round(beatmaps[0].difficulty.rating * 100) / 100 , true)
                .addField('Tags:', beatmaps[0].tags ? beatmaps[0].tags.join(", ") : "No tag for this beatmap.")
                .setFooter('Requested By ' + message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            message.lineReplyNoMention(embed)
            //console.log(beatmaps[0])
        })
        
    }
}

