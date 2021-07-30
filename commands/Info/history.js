const request = require('node-superfetch');
const Discord = require('discord.js');

module.exports = {
    name: "history",
    aliases: ['tih', 'todayinhistory'],
    description: "Check what happened before according to the date given.",
    category: 'Info',
    usage: "history <month> <day>",
    async execute(client, message, args) {
        const month = parseInt(args[0]);
        const day = parseInt(args[1]);

        if(isNaN(month)) {
            return message.lineReplyNoMention('please enter a valid month');
        }

        if(isNaN(day)) {
            return message.lineReplyNoMention('please enter a valid date');
        }

        const date = month && day ? `/${month}/${day}` : '';
		try {
			const { text } = await request.get(`http://history.muffinlabs.com/date${date}`);
			const body = JSON.parse(text);
			const events = body.data.Events;
			const event = events[Math.floor(Math.random() * events.length)];
			const embed = new Discord.MessageEmbed()
				.setColor(0x9797FF)
				.setURL(body.url)
				.setTitle(`On this day (${body.date})...`)
				.setTimestamp()
				.setDescription(`${event.year}: ${event.text}`)
				.addField('❯ See More',
                    event.links.map(link => `[${link.title}](${link.link.replace(/\)/g, '%29')})`).join(', '))
                .setTimestamp()
                .setFooter(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            
            return message.lineReplyNoMention(embed);
        } 
        catch (err) {
			if (err.status === 404 || err.status === 500) return message.lineReplyNoMention('Invalid date.');
			return message.lineReplyNoMention(`Oh no, an error occurred: \`${err.message}\`. Try again later!`);
		}
    }
}