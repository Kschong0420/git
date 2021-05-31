const Discord = require('discord.js');
const AME_API = "87b859c834e1c31d089b6be91effbdd4dc6c4d91e27e95cc2b28aa28c15d3f66fa6d8dda889e7d3648b9b08d28d3fdde6957cfa156c31f7f44e68d273419ed47"
const AmeClient = require('amethyste-api');
const AmeAPI = new AmeClient(AME_API)

module.exports = {
        name: "jail",
        aliases: ['setjail'],
        cooldown: 10,
    async execute(client, message, args) {

        let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.author
        let buffer = await AmeAPI.generate("jail", { url: user.user.displayAvatarURL({ format: "png", size: 512 }) });
        let attachment = new Discord.MessageAttachment(buffer, "jail.png");
        message.lineReplyNoMention(attachment);
    }
};