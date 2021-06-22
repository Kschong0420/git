const paginationEmbed = require("discord.js-pagination")
const Discord = require("discord.js")
module.exports = {
	name: 'emotes',
	category: 'info',
	description: 'Show the emotes of the guild',
	async execute(client, message, args) {
		let emojiArray = [];
		let emojis = message.guild.emojis.cache.array();
		let embeds = [];
		while (emojis.length > 0) emojiArray.push(emojis.splice(0, 15));
		for (let i = 0; i < emojiArray.length; i++) {
			embeds[i] = new Discord.MessageEmbed()
			.setTitle(`Emojis:`)
			.setDescription(emojiArray[i].join("") + "\nThe emotes are time of adding based (not name)")
			.setColor("RANDOM")
		}
		paginationEmbed(message, embeds, ["◀", "▶"])
	},
};