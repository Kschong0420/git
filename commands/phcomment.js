const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "phcomment",
    aliases: ["phc", "ph"],
    cooldown: 10,

     async execute(client, message, args) {

        let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.author || message.member
        let text = args.join(" ");

        if(user){
            text = args.slice(1).join(" ");
        } else {
            text = args.slice(" ")
            user = message.member;
        }

        if(!text){
            return message.channel.send("Please enter a text!");
        }

        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=phcomment&username=${user.user.username}&image=${user.user.displayAvatarURL({ format: "png", size: 512 })}&text=${text}`));
            let json = await res.json();
            let embed = new Discord.MessageEmbed()
               .setImage(json.message)
           message.channel.send(embed);
           } catch (err) {
               return message.channel.send('An error occured.')
           }
       }
};