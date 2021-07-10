const Discord = require('discord.js');
const ytsr = require('ytsr');
module.exports = {
    name: 'youtube',
    aliases: 'yt',
    cooldown: 5,
    description: 'Search a youtube video.',
    usage: 'youtube <video name/video link>',
    category: 'Info',
    async execute (client, message, args)  {
        const query = args.join(' ');
        if (!query) return message.channel.send("Please provide a video name or video link.");

        const res = await ytsr(query).catch(e => message.channel.send(`No results found for ${query}`));
        const video = res.items.filter(i => i.type === 'video')[0];
        const embed = new Discord.MessageEmbed()
            .setTitle(video.title)
            .setURL(video.url)
            .setImage(video.bestThumbnail.url)
            .setDescription(video.description ? video.description : "No Description")
            .addField(`Video Information`,
                `**Creator**: [${video.author.name}](${video.author.url}) ${video.author.verified ? ":white_check_mark: (Verified)" : "\u200b"}
                **Length**: ${video.duration} minute(s)
                **Uploaded**: ${video.uploadedAt}
                **Views**: ${video.views.toLocaleString()}`
            )
            .setThumbnail(video.author.bestAvatar.url)
        message.lineReplyNoMention(embed);
    }
}
