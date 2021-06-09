const Discord = require('discord.js');

module.exports = {
    name: "afk",
    cooldown: 300,
    description: 'Set you to afk list. When someone mentioned you will notive the people your afk reason.',
    usage: 'afk [reason]',
    category: 'Util',
    async execute(client, message, args) {
        
    let reason = args.join(' ') ? args.join(' ') : 'I am currently afk, I will reply as soon possible.';
    let afklist = client.afk.get(message.author.id);

    if (!afklist) {
        let construct = {
            id: message.author.id,
            reason: reason
        };

        client.afk.set(message.author.id, construct);
        return message.lineReply(`You have been set to afk for reason: ${reason}`).then(msg => msg.delete(5000));
    }

}};

