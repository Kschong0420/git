// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'aw', // anime wallpaper (desktop)
    async execute(cilent, message, args, Discord) {

        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.wallpaper())
        message.channel.send(embed)
    }
}

//https://www.npmjs.com/package/hmtai
//search for more command