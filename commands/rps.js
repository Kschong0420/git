const discord = require('discord.js')

module.exports = {
	name: "rps",
    cooldown: 5,
	description: "play a game of rock, paper and scissors",
	async execute(client, message, args) {
		let embed = new discord.MessageEmbed()
		.setTitle("Rock Paper Scissors")
		.setDescription("React to play!")
        .setFooter(message.author.username)
		.setTimestamp()
		let msg = await message.lineReplyNoMention(embed)
		await msg.react("🗻")
		await msg.react("✂")
		await msg.react("📰")

		const filter = (reaction, user) => {
            return ['🗻', '✂', '📰'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['🗻', '✂', '📰']
        const me = choices[Math.floor(Math.random() * choices.length)]
        msg.awaitReactions(filter, {max:1, time: 60000, error: ["time"]}).then(
        	async(collected) => {
        		const reaction = collected.first()
        		let result = new discord.MessageEmbed()
        		.setTitle("RESULT")
        		.addField(`${message.author.username}'s choice`, `${reaction.emoji.name}`)
        		.addField("System choice", `${me}`)
                .setFooter(message.author.username)
                .setTimestamp()
			await msg.edit(result)
        		if ((me === "🗻" && reaction.emoji.name === "✂") ||
                (me === "📰" && reaction.emoji.name === "🗻") ||
                (me === "✂" && reaction.emoji.name === "📰")) {
                    message.lineReply("You lose!");
            } else if (me === reaction.emoji.name) {
                return message.lineReply("It's a tie!");
            } else {
                return message.lineReply("You won!");
            }
        })
        .catch(collected => {
                message.lineReply('Process has been cancelled since you did not respond in time!');
            })
}
}