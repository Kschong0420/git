const fetch = require('node-fetch')
const link = 'https://www.reddit.com/r/EarthPorn.json?sort=top&t=week'


module.exports = {
    name: 'nature',
    aliases: ["natural"],
    cooldown: 7,
    description: 'Get a natural image.',
    usage: 'natural',
    category: 'Image',
    async execute(client, message, args, Discord) {
    let fetchNature = await fetch(link).then(m => m.json()) //changes format so bot can read easier
    const getNature = fetchNature.data.children;
    let randomMeme = getNature[Math.floor(Math.random() * getNature.length)]
    let natureEmbed = new Discord.MessageEmbed() //take random nature picture and turn it into an embed
    .setTitle(randomMeme.data.title)
    .setImage(randomMeme.data.url)
    .setColor("RANDOM")
    .setFooter(`Requested by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))

    message.lineReplyNoMention(natureEmbed)
    }
}
