const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "kanna",
    cooldown: 7,
    description: 'Return a random cute Kanna.',
    usage: 'kanna',
    category: 'Image',

    async execute(client, message, args) {

        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/image?type=kanna`));
            let json = await res.json();

            const embed = new Discord.MessageEmbed()
                .setImage(json.message)
            message.lineReplyNoMention(embed);
        } catch (err) {
            return message.lineReplyNoMention('An error occured.')
        }
    }
};