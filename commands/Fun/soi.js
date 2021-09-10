const axios = require('axios');
module.exports = {
    name: "soi",
    category: "Fun",
    description: "A meme from shot on iPhone.",
    usage: "soi",
    cooldown: 7,
    aliases: ["shot-on-iphone"],
    async execute(client, message, args, Discord) {
        const url = 'https://shot-on-iphone.studio/api/video';

        let response, data;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.lineReplyNoMention(`An error occured!`)
        }

        message.lineReplyNoMention(data.url)
    }}