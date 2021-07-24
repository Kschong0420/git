const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "giraffefact",
    aliases: ["giraffe"],
    category: "Animal",
    cooldown: 5,
    description: "Get a random giraffe fact.",
    usage: "giraffet",
    async execute(client, message, args) {
        const facts = "https://some-random-api.ml/facts/giraffe"

        let fact, responses;
        try {
            responses = await axios.get(facts)
            fact = responses.data

        } catch (e) {
            return message.lineReplyNoMention(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Random Giraffe Fact`)
            .setColor(`#f3f3f3`)
            .setDescription(fact.fact)
            .setTimestamp()
            .setFooter(`Requested by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))


        await message.lineReplyNoMention(embed)
    }
}