// Imports Discord.JS and HMtai //
const Discord = require("discord.js");
const hmtai = require("hmtai");

module.exports = {
    name: 'nsfwneko',
    aliases: ['nneko', 'hneko', 'nsfwneko1', 'nneko1', 'hneko1'],
    async execute(cilent, message, args, Discord) {
        if(!message.channel.nsfw){ message.channel.send("This command can only be used in channels marked nsfw."); return; }
        const embed = new Discord.MessageEmbed()

        .setImage(hmtai.nsfw.nsfwNeko())
        message.channel.send(embed)
    }
}

//https://www.npmjs.com/package/hmtai
//search for more command