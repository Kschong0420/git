const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
        name: 'nsfwbondage',
        description: 'Shows Bondage Pictures',
        aliases: ["nbondage"],
        usage: 'nsfwbondage',
        category: 'NSFW',
        cooldown: 0,
    async execute (client, message, args) {
        if(!message.channel.nsfw){ message.lineReplyNoMention("This command can only be used in channels marked nsfw."); return; }

        superagent.get('https://shiro.gg/api/images/nsfw/bondage')
            .end((err, response) => {
                const embed = new Discord.MessageEmbed()
                .setImage(response.body.url)
                
                message.lineReplyNoMention(embed);
            })
    }
}