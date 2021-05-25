const { DiscordBattleShip } = require("discord-battleship");

module.exports = {
    name: 'battleship',
    cooldown: 30,
    async execute(client, message, args) {
        let user = message.mentions.members.first();
        if (!user || user.id === message.member.id || user.user.bot)
            return message.channel.send(
                "Please include a user or include a user which isn't you or a bot."
            );

        const BattleShip = new DiscordBattleShip({
            prefix: "v"
        });
        await BattleShip.createGame(message);
    }
}