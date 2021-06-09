const random = require("something-random-on-discord").Random

module.exports = {
    name: "advice",
    cooldown: 5,
    description: 'Get some advice from bot.',
    usage: 'advice',
    category: 'Fun',
    async execute(client, message, args) {
      
        let data = await random.getAdvice()
    message.lineReplyNoMention(data)
    }
  }
  