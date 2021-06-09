module.exports = {

    name: "shutdown",

    cooldown: 0,

    category: "owner",

    description: 'Close the bot.',

    usage: 'shutdown',

    async execute(client, message, args) {

        if (message.author.id !== '759368420453384213') {

            return message.channel.send('Unknown Command.')

        }

        await message.channel.send('Closing Bot...')

        process.exit();

    }

}