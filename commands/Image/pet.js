const Discord = require("discord.js");
const pet = require("pet-pet-gif");

module.exports = {
    name: "pet",
    category: "image",
    description: "Get a cool pet gif!",
    usage: 'pet [username or emoji]',
    cooldown: 5,
    async execute(client, message, args) {

        let mypetpet = await pet(message.author.displayAvatarURL({ format: "png" }));
        let mypetpet_gif = new Discord.MessageAttachment(mypetpet, "petpet.gif");

        if (!args[0]) return message.lineReplyNoMention(mypetpet_gif)

        const user =
            message.mentions.users.first() ||
            client.users.cache.get(args[0])
            //message.guild.users.cache.get(args[0])
        try {
            const emoji =
                client.emojis.cache.find(x => x.name === args[0].split(":")[1]).url

            let petpetemoji = await pet(emoji);

            const petpet = new Discord.MessageAttachment(petpetemoji, "petpet.gif");
            await message.lineReplyNoMention(petpet);
        } catch (e) {
            let user_petpet = await pet(user.displayAvatarURL({ format: "png" }));
            let us_petpet = new Discord.MessageAttachment(user_petpet, "petpet.gif");
            return message.lineReplyNoMention(us_petpet);
        }
    }
};