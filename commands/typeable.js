module.exports = {
    name: 'able_type_indicator',
    aliases: 'typeable',
    category: 'Owner',
    description: 'You can\'t use this command.',
    usage: 'typeable <start/stop>',
    cooldown: 0,

    async execute( client, message, args) {
        if (message.author.id !== "759368420453384213") return message.lineReplyNoMention("Unknown Command.");
        if (args[0] === 'start') {
            message.channel.startTyping()
        }

        if (args[0] === 'stop') {
            message.channel.stopTyping()
        }
    }
}