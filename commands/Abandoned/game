const koenie06games = require('koenie06-games')

const TicTacToe = new koenie06games.TicTacToe()
const ConnectFour = new koenie06games.ConnectFour()
const HangMan = new koenie06games.HangMan()
const SnakeGame = new koenie06games.SnakeGame()
const FastTyper = new koenie06games.FastTyper()
const guessTheNumber = new koenie06games.GuessTheNumber()
const RockPaperScissors = new koenie06games.RockPaperScissors()

module.exports = {
    name: 'game',
    aliases: ['games'],
    cooldown: 10,
    description: 'Play bunch of games with other people',
    usage: 'game <gamename>',
   
    async execute(client, message, args) {

        if (args[0] === 'ttt') {

            TicTacToe.newGame(message)
        } else if (args[0] === 'connectfour') {
            ConnectFour.newGame(message)

        } else if (args[0] === 'hangman') {
            HangMan.newGame(message)

        } else if (args[0] === 'snakegame') {
            SnakeGame.newGame(message)

        } else if (args[0] === 'fasttyper') {
            FastTyper.newGame(message)

        } else if (args[0] === 'guessnumber') {
            guessTheNumber.newGame(message)

        } else if (args[0] === 'rps') {
            RockPaperScissors.newGame(message)
        }



    }
}

