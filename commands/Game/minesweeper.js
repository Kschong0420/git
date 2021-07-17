const Minesweeper = require('discord.js-minesweeper');

module.exports = {
    name: 'minesweeper',
    description: "Play a minesweeper.",
    usage: "minesweeper <rows> <columns> <mines>",
    cooldown: 10,
    category: 'Game',
    async execute(client, message, args, Discord) {
        const rows = parseInt(args[0]);
        const columns = parseInt(args[1]);
        const mines = parseInt(args[2]);

        if (!rows) {
            return message.channel.send('Please provide the number of rows.');
        }

        if (!columns) {
            return message.channel.send('Please provide the number of columns.');
        }

        if (!mines) {
            return message.channel.send('Please provide the number of mines.');
        }

        const minesweeper = new Minesweeper({ rows, columns, mines, revealFirstCell: true });
        const matrix = minesweeper.start();

        return matrix
      ? message.channel.send(matrix)
      : message.channel.send('You have provided invalid data.');

    }
}