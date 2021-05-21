var Discord = require('discord.js');

module.exports = {
    name: 'warn',
    async execute(client, message, args) {
    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Unknown Command.');

    var user = message.mentions.users.first();
    if(!user) return message.reply('You didn\'t mention anyone!');

    if(user.id === message.author.id) {
        return message.reply("You cannot warn yourself!")
    }

    var member;

    try {
        member = await message.guild.members.fetch(user);
    } catch(err) {
        member = null;
    }

    if(!member) return message.reply('They aren\'t in the server!');

    var reason = args.splice(1).join(' ');
    if(!reason) return message.reply('You need to give a reason!');

    var channel = message.guild.channels.cache.find(c => c.name === 'warnlog');

    var log = new Discord.MessageEmbed()
    .setTitle('User Warned')
    .addField('User:', user, true)
    .addField('By:', message.author, true)
    .addField('Reason:', reason)
    channel.send(log);

    var embed = new Discord.MessageEmbed()
    .setTitle('You were warned!')
    .setDescription(reason);

    try {
        user.send(embed);
    } catch(err) {
        console.warn(err);
    }

    message.channel.send(`**${user}** has been warned by **${message.author}**!`);
}
}