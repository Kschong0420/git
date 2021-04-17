const { MessageEmbed } = require('discord.js');

module.exports = {
  name: '8ball',
  category: 'fun',
  aliases: ['yes or not', 'yes or no', 'yon'],
  description: 'this is a butterfly command!',
  async execute(client, message, args) {

    const question = args.join(' ')
    if (!question) return message.reply('Please specify a question.')

    const answers = [

      'Yes', 'No', 'Maybe', 'Never', 'For sure!', 'Ask again', 'Ask again later', 'Definitely', 'Absolutely', 'Literaly No', 'Of Course',
      'Sadly No', 'Not today' 


    ];
    const a = answers[Math.floor(Math.random() * answers.length)];

    return message.channel.send(
      new MessageEmbed()
        .setAuthor('8ball')
        .setDescription(
          `Question: ${question}\nAnswer: ${a}`
        )
        .setColor('RANDOM')
    );
  }
}

//Confirm Yes
//  'Yes', 'No', 'Maybe', 'Never', 'For sure!', 'Ask again', 'Ask again later', 'Definitely', 'Absolutely', 'Literaly No', 'Of Course',
//  'Sadly No', 'Not today' 

//50 % yes 50 % no
// 'Yes', 'No', 'Maybe', 'Never', 'For sure!'