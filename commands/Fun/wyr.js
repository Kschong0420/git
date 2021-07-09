const { MessageEmbed } = require('discord.js')
const request = require("node-superfetch")

module.exports = {
    name: 'wyr',
    aliases: ['would-you-ratherr'],
    description: "Send some would-you rather questions.",
    cooldown: 5,
    usage: 'wyr',
    category: 'Fun',
    async execute(client, message, args) {

        let option1
        let option2
        let URLresult

        const { text } = await request.get('http://either.io/')
        URLresult = await JSON.parse(text.match(/window.initial_question = (\{.+\})/)[1]).question

        const url = `http://either.io/${URLresult.id}/${URLresult.slug}`

        option1 = await URLresult.option_1
        option2 = await URLresult.option_2

        const exampleEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Would You Rather')
        .setAuthor(`By ${URLresult.display_name}`)
        .setURL(url)
        .setDescription(`${ option1} **or** ${ option2}?`)

    
        message.channel.send(exampleEmbed).then(embedMessage => {
            embedMessage.react('1️⃣');
            embedMessage.react('2️⃣');
        })


    }
}