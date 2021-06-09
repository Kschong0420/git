module.exports = {
    name: "pull",
    aliases: ["move"],
    cooldown: 15,
    description: 'Move a member from other channel to your current channel.',
    usage: 'pull <username>',
    category: 'Moderator',
    async execute(client, message, args) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Unknown Command.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase())
        if(!member) return message.reply('Please mention a member!');
        if(!member.voice.channel) return message.reply('The member you mentioned is not in a voice channel!');
        
        if(!message.member.voice.channel) return message.reply('Please join a voice channel');
        member.voice.setChannel(message.member.voice.channel);
        message.channel.send('The member has been moved!')
    }
}