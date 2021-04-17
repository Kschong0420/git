const { Client, Message, MessageEmbed } = require("discord.js");
const figlet = require('figlet');

module.exports = {
    name: "text",

    async execute(client, message, args) {
        figlet.text(args.join(" "), {
            font: "",
        }, async (err, data) => {
            message.channel.send(`\`\`\`${data}\`\`\``);
        });
    }
}