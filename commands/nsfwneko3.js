const { get } = require('superagent');
const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "nsfwneko3",
    aliases: ['hneko3', "nneko3"],
    cooldown: 0,
    async execute(client, message, args) {
        if (!message.channel.nsfw) return message.channel.send("This command can only be used in channels marked nsfw.")
        try {
            get('https://nekobot.xyz/api/image')
                .query({ type: 'hneko' })
                .end((err, response) => {
                    const embed = new MessageEmbed()
                        .setImage(response.body.message);
                    message.channel.send(embed);
                });
        } catch (err) {
            if (bot.config.debug) bot.logger.error(`${err.message} - command: hneko.`);
            message.channel.send({ embed: { color: 15158332, description: `${emojis[0]} An error occured when running this command, please try again or contact support.` } }).then(m => m.delete({ timeout: 5000 }));
            message.delete();
        }
    }
};
