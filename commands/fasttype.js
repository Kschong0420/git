const txtgen = require('txtgen')
const { FastType } = require('weky')

module.exports = {
    name: 'fasttype',
    aliases: ['ftg', 'fast', 'type', 'fasttypegame', 'typegame'],
    async execute(client, message, args) {
        const game = new FastType({
        message: message,
        winMessage: "GG you won!", //message sent when user types perfectly
        sentence: txtgen.sentence(), //sentence-to-be-typed
        loseMessage: 'Lost ;(', //message sent when user misspell it
        time: 50000, //time that user has to type in ms
        startMessage: 'Good Luck!' //message sent when user starts playing]
    })
    game.start()
}}