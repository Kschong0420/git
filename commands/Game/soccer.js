module.exports = {
	name: 'soccer',
	category: 'Game',
	description: 'Play a game of soccer.',
	aliases: ['football'],
	usage: 'soccer',
    cooldown: 5,
	async execute (client, message, args) {
		const filter = m => m.author.id === message.author.id;
		const intro = 'Soccer - Hit the ball into a goal where the goalkeeper is not! To hit the ball, type `left`, `right` or `middle`.';
		const possible = [
			'🥅🥅🥅\n      :levitate:\n\n      ⚽',
			'🥅🥅🥅\n:levitate:\n\n      ⚽',
			'🥅🥅🥅\n            :levitate:\n\n      ⚽',
		];
		const panswers = [
			['left', 'right'],
			['middle', 'right'],
			['left', 'middle'],
		];

		const random = randomNoRepeat(possible);
		const index = possible.indexOf(random);
		const answers = panswers[index];
		message.channel.send(`${intro}\n${random}`).then(() => {
			message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time', 'max'] })
				.then(collected => {
					const ans = collected.first();
					if(!answers.includes(ans.content.toLowerCase())) {
						return message.lineReplyNoMention('👎 The goalie skillfully blocked your shot!');
					}
					else{
						return message.lineReplyNoMention('🏆 Congratulations! You scorred a goal.');
					}
				})
				.catch(() => {
					message.lineReplyNoMention('👎 Looks like you did not answer in time.');
				});
		});
	},
};

function randomNoRepeat(array) {
	let copy = array.slice(0);
	if (copy.length < 1) { copy = array.slice(0); }
	const index = Math.floor(Math.random() * copy.length);
	const item = copy[index];
	copy.splice(index, 1);
	return item;
}