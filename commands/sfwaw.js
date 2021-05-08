// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'sfwa', // anime wallpaper (desktop)
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.channel.send("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.wallpaper())
        message.channel.send(embed)
    }
}

//https://www.npmjs.com/package/hmtai
//search for more command