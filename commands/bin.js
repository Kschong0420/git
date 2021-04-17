const { create } = require('sourcebin');

module.exports = {
    name: "bin",
    async execute(client, message, args, Discord) {
        const content = args.join(" ");
        if(!content) return message.reply("Please give contents you want to post in sourcebin.");

        create([
            {
                name: 'random code',
                content,
                language: 'javascript'
            }
        ],
        {
            title: 'Code',
            description: "Click in to get your code!"
        }
        ).then((value) => {
            message.channel.send(`Your code has beed posted: ${value.url}`)
        })
    }
}