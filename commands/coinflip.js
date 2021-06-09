const discord = require('discord.js')

module.exports = {
	name: "coinflip",
	cooldown: 5,
	description: 'Play coinflip with bot.',
    usage: 'coinflip',
    category: 'Fun',
	async execute(client, message, args) {
		let embed = new discord.MessageEmbed()
		.setTitle("Coinflip")
		.setDescription("React head or tail to play!")
        .setFooter(message.author.username)
		.setTimestamp()
		let msg = await message.lineReplyNoMention(embed)
		await msg.react("👶")
		await msg.react("👣")

		const filter = (reaction, user) => {
            return ['👶', '👣'].includes(reaction.emoji.name) && user.id === message.author.id;
        }

        const choices = ['👶', '👣']
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
        		if ((me === "👶" && reaction.emoji.name === "👣") ||
                (me === "👣" && reaction.emoji.name === "👶")) {
                    message.lineReply("You lose!💸");
            } else if (me === reaction.emoji.name) {
                return message.lineReply("You won!💰");
            } 
        })
        .catch(collected => {
                message.lineReply('Process has been cancelled since you did not respond in time!');
            })
}
}