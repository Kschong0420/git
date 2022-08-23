const Discord = require("discord.js");
const snekfetch = require('snekfetch');
module.exports = {
    name: 'nsfwneko2',
    aliases: ['nneko2', 'hneko2'],
    cooldown: 0,
    description: 'NSFW Neko Girls (Cat Girls)',
    usage: 'nsfwneko2',
    category: 'NSFW',
    async execute(client, message, args) {
        const { body } = await snekfetch
            .get('https://nekos.life/api/lewd/neko')
       
        if (!message.channel.nsfw) return message.lineReplyNoMention("This command can only be used in channels marked nsfw.")
        const embed = new Discord.MessageEmbed()
        .setImage(body.neko)
        .setColor('ff007f')
        message.lineReplyNoMention(embed)
  }}