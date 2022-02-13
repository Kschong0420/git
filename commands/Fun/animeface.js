const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "animeface",
    aliases: ["af"],
    cooldown: 10,
    description: 'Check anime face for the picture given.',
    usage: 'animeface',
    category: 'Image',

     async execute(client, message, args) {

        if (message.attachments.first()) {
            link = message.attachments.first().url

        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=animeface&image=${link}`));
            let json = await res.json();

           message.lineReplyNoMention(json.message);
           } catch (err) {
               return message.lineReplyNoMention('An error occured.')
           }
       }
}}