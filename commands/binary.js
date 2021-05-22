const axios = require('axios');
module.exports = {
    name: 'binary',
    cooldown: 5,

    async execute(client, message, args, Discord) {
        if (!args[0]) return message.reply('Please specify whether you want to encode or decode');

        const query = args.shift().toLowerCase();
        let word = args.join(" ");

        if (query === 'encode') {
            if (!word) return message.reply('Please specify a word to encode');
            message.delete()
            const { data } = await axios.get(
                `https://some-random-api.ml/binary?text=${encodeURIComponent(
                    word
                )}`
            );


            message.channel.send(data.binary ?? 'An error occured', {
                code: "",
            });
        } else if (query === 'decode') {
            if (!word)
                return message.reply('Please specify a binary to decode');
            const { data } = await axios.get(
                `https://some-random-api.ml/binary?decode=${encodeURIComponent(
                    word
                )}`
            );

            message.channel.send(data.text ?? 'An error occured', {
                code: "",
            });
        } else return message.reply("That option isn't valid")
    },
};

//encode = change text to code
//decode = change code to text