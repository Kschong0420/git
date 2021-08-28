const { MessageCollector, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'guessthenumber',
    aliases: ['gtn', 'numberguess', 'nbg'],
    description: 'Play guess the number',
    usage: 'gtn `then` <number>',
    category: 'Game',
    cooldown: 15,
    
    async execute(client, message, args) {
        let number = Math.ceil(Math.random() * 10000);
        //console.log(number)
        let finished = false;

        message.channel.send(
            new MessageEmbed()
            .setTitle(`Guess The Number`)
            .setDescription(`Guess a number (1-10000), you have \`2 minutes\`.`)
            .setColor('RANDOM')
            .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
        )

        let collector = new MessageCollector(message.channel, msg => msg.author.id == message.author.id, {
            time: 120000,
        });

        let tries = 0;

        collector.on('collect', async(msg) => {
            if(finished == false) {
                let split = msg.content.split(/ +/);
                let attempt = split.shift();

                if(isNaN(attempt)) return message.lineReply(`${attempt} is not a number.`);

                tries++;
    
                if(parseInt(attempt) !== number) return message.lineReplyNoMention(`${parseInt(msg)} is too **${parseInt(msg) < number ? 'low' : 'high'}**.`)
    
                finished = true;
    
                message.lineReplyNoMention(
                    new MessageEmbed()
                    .setTitle(`You Won!`)
                    .setDescription(`The answer is \`${parseInt(msg)}\`.\nIt took you \`${tries}\` times to get it!`)
                    .setFooter(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()
                    .setColor('GREEN')
                )
            }
        });
        
        collector.on('end', async(collected) => {
            if(finished == false) return message.lineReplyNoMention(`You timed out! The answer was \`${number}\`.`);
        });
    }
}