const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "bird",
    aliases: ["birdfact"],
    category: "Animal",
    cooldown: 5,
    description: "Get a random bird picture and bird fact.",
    usage: "bird",
    async execute(client, message, args) {
        const url = "https://some-random-api.ml/img/bird";
        const facts = "https://some-random-api.ml/facts/bird"

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
            .setTitle(`Random Bird Image and Fact`)
            .setColor(`#f3f3f3`)
            .setDescription(fact.fact)
            .setImage(image.link)
            .setTimestamp()
            .setFooter(`Requested by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))


        await message.lineReplyNoMention(embed)
    }
}