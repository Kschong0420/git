const axios = require('axios');
module.exports = {
	name: 'npm',
	async execute(client, message, args) {
		const query = args[0];
		if(!query) return message.channel.send(`Please specify a query!`)
		axios.get('http://registry.npmjs.com/'+query).then(({data}) => {
			if(!data) return message.channel.send(`That NPM does not exist!`)
			const name = data.name;
			const description = data.description;
			const license = data.license;
			const maintainers = data.maintainers.map((maintainer) => `${maintainer.name} - ${maintainer.email}`).join('\n')
			const embed = new (require('discord.js')).MessageEmbed()
			.setTitle(name)
			.setDescription(description)
			.addField("License", license)
			.addField('Author(s)', maintainers)

			message.channel.send(embed);
		})
	}
}