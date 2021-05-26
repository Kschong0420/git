const { MessageEmbed } = require("discord.js")
const { get } = require("request-promise-native")

module.exports = {
    name: 'anime',
    cooldown: 10,
    async execute(client, message, args){
        if(!args.length) return message.lineReply('Please provide an anime name.')

        let option = {
            url: `https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`,
            method: 'GET',
            headers: {
                'Content-Type': "application/vnd.api+json",
                'Accept': "application/vnd.api+json",
            },
            json: true
        }
        message.lineReplyNoMention("Fetching Your Anime Info, Please wait...").then(msg => {
            get(option).then(mat => {
                const Embed = new MessageEmbed()
                .setTitle(mat.data[0].attributes.titles.en_jp)
                .setURL(`https://kitsu.io/${mat.data[0].id}`)
                .setTimestamp()
                .setThumbnail(mat.data[0].attributes.posterImage.original)
                .setDescription(mat.data[0].attributes.synopsis)
                .setColor("RANDOM")
                .addField("Type", mat.data[0].attributes.showType, true)
                .addField("Published", `${mat.data[0].attributes.startDate ? mat.data[0].attributes.startDate: "N/A"} **TO** ${mat.data[0].attributes.endDate ? mat.data[0].attributes.endDate: "N/A"}`, true)//? means if undefines then execute the next command , means either got result or undefined
                .addField("Status", mat.data[0].attributes.status)
                .addField("Next Release", mat.data[0].attributes.nextRelease ? mat.data[0].attributes.nextRelease: "N/A", true)//here always N/A
                .addField("Episode Count", mat.data[0].attributes.episodeCount ? mat.data[0].attributes.episodeCount: "N/A", true)//if status is current always N/A
                .addField("Duration", mat.data[0].attributes.episodeLength ? mat.data[0].attributes.episodeLength: "N/A", true)
                .addField("RANK", mat.data[0].attributes.ratingRank ? mat.data[0].attributes.ratingRank: "N/A", true)
                .addField("Average Rating", mat.data[0].attributes.averageRating ? mat.data[0].attributes.averageRating: "N/A", true)
                message.channel.send(Embed)
                msg.delete()
                message.delete()
            })
        })
    }
}