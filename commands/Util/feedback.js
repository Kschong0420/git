const Discord = require("discord.js");

module.exports = {
    name: 'feedback',
    aliases: ['feed-back'],
    cooldown: 30,
    usage: 'feedback <text>.',
    category: 'Util',
    description: 'Give some feedback about Vanilla Bot',
    async execute(client, message, args) {
        let feedback = args.join(" ").slice(0);
        let user = message.author.username;
        let uid = message.author.id;
        let guild = message.guild.name;
        let gid = message.guild.id;
        let channel = client.channels.cache.get("838463226467057674")
        let embed = new Discord.MessageEmbed()
            .setTitle(`Feedback Report`)
            .setThumbnail("https://www.icegif.com/wp-content/uploads/icegif-1.gif")
            .addField("Feedback", feedback)
            .addField("Feedback By", user)
            .addField("Feedback User ID", uid)
            .addField("Feedback Guild Name ", guild)
            .addField("Feedback Guild ID", gid)
            .setColor("YELLOW")
            .setTimestamp()
            .setFooter("New Feedback Found")

        message.lineReply("**❤️ Your Feedback has been reported in the official server. Thanks for the valuable feedback thanks for supporting us.**")
        channel.send(embed).then(i => i.react("💖"))


    }
};
