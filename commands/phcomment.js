const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "phcomment",
    aliases: ["phc", "ph"],
    cooldown: 10,
    description: 'Huh? Someone here comment in there?',
    usage: 'phcomment <username> <text>',
    category: 'Image',

     async execute(client, message, args) {

        let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
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