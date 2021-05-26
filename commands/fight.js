const { fight } = require('weky')

module.exports = {
    name: 'fight',
    cooldown: 0,
    async execute(client, message, args) {
        if (!message.mentions.users.first()) return message.lineReply('Ping someone to fight.')
        const x = new fight({
            client: client,
            message: message,
            acceptMessage: 'Click to fight with ' + message.author,
            challenger: message.author,
            opponent: message.mentions.users.first()
        })
        x.start()
    }
}
