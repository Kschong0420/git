const random = require("something-random-on-discord").Random
module.exports = {
    name: "joke2",
    description: 'Gives you a funny joke.',
    cooldown: 5,
    usage: 'joke2',
    category: 'Fun',
    async execute(client, message, args) {
      
        let data = await random.getJoke()
    message.lineReplyNoMention(data)
    }
  }
  