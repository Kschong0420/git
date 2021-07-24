const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "elephantfact",
    aliases: ["elephant"],
    category: "Animal",
    cooldown: 5,
    description: "Get a random elephant fact.",
    usage: "elephant",
    async execute(client, message, args) {
        const facts = "https://some-random-api.ml/facts/elephant"

        let fact, responses;
        try {
            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.lineReplyNoMention(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Random Elephant Fact`)
            .setColor(`#f3f3f3`)
            .setDescription(fact.fact)
            .setTimestamp()
            .setFooter(`Requested by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))


        await message.lineReplyNoMention(embed)
    }
}