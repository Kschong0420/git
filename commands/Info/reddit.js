const fetch = require("node-fetch");
const {MessageEmbed} = require("discord.js");
module.exports = {
    name: "reddit",
    cooldown: 5,
    description: 'Search a subreddit.',
    usage: 'reddit <reddit username>',
    category: 'Info',
    async execute(client, message, args) {
        const input = args.join(" ");
        if(!input) return message.lineReplyNoMention("Please provide a subreddit name!")
        const response = await fetch(`https://api.popcat.xyz/subreddit/${encodeURIComponent(input)}`)
        const rsp = await response.json()
        if(rsp.error) return message.lineReplyNoMention("Subreddit Not Found!")
        const yesno = {
            true: "Yes",
            false: "No"
        }
        const embed = new MessageEmbed()
        .setTitle("Subreddit Info")
        .setThumbnail(rsp.icon.split("?")[0])//to avoid discord not showing img as it has to end with .png or .extension
        .setColor("FF5700")
        .addField("Name", rsp.name, true)
        .addField("Title", rsp.title, true)
        .addField("URL", `[URL](${rsp.url})`, true)
        .addField("Active Users", rsp.active_users, true)
        .addField("Total Users", rsp.members, true)
        .addField("Images Allowed", yesno[rsp.allow_images], true)
        .addField("Videos Allowed", yesno[rsp.allow_videos], true)
        .addField("Over 18", yesno[rsp.over_18], true)
        .addField("Description", rsp.description ? rsp.description : "None");
        message.lineReplyNoMention(embed)
    }
}