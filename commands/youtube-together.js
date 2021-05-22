const { DiscordTogether } = require('discord-together');

module.exports = {
    name: "youtube-together",
    cooldown: 30,
    async execute(client, message, args){
        if(!message.member.voice.channel) return message.channel.send('You need to join a voice channel to use this command.')
        if(message.member.voice.channel) {
            DiscordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
                message.channel.send(`${invite.code}`);
                message.channel.send('Click the link to join (Only for PC users)')
            })
        }
    }
}

