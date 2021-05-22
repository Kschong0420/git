const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
        name: "love",
        description: "Shows Image of 2 Lovers, 3 persons!",
        cooldown: 10,
        usage: "[mention(1) | ID(1) | name(1) | nickname(1)] [mention(2) | ID(2) | name(2) | nickname(2)]",
        accessableby: "everyone",

    async execute(client, message, args) {
        
        let user =  await message.mentions.members.first() || message.guild.members.cache.get(args[0])
        let user2 =  await message.mentions.members.array()[1] || message.guild.members.cache.get(args[1])
        if(!args[0]) return message.channel.send("Please enter a name of lover!")
        if(!args[1]) return message.channel.send("Please enter name of another lover!")
        
        if (!user) return message.channel.send("please enter a valid user!")
        if (!user2) return message.channel.send("please enter a valid user!")

        let m = await message.channel.send("Please wait..");
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=ship&user1=${user.user.displayAvatarURL({ format: "png", size: 512 })}&user2=${user2.user.displayAvatarURL({ format: "png", size: 512 })}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "love.png");
            message.channel.send(attachment);
            m.delete({ timeout: 5000 });
        } catch(e){
            m.edit("Error, Please Try Again! Mention Someone");
        }
    }
};