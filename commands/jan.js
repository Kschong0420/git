module.exports = {
    name: 'jan',
    cooldown: 5,
    description: 'this is a trigger jan command!',
    execute (client, message, args) {
      message.lineReplyNoMention('Triggering Jan!')
      message.lineReplyNoMention('https://tenor.com/view/thurston-waffles-meow-scream-glowing-eyes-cat-gif-15740056')
    }
  }
  