const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "kannapaper",
    aliases: ["kp"],
    cooldown: 3,

     async execute(client, message, args) {

        let text = args.join(" ");

        if(!text){
            return message.channel.send("Please write something on Kanna's paper.");
        }

        if (text.length > 48) return message.channel.send("You write too many text until Kanna cannot write all in her paper.")

        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${text}`));
            let json = await res.json();

           message.channel.send(json.message);
           } catch (err) {
               return message.channel.send('An error occured.')
           }
       }
};