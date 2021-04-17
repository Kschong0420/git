const SnakeGame = require('snakecord')
module.exports = {
    name: 'snakegame',
    aliases: ["sg", "snake-game", "snake", "sgame"],
    async execute(client, message, args) {
        const snakeGame = new SnakeGame({
            title: 'Snake Game',
            color: "GREEN",
            timestamp: true,
            gameOverTitle: "Game Over"
        });
        return snakeGame.newGame(message);
    }
}