module.exports = {
    name: "fuckoff",
    cooldown: 43200,
    description: 'Please don\'t use rude to Vanilla.',
    usage: 'fuckoff',
    category: 'Util',
    
    async execute(client, message, args) {
        if (!message.member.voice.channel) return message.lineReply('Hentai baker master, someone rude at me!')
        const queue = client.distube.getQueue(message)
        if (!queue) return message.lineReply("Don't try to be rude at me!!!")
        client.distube.stop(message)
        message.lineReply('Even Shigure also praised me for being calm but u are really making me mad now!')
    }
}