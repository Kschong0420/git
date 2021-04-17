const Discord = require("discord.js");
const superagent = require('superagent');
module.exports = {
    name: "neko3",
    async execute(client, message, args) {
    const { body } = await superagent
       .get('https://nekos.life/api/neko');
       const embed = new Discord.MessageEmbed()
       .setColor(0x00A2E8)
       .setImage(body.neko)
       message.channel.send(embed)
 }}
   