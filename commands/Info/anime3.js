const Discord = require("discord.js");
const malScraper = require('mal-scraper');

module.exports = {
    name: "anime3",
    cooldown: 10,
    description: 'Search an anime from Mal.',
    usage: 'anime3 <anime name>',
    category: 'Info',
    async execute(client, message, args) {
        //command
        const search = `${args}`;
        if (!search)
            return message.lineReply('Please add a search query!');

        malScraper.getInfoFromName(search)
            .then((data) => {
                const malEmbed = new Discord.MessageEmbed()
                    .setAuthor(`${args}`.split(',').join(' '))
                    .setThumbnail(data.picture)
                    .setColor('RANDOM') //What ever u want color!
                    .addField('Premiered', `\`${data.premiered}\``, true)
                    .addField('Broadcast', `\`${data.broadcast}\``, true)
                    .addField('Genres', `\`${data.genres}\``, true)
                    .addField('English Title', `\`${data.englishTitle}\``, true)
                    .addField('Japanese Title', `\`${data.japaneseTitle}\``, true)
                    .addField('Type', `\`${data.type}\``, true)
                    .addField('Episodes', `\`${data.episodes}\``, true)
                    .addField('Rating', `\`${data.rating}\``, true)
                    .addField('Aired', `\`${data.aired}\``, true)
                    .addField('Score', `\`${data.score}\``, true)
                    .addField('Favorite', `\`${data.favorites}\``, true)
                    .addField('Ranked', `\`${data.ranked}\``, true)
                    .addField('Duration', `\`${data.duration}\``, true)
                    .addField('Studios', `\`${data.studios}\``, true)
                    .addField('Popularity', `\`${data.popularity}\``, true)
                    .addField('Members', `\`${data.members}\``, true)
                    .addField('Score Stats', `\`${data.scoreStats}\``, true)
                    .addField('Source', `\`${data.source}\``, true)
                    .addField('Synonyms', `\`${data.synonyms}\``, true)
                    .addField('Status', `\`${data.status}\``, true)
                    .addField('Identifier', `\`${data.id}\``, true)
                    .addField('Link', data.url, true)
                message.lineReplyNoMention(malEmbed)

                const sypEmbed = new Discord.MessageEmbed()
                    .setColor('RANDOM')
                    .addField('Synopsis', `${data.synopsis}`)
                    .setTimestamp()
                    .setFooter(`Requested by ${message.member.displayName}`, message.author.displayAvatarURL({ dynamic: true }))
                message.lineReplyNoMention(sypEmbed)
            })
    }
};

//Made By Alison_
//change by kschong0420_