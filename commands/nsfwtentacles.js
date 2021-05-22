// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwtentacles',
    aliases: ['ntentacles', 'nsfwtentacle', 'ntentacle'],
    cooldown: 0,
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.channel.send("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.tentacles())
        message.channel.send(embed)
    }
}
