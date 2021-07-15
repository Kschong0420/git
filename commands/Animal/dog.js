const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "dog",
    aliases: ["dogfact"],
    category: "Animal",
    cooldown: 5,
    description: "Get a random dog picture and dog fact.",
    usage: "dog",
    async execute(client, message, args) {
        const url = "https://some-random-api.ml/img/dog";
        const facts = "https://some-random-api.ml/facts/dog"

        let image, response;
        let fact, responses;
        try {
            response = await axios.get(url);
            image = response.data;

            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.lineReplyNoMention(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Random Dog Image and Fact`)
            .setColor(`#f3f3f3`)
            .setDescription(fact.fact)
            .setImage(image.link)
            .setTimestamp()
            .setFooter(`Requested by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))


        await message.lineReplyNoMention(embed)
    }
}