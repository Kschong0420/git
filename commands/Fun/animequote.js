const axios = require('axios')

module.exports = {
    name: 'animequote',
    aliases: ['aq'],
    category: 'Fun',
    description: 'Get a quote from anime',
    cooldown: 5,
    usage: 'animequote',
    async execute(client, message, args, Discord) {

    const url = 'https://animechan.vercel.app/api/random';

    let response, data;
    try {
        response = await axios.get(url);
        data = response.data;
    } catch(e) {
        return message.channel.send(`An error occured!`)
    }

        const embed = new Discord.MessageEmbed()
        .setTitle(`Random Anime Quote`)
        .setDescription(data.quote)
        .setFooter(`Anime: ${data.anime} | Character: ${data.character}`)
        .setColor('RANDOM')

        await message.channel.send(embed)
}}