const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "red_panda",
    aliases: ["rpanda", "redpanda"],
    category: "Animal",
    cooldown: 5,
    description: "Get a random red panda picture.",
    usage: "red_panda",
    async execute(client, message, args) {
        const url = "https://some-random-api.ml/img/red_panda";

        let image, response;

        try {
            response = await axios.get(url);
            image = response.data;

        } catch (e) {
            return message.lineReplyNoMention(`An error occured, please try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle(`Random Red Panda Image`)
            .setColor(`#f3f3f3`)
            .setImage(image.link)
            .setTimestamp()
            .setFooter(`Requested by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))


        await message.lineReplyNoMention(embed)
    }
}