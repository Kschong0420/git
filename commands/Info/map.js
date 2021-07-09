const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: 'maps',
    cooldown: 7,
    aliases: ["map"],
    description: 'Check a location on google map.',
    usage: 'map <location>',
    category: 'Info',
    async execute(client, message, args) {

        const sit = args.join("_")
        if (!args.length) return message.lineReply("Provide a valid location")
        const site = `https://maps.google.com/?q=${args.join("+")}`
        try {
            const msg = await message.lineReplyNoMention('Please wait...this may take up to 10 seconds.')
            msg.delete({ timeout: 5000 })
            const { body } = await fetch(
                `https://image.thum.io/get/width/1920/crop/675/noanimate/${site}`
            );
            let att = new Discord.MessageAttachment(body, `${sit}.png`)
            return message.lineReplyNoMention(att)

        } catch (err) {

            return message.lineReplyNoMention(`An error occurred: \`${err.message}\`. Try again later.`)

        };
    }
}