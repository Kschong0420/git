const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "whale",
    aliases: ["whalefact"],
    category: "Animal",
    cooldown: 5,
    description: "Get a random whale picture and whale fact.",
    usage: "whale",
    async execute(client, message, args) {
        const url = "https://some-random-api.ml/img/whale";
        const facts = "https://some-random-api.ml/facts/whale"

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
            .setTitle(`Random Whale Image and Fact`)
            .setColor(`#f3f3f3`)
            .setDescription(fact.fact)
            .setImage(image.link)
            .setTimestamp()
            .setFooter(`Requested by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))


        await message.lineReplyNoMention(embed)
    }
}