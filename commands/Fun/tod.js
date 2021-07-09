const f = require('node-fetch');

module.exports = {
    name: "tod",
    aliases: ["truth-or-dare"],
    cooldown: 5,
    description: 'Play truth or dare in server.',
    usage: 'tod',
    category: 'Fun',
    async execute(client, message, args, Discord) {

        if (!args[0]) return message.lineReply('You did not specify you want \`truth\` or \`dare\` questions.')

        const query = args[0].toLowerCase();

        if (query === 'truth') {
            await f(`https://summonjs.xyz/api/random-truth`)
                .then(r => r.json())
                .then(t => message.lineReplyNoMention(new Discord.MessageEmbed()
                    .setTitle('Truth')
                    .setColor('RANDON')
                    .setDescription(t.truth)
                    .setFooter(`Requested by ${message.author.tag}`)
                ))
        } else if (query === 'dare') {
            await f(`https://summonjs.xyz/api/random-dare`)
                .then(r => r.json())
                .then(d => message.lineReplyNoMention(new Discord.MessageEmbed()
                    .setTitle('Dare')
                    .setColor('RANDOM')
                    .setDescription(d.dare)
                    .setFooter(`Requested by ${message.author.tag}`)
                ))
        } else return message.lineReply(`Invalid option, Either choose \`truth\` or \`dare\`.`)
    }
}