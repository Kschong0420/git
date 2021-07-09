const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "rip",
    description: "rip gif",
    cooldown: 10,
    description: 'RIP.',
    usage: 'rip [username]',
    category: 'Image',

    async execute(client, message, args) {

        //const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author 

        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]).user;
        } else {
            user = message.author;
        }

        let avatar = user.displayAvatarURL({dynamic: false, format: "png"});

        let image = await canvacord.Canvas.rip(avatar);

        let rip = new Discord.MessageAttachment(image, "rip.png")

        message.channel.send(rip);
    }
}
