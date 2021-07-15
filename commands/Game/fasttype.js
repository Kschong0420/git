const txtgen = require('txtgen')
const { FastType } = require('weky')

module.exports = {
    name: 'fasttype',
    cooldown: 5,
    aliases: ['ftg', 'fast', 'type', 'fasttypegame', 'typegame', 'fasttyper'],
    description: 'Play a fasttyper game.',
    usage: 'fasttype',
    category: 'Game',
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