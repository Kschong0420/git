const { get } = require('superagent');
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "nsfwneko3",
    aliases: ['hneko3', "nneko3"],
    cooldown: 0,
    description: 'NSFW Neko Girls (Cat Girls)',
    usage: 'nsfwneko3',
    category: 'NSFW',
    async execute(client, message, args) {
        if (!message.channel.nsfw) return message.lineReplyNoMention("This command can only be used in channels marked nsfw.")
        try {
            get('https://nekobot.xyz/api/image')
                .query({ type: 'hneko' })
                .end((err, response) => {
                    const embed = new MessageEmbed()
                        .setImage(response.body.message)
                        .setColor('ff007f')
                    message.lineReplyNoMention(embed);
                });
        } catch (err) {
            message.lineReplyNoMention('An error occured when running this command, please try again or contact support.')
        }
    }
};
