// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'maw', // mobile phone anime wallpaper (phone)
    async execute(cilent, message, args, Discord) {

        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.mobileWallpaper())
        message.channel.send(embed)
    }
}

//https://www.npmjs.com/package/hmtai
//search for more command