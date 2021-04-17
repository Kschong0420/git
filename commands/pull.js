module.exports = {
    name: "pull",
    aliases: ["move"],
    async execute(client, message, args) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Unknown Command.')

        const member = message.mentions.members.first();
        if(!member) return message.reply('Please mention a member!');
        if(!member.voice.channel) return message.reply('The member you mentioned is not in a voice channel!');
        
        if(!message.member.voice.channel) return message.reply('Please join a voice channel');
        member.voice.setChannel(message.member.voice.channel);
        message.channel.send('The member has been moved!')
    }
}