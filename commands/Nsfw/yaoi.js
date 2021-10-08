const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "yaoi",
    cooldown: 7,
    description: 'Return a random yaoi picture.',
    aliases: ['nsfwyaoi', 'nyaoi'],
    usage: 'yaoi',
    category: 'NSFW',

    async execute(client, message, args) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }

        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/image?type=yaoi`));
            let json = await res.json();

            const embed = new Discord.MessageEmbed()
                .setImage(json.message)
            message.lineReplyNoMention(embed);
        } catch (err) {
            return message.lineReplyNoMention('An error occured.')
        }
    }
};