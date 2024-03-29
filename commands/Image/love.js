const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
        name: "love",
        description: "Shows image of 2 lovers.",
        cooldown: 10,
        usage: "love <username1> <username2>",
        accessableby: "everyone",
        category: 'Image',

    async execute(client, message, args) {
        
        let user =  await message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let user2 =  await message.mentions.members.array()[1] || message.guild.members.cache.get(args[1])
        if(!args[0]) return message.lineReply("Please enter a name of lover!")
        if(!args[1]) return message.lineReply("Please enter name of another lover!")
        
        if (!user) return message.lineReply("please enter a valid user!")
        if (!user2) return message.lineReply("please enter a valid user!")

        let m = await message.lineReplyNoMention("Please wait..");
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=ship&user1=${user.user.displayAvatarURL({ format: "png", size: 512 })}&user2=${user2.user.displayAvatarURL({ format: "png", size: 512 })}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "love.png");
            message.lineReplyNoMention(attachment);
            m.delete({ timeout: 5000 });
        } catch(e){
            m.edit("Error, Please Try Again! Mention Someone");
        }
    }
};