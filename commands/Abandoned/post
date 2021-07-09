const Discord = require('discord.js');

module.exports = {
    name: 'post',
    description: "this is a apply command!",
    async execute(client, message, args) {

        message.channel.send('This will continiue in DMs!')

        const questions = [
            "Are you sure you want to continiue?",
            "Give some more info about your post!",
            "What is your payment method?",
            "How much is the pay?",
            "Where can you be contacted? Discord/Email etc.",
            "Is that all?",
            "Are you sure you want to continiue?"
        ];

        let collectCounter = 0
        let endCounter = 0

        const filter = (m) => m.author.id === message.author.id;

        const appStart = await message.author.send(questions[collectCounter++]);
        const channel = appStart.channel;

        const collector = channel.createMessageCollector(filter);

        collector.on("collect", () => {
            if (collectCounter < questions.length) {
                channel.send(questions[collectCounter++])
            } else {
                channel.send('Your post has been sent for approval, you will get a dm if it was not approved!')
                collector.stop("fulfilled");
            }
        });

        const appChannel = client.channels.cache.get("824900822869475338");
        collector.on('end', (collected, reason) => {
            if (reason === "fulfilled") {
                let index = 1;
                const mappedResponses = collected
                    .map((msg) => {
                        return `${index++}) ${questions[endCounter++]}\n-> ${msg.content}`;
                    })
                    .join("\n\n");

                appChannel.send(new Discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                    .setTitle('New Post Approval')
                    .setDescription(mappedResponses)
                    .setColor('YELLOW')
                    .setTimestamp()
                )
            }
        })
    },
};