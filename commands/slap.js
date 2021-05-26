const canvacord = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    name: "slap",
    description: "slap gif",
    cooldown: 10,

    async execute(client, message, args) {

        const user = message.mentions.users.first() || client.users.cache.get(u => u.id === args[0])
        const user2 = message.mentions.users.array()[1] || client.users.cache.get(u => u.id === args[1])
        if(!args[0]) return message.lineReply("Please enter a name!")
        if(!args[1]) return message.lineReply("Please enter another name!")
        
        if (!user) return message.lineReply("please enter a valid user!")
        if (!user2) return message.lineReply("please enter a valid user!")

        let avatar1 = user.displayAvatarURL({dynamic: false, format: "png"});
        let avatar2 = user2.displayAvatarURL({dynamic: false, format: "png"});

        let image = await canvacord.Canvas.slap(avatar1, avatar2);

        let slap = new Discord.MessageAttachment(image, "slap.png")

        message.lineReplyNoMention(slap);
    }
}
