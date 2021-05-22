const Discord = require("discord.js");

module.exports = {
    name: 'achievement',
    aliases: ["achieve", "ach"],
    cooldown: 5,
    async execute(client, message, args) {
        try {
            const icon = Math.floor(Math.random() * 39)
            const text = args.join(" ");
            if (!text) return message.channel.send("You need to provide text for the achievement");
            if (text.length > 25) return message.reply('text must be under 25 characters.');
            const superagent = require('superagent')
            const { body } = await superagent
                .get('https://www.minecraftskinstealer.com/achievement/a.php')
                .query({
                    i: icon,  //max 1 to 39 //less than 1 or more than 39 will auto change to default: grass block
                    h: 'Achievement Get!',
                    t: text
                });
            message.channel.send({
                files: [{ attachment: body, name: 'achievement.png' }]
            });
        } catch (err) {
            console.log(err)
        }
    }
}

//default got 2/40 chance and other icon each got 1/40 chance 