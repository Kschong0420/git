const Pagination = require('discord-paginationembed')

module.exports = {
    name: "",
    category: "commands",
    description: 'Work in progress.',
    usage: '-',
    category: 'Music',
    async execute(client, message, args) {
        const queue = client.distube.getQueue(message)
        if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing playing!`)
        const q = queue.songs.map((song, i) => `${i === 0 ? "Playing:" : `${i}.`} ${song.name} - \`${song.formattedDuration}\``).join("\n")
        
        const FieldsEmbed = new Pagination.FieldsEmbed()
            .setArray([{ word: q }])
            .setAuthorizedUsers([message.author.id])
            .setChannel(message.channel)
            .setElementsPerPage(10)
            .setPageIndicator(true)
            .formatField('Commands', el => el.word)
        FieldsEmbed.embed
            .setColor('BLACK')
            .setTitle('Help | Resulate')
            .setTimestamp()
        FieldsEmbed.build()
    }
}