////This is a TTS command, if you join a channel and put a text, the bot will say that on voice :D
const { MessageEmbed } = require('discord.js');
const discordTTS = require("discord-tts");
module.exports = {
    name: 'tts',
    description: 'A tts command',
    async execute(client, message, args) { //the parameters on an async function
        const botdetect = client.voice.channel;
        //.setFooter(client.user.username, client.user.avatarURL())
        if (!botdetect) return message.channel.send('Command under progressing!')
        const voiceChannel = message.member.voice.channel;
        const say = args.join(' ')
        if (!voiceChannel) return message.channel.send('You need to join a voice channel to use this command.') //If the user isn't in a voicechannel it will be return
        if (!say) {
            let a = new MessageEmbed()
                .setTitle('Please insert a query.')
                .setColor("RED")
            return message.channel.send(a)
        }
        voiceChannel.join().then(connection => {
            const stream = discordTTS.getVoiceStream(say);
            const dispatcher = connection.play(stream);
            dispatcher.on("finish", () => voiceChannel.leave())
            ///if the user say the text to say on voice, the bot will join to the voicechannel and say it , after, he will disconnect :thumbsup:
        })

    }
}