const Discord = require('discord.js')
const nodeosu = require('node-osu')
const osu = new nodeosu.Api(process.env.OSU, { // Set your API Key in config.json
    resAsError: true // Reject on not found instead of returning nothing. (default: true)
})

module.exports = {
    name: "mania",
    cooldown: 5,
    description: 'Checking someone osu game stats in mania mode.',
    usage: 'mania <osu username',
    category: 'Osu',
    async execute(client, message, args) {
        try {
            const user = args.join(' ')
            if (!user) return message.lineReplyNoMention('Please specific an osu username!')
            const au = await osu.getUser({ u: user, m: '3' })
            var uname = au.name
                .replace('_', '\\_')
            const flagnam = au.country.toLowerCase()
            const embed = new Discord.MessageEmbed()
                .setColor('#2f3136')
                .setTitle(`:flag_${flagnam}:  osu!mania profile for ${uname}`)
                .setThumbnail(`http://s.ppy.sh/a/${au.id}`)
                .setURL(au.profileURL)
                .setDescription(`**Offical Rank:** #${au.pp.rank} (${au.country}#${au.pp.countryRank})\r\n**Level:** ${Math.round(au.level * 100) / 100}\r\n**Total PP:** ${au.pp.raw}\r\n**Accuracy:** ${Math.round(au.accuracy * 100) / 100 + '%'}\r\n**Playcount:** ${au.counts.plays}\r\n**Score**:\n- Ranked: ${au.scores.ranked}\n- Total: ${au.scores.total}`)
                .addField('Rank count:', `<:osu_ssh:854289074260017163> ${au.counts.SSH}\n <:osu_ss:854289049345720320>  ${au.counts.SS}\n <:osu_sh:854289024311099402>  ${au.counts.SH}\n <:osu_s:854288996648484864>  ${au.counts.S}\n <:osu_a:825285333293858817>  ${au.counts.A}`, true)
        .addField('Hit count:', `<:h50:854288920056168489>  ${au.counts['50']}\n <:h100:854288946372935700>  ${au.counts['100']}\n <:h300:854288973697908746> ${au.counts['300']}`, true)
            message.lineReplyNoMention(embed)
        } catch (e) {
            message.lineReplyNoMention('User not found!');
        }
    }
}