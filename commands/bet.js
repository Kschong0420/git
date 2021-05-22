const discord = require('discord.js')

module.exports = {
	name: "bet",
	description: "bet",
    cooldown: 10,
	async execute(client, message, args) {
        const bet = args.join(' ')
        if (!bet) return message.reply('Please place a bet.')
		let embed = new discord.MessageEmbed()
		.setTitle("Bet")
		.addField('Betting:', `${bet}`)
        .setFooter(message.author.username)
		.setTimestamp()
		let msg = await message.channel.send(embed)
		await msg.react("👍")
		await msg.react("✌")

		const filter = (reaction, user) => {
            return ['👍', '✌'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['👍', '✌']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
        	async(collected) => {
        		const reaction = collected.first()
        		let result = new discord.MessageEmbed()
        		.setTitle("RESULT")
        		.addField(`${message.author.username}'s choice`, `${reaction.emoji.name}`, true)
        		.addField("System choice", `${me}`, true)
                .addField("Bet", `${bet}`)
                .setFooter(message.author.username)
                .setTimestamp()
			await msg.edit(result)
        		if ((me === "👍" && reaction.emoji.name === "✌") ||
                (me === "✌" && reaction.emoji.name === "👍")) {
                    message.reply("You lose!");
            } else if (me === reaction.emoji.name) {
                return message.reply("You won!");
            } 
        })
        .catch(collected => {
                message.reply('Process has been cancelled since you did not respond in time!');
            })
}
}