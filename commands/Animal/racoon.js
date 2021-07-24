const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "racoon",
    aliases: ["racoonfact"],
    category: "Animal",
    cooldown: 5,
    description: "Get a random racoon picture and racoon fact.",
    usage: "racoon",
    async execute(client, message, args) {
        const url = "https://some-random-api.ml/img/racoon";
        const facts = "https://some-random-api.ml/facts/racoon"

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
            .setTitle(`Random Racoon Image and Fact`)
            .setColor(`#f3f3f3`)
            .setDescription(fact.fact)
            .setImage(image.link)
            .setTimestamp()
            .setFooter(`Requested by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))


        await message.lineReplyNoMention(embed)
    }
}