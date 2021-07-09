const Discord = require('discord.js');
const axios = require('axios') 

module.exports = {
    name: 'joke',
    description: 'Gives you a funny joke.',
    cooldown: 5,
    usage: 'joke',
    category: 'Fun',
    async execute(client, message, args) {
        axios.get('https://official-joke-api.appspot.com/random_joke')
            .then(res => {

                const joke = res.data.setup;

                const answer = res.data.punchline;

                message.lineReplyNoMention(new Discord.MessageEmbed()
                    .setTitle(`Here is a joke!`)
                    .setDescription(`${joke}\n\n||${answer}||`)
                    .setColor('RANDOM')
                )
            })
    }
}