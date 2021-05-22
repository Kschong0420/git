const ytsr = require("ytsr");
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'yt',
    aliases: 'youtube',
    cooldown: 5,
    async execute(client, message, args) {
        const query = args.join(" ");
        if (!query) return message.reply("Please provide a search query.");

        const res = await ytsr(query).catch(e => {
            return message.reply("No results were found.");
        });

        const video = res.items.filter(i => i.type === "video")[0];
        if (!video) return message.channel.send("No results were found.");

        const embed = new MessageEmbed()
        .setTitle(video.title)
        .setImage(video.bestThumbnail.url)
        .setColor("RED")
        .setDescription(`**[${video.url}](${video.url})**`)
        .setAuthor(video.author.name)
        .addField("Views", video.views.toLocaleString(), true)
        .addField("Duration", video.duration, true)

        return message.channel.send(await embed);
    }
}