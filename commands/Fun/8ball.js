const { MessageEmbed } = require('discord.js');

module.exports = {
  name: '8ball',
  category: 'Fun',
  aliases: ['yes-or-not', 'yes-or-no', 'yon'],
  cooldown: 5,
  description: 'Let the bot help you to answer your question.',
  usage: "8ball <query>",
  async execute(client, message, args) {

    const question = args.join(' ')
    if (!question) return message.lineReply('Please specify a question.')

    const answers = [

      'Yes.', 'No.', 'Maybe.', 'Never.', 'For sure.', 'Ask again.', 'Ask again later.', 'Definitely.', 'Absolutely.', 'Literaly No.', 'Of Course.',
      'Sadly No.', 'Not today.', 'Totally.', 'Totally No.', 'I refuse to answer.', 'Unlikely.', 'Certainly.', 'Without a doubt.', 'Possibly.', 'Impossible.',
      'Perhaps.', 'Hmm it seems your question was too dumb for me.', 'Cannot predict now.', 'Concentrate and ask again.', 'Don\'t count on it.', 'Outlook good.'


    ];
    const a = answers[Math.floor(Math.random() * answers.length)];

    return message.lineReplyNoMention(
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
//  'Yes', 'No', 'Maybe', 'Never', 'For sure.', 'Ask again', 'Ask again later', 'Definitely', 'Absolutely', 'Literaly No', 'Of Course',
//  'Sadly No', 'Not today' 

//50 % yes 50 % no
// 'Yes', 'No', 'Maybe', 'Never', 'For sure.'