// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwmaw',
    aliases: ['nmaw'],
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.channel.send("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.nsfwMobileWallpaper())
        message.channel.send(embed)
    }
}