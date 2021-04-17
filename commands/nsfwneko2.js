const Discord = require("discord.js");
const snekfetch = require('snekfetch');
module.exports = {
    name: 'nsfwneko2',
    aliases: ['nneko2'],
    async execute(client, message, args) {
        const { body } = await snekfetch
            .get('https://nekos.life/api/lewd/neko')
       
        if (!message.channel.nsfw) return message.channel.send("This command can only be used in channels marked nsfw.")
        const embed = new Discord.MessageEmbed()
        .setImage(body.neko)
        message.channel.send(embed)
  }}