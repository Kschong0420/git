const Discord = require("discord.js");
const fetch = require("node-fetch");
const { stripIndents } = require("common-tags");
module.exports = {
    name: "animetrivia",
    description: "anime trivia",
    usage: "animetrivia",
    aliases: ["at", "anime-trivia"],
    cooldown: 5,
    async execute(client, message, args) {
        try {
            const choices = ["A", "B", "C", "D"];
            const data = await fetch(
                "https://opentdb.com/api.php?amount=10&category=31&type=multiple"
            );
            const body = await data.json();
            const answers = body.results[0].incorrect_answers.map((answer) =>
                decodeURIComponent(answer.toLowerCase())
            );
            const correct = decodeURIComponent(
                body.results[0].correct_answer.toLowerCase()
            );
            const question = body.results[0].question;
            const correctQuestion = question.replace(/(&quot\;)/g, '"');
            answers.push(correct);
            const shuffle = (array) => {
                const arr = array.slice(0);
                for (let i = arr.length - 1; i >= 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    const temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
                return arr;
            };
            const shuffled = shuffle(answers);
            let msgQuestion = new Discord.MessageEmbed()
                .setColor("#A348A6")
                .setTitle("You have 15 seconds")
                .setDescription(`${decodeURIComponent(
                    correctQuestion
                )}
    \n${shuffled.map((answer, i) => `**${choices[i]}.** ${answer}`).join("\n")}`);
            // await message.reply(stripIndents`**You have 15 seconds.**\n
            // 		${decodeURIComponent(correctQuestion)}
            // 		${shuffled.map((answer, i) => `**${choices[i]}.** ${answer}`).join("\n")}
            // 	`);
            await message.lineReply(msgQuestion);
            const filter = (res) =>
                res.author.id === message.author.id &&
                choices.includes(res.content.toUpperCase());
            const msgs = await message.channel.awaitMessages(filter, {
                max: 1,
                time: 15000,
            });
            if (!msgs.size)
                return message.lineReplyNoMention(`Sorry, time is up! It was \`${correct}\`.`);
            const win =
                shuffled[choices.indexOf(msgs.first().content.toUpperCase())] === correct;
            if (!win) return message.lineReplyNoMention(`You got it wrong. The correct answer was \`${correct}\`.`);
            return message.lineReplyNoMention("You got it correct.");
        } catch (err) {
            console.log(err);
        }
    }
}