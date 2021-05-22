const Discord = require("discord.js");
const translate = require("@k3rn31p4nic/google-translate-api");

module.exports = {
    name: "translate",
    aliases: ["tl"],
    cooldown: 3,
    description: "Translate a sentence.",
    async execute(client, message, args) {
        let language = args[0];
        let text = args.slice(1).join(" ");
        let alias2 = args[2];
        let alias5 = args[3]

        if (!language)
            return message.reply("What language am I suppose to translate to?");
        if (!language.length == 2)
            if (!language.length == 5)
                return message.reply(
                    "All Language must be 2 letter alias. E.g `English > en`, except Simplified Chinese is `zh-cn` and Traditional Chinese is `zh-tw`."
                );


        if (!text) return message.reply("What am I suppose to translate?");

        const result = await translate(text, { to: language });

        const embed = new Discord.MessageEmbed()
            .setDescription(result.text)
            .setTitle("Google Translate")
            .setTimestamp()
            .setFooter(message.author.username)
            .setColor("RED");

        message.channel.send(embed)
    }
};  
