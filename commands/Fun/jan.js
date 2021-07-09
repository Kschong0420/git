module.exports = {
    name: 'jan',
    aliases: ['janice'],
    cooldown: 5,
    description: 'See what reaction after triggering Jan.',
    usage: 'jan',
    category: 'Fun',
    async execute (client, message, args) {
      message.lineReplyNoMention('Triggering Jan!')
      message.lineReplyNoMention('https://tenor.com/view/thurston-waffles-meow-scream-glowing-eyes-cat-gif-15740056')
    }
  }
  