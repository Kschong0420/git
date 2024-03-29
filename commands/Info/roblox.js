const Discord = require("discord.js");
const snekfetch = require('snekfetch')

module.exports = {
    name: "roblox",
    cooldown: 5,
    description: 'Search a roblox user profile.',
    usage: 'roblox <roblox username>',
    category: 'Info',
    async execute(client, message, args) {
        let saybot = args.join('_');
        const url = `https://api.roblox.com/users/get-by-username?username=${saybot}`;
        snekfetch.get(url).then(result => {
            const data = result.body.Id;
            if (saybot.length < 1) return message.lineReply("Need to provide a username to use this command")
            if (result.body.Id === "undefined") return message.lineReplyNoMention("Couldn't find a roblox user by the name of " + saybot)
            const url2 = `https://api.roblox.com/ownership/hasasset?userId=${data}&assetId=102611803`;
            snekfetch.get(url2).then(a => {
                const Verifiedcheck = a.body
                const embed = new Discord.MessageEmbed()
                    .setColor(0x00A2E8)
                    .setTitle("Username: " + saybot)
                    .setDescription("User ID: " + data)
                    .addField("Verified", Verifiedcheck)
                    .setFooter("Profile Link: " + `https://web.roblox.com/users/${data}/profile`)
                    .setThumbnail("https://roblox.com/Thumbs/BCOverlay.ashx?username=" + saybot)
                    .setImage("http://www.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&Format=Png&username=" + saybot);
                message.lineReplyNoMention({ embed }).catch(console.error);
            })
        })
    }
};