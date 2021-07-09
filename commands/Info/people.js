const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: 'people',
    aliases: ["ppl"],
	cooldown: 5,
	description: 'Search a famous people.',
    usage: 'people <people name>',
    category: 'Info',
    async execute(client, message, args) {
	//const pronouns = ['silly', 'mommy', 'dad', 'mom', 'master', 'nii-san', 'onee-san', 'love', 'ma\'am', 'sir', 'friend', 'b-baka', 'honey'];
	//const randompronoun = pronouns[Math.floor(Math.random() * (pronouns.length - 1 + 1) + 1)];
	if (!args.join(' ')) return message.lineReply(`Please insert a query.`);
	const toSearch = args.join(' ');
	superagent(`https://api.themoviedb.org/3/search/person?api_key=65773cfbab93a4b947736543e8dd740c&language=en-US&query=${toSearch}`).then(body => {
		const items = body.body.results;
		const random = items[0];
		if(!random) return message.lineReply('Couldn\'t find a person with that name!');
		let gender;
		if (random.gender === 2) {
			gender = 'Male';
		}
		if (random.gender === 1) {
			gender = 'Female';
		}
		const embed = new Discord.MessageEmbed()
			.setTitle(random.original_title || random.name || random.original_name)
			.addField('Gender', gender, true)
			.addField('Known For', random.known_for_department, true)
			.addField('Popularity', random.popularity, true)
			.setImage(`https://image.tmdb.org/t/p/w500${random.profile_path}` || `https://image.tmdb.org/t/p/w500${random.backdrop_path}`);
		message.lineReply(embed);
	}).catch(err => message.lineReply('Person not found'));
}};
