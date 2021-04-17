const fetch = require('node-fetch')
var randomWords = require('random-words');

module.exports = {
    name: "guess",
    aliases: ["shuffle-guess", "word-guess"],
    async execute(client, message, args) {
        const word = randomWords()
        const res = await (await (fetch(`https://api.monkedev.com/fun/shuffle?content=${word}&key=WKTXwCVoosGtQNCNfIymRmx1t`))).json();
        await message.channel.send(`A word has been shuffled, it is \`${res.result}\` ! Try to guess it!\nOptions: \`reshuffle\`,\`surrender\``)
        const gameFilter = m => m.author.id
        const gameCollector = message.channel.createMessageCollector(gameFilter);

        gameCollector.on('collect', async msg => {
            if (msg.author.bot) return
            const selection = msg.content.toLowerCase();
            if (selection === word) {
                message.reply(`GG! It was \`${word}\``)
                gameCollector.stop()
            } else if (selection === 'surrender') {
                message.channel.send(`Haha noob, it's \`${word}\` !`)
                gameCollector.stop();
            } else if (selection === 'reshuffle') {
                const ress = await (await (fetch(`https://api.monkedev.com/fun/shuffle?content=${word}&key=WKTXwCVoosGtQNCNfIymRmx1t`))).json();
                message.channel.send(`Word reflushed , it is \`${ress.result}\`\nOptions: \`reshuffle\`,\`surrender\``)
            } //else if (selection !== word) {
                //message.reply(`Wrong\nOptions: \`cancel\`,\`reshuffle\``)
            //}
        });
        console.log(word) //if u wanna test
    }
}