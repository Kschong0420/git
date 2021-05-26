const querystring = require('querystring')
const fetch = require('node-fetch')
const Discord = require('discord.js')

module.exports = {
    name: 'urban',
    cooldown: 5,
    async execute(client, message) {
        const prefix = process.env.PREFIX
        const args = message.content.substring(prefix.length).split(' ')

        if (message.content.toLowerCase().startsWith(`${prefix}urban`)) {
            const searchString = querystring.stringify({ term: args.slice(1).join(' ') })

            if (!args.slice(1).join(' ')) {
                return message.lineReplyNoMention(new Discord.MessageEmbed()
                    .setColor('BLUE')
                    .setDescription('You need to specify something you want to search the urban dictionary.')
                )
            }

            const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${searchString}`).then(response => response.json())

            try {
                const [answer] = list

                const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str)

                const embed = new Discord.MessageEmbed()
                    .setColor('BLUE')
                    .setTitle(answer.word)
                    .setURL(answer.permalink)
                    .addFields(
                        { name: 'Definition', value: trim(answer.definition, 1024) },
                        { name: 'Example', value: trim(answer.example, 1024) },
                        { name: 'Rating', value: `${answer.thumbs_up} 👍. ${answer.thumbs_down} 👎.` }
                    )
                message.lineReplyNoMention(embed)
            } catch (error) {
                console.log(error)
                return message.lineReplyNoMention(new Discord.MessageEmbed()
                    .setColor('BLUE')
                    .setDescription(`No results were found for **${args.slice(1).join(' ')}**`)
                )
            }
        }

    }
}

