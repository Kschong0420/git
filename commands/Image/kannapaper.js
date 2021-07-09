const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "kannapaper",
    aliases: ["kp"],
    cooldown: 3,
    description: 'Let Kanna help you write your message in her paper.',
    usage: 'kannapaper',
    category: 'Image',

     async execute(client, message, args) {

        let text = args.join(" ");

        if(!text){
            return message.lineReply("Please write something on Kanna's paper.");
        }

        if (text.length > 48) return message.lineReply("You write too many text until Kanna cannot write all in her paper.")

        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=kannagen&text=${text}`));
            let json = await res.json();

           message.lineReplyNoMention(json.message);
           } catch (err) {
               return message.lineReplyNoMention('An error occured.')
           }
       }
};