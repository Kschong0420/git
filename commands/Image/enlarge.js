module.exports = {
	name: 'enlarge',
	category: 'Info',
	description: 'Shows a enlarged version of an emote as well as the source link',
	usage: 'enlarge <emoji>',

	async execute(client, message, args,Discord) {

		if (!args[0]) return message.lineReplyNoMention('Please specify an emoji');
		for (let i = 0; args.length > i; i++) {
			const arg = args[i];
			const emote = Discord.Util.parseEmoji(arg);
			if (emote && emote.id) {
				const embed = new Discord.MessageEmbed()
					.setImage(`https://cdn.discordapp.com/emojis/${emote.id}.${emote.animated ? 'gif' : 'png'}`)
					.setColor('b0ff00')
					.setDescription(`[Emote Link](https://cdn.discordapp.com/emojis/${emote.id}.${emote.animated ? 'gif' : 'png'})`)
					.setAuthor(emote.name, `https://cdn.discordapp.com/emojis/${emote.id}.${emote.animated ? 'gif' : 'png'}`, `https://cdn.discordapp.com/emojis/${emote.id}.${emote.animated ? 'gif' : 'png'}`)
                    .setFooter(`Emoji ID: ${emote.id}`)
                    .setTimestamp()
				message.lineReplyNoMention(embed);
			}
		}
	}
};