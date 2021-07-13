const akinator = require('discord.js-akinator')
module.exports = {
    name: 'akinator2',
    aliases: ['aki2'],
    usage: 'akinator2',
    description: "Think a person and let Akinator think.",
    cooldown: 10,
    category: 'Game',
    async execute(client, message, args) {
        akinator(message, client)
    }
}