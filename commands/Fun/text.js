const { Client, Message, MessageEmbed } = require("discord.js");
const figlet = require('figlet');

module.exports = {
    name: "text",
    aliases: ["ascii"],
    cooldown: 7,
    description: 'Turn your message into intresting pattern.',
    usage: 'text <text>',
    category: 'Fun',

    async execute(client, message, args) {
        figlet.text(args.join(" "), {
            font: "",
        }, async (err, data) => {
            message.lineReplyNoMention(`\`\`\`${data}\`\`\``);
        });
    }
}