// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwfemdom',
    aliases: ['nfemdom'],
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.channel.send("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.femdom())
        message.channel.send(embed)
    }
}