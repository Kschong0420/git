const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "koala",
    aliases: ["koalafact"],
    category: "Animal",
    cooldown: 5,
    description: "Get a random koala picture and koala fact.",
    usage: "koala",
    async execute(client, message, args) {
        const url = "https://some-random-api.ml/img/koala";
        const facts = "https://some-random-api.ml/facts/koala"

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
            .setTitle(`Random Koala Image and Fact`)
            .setColor(`#f3f3f3`)
            .setDescription(fact.fact)
            .setImage(image.link)
            .setTimestamp()
            .setFooter(`Requested by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))


        await message.lineReplyNoMention(embed)
    }
}