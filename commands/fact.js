const random = require("something-random-on-discord").Random
module.exports = {
    name: "fact",
    cooldown: 5,
    description: 'Get a fact about something',
    usage: 'fact',
    category: 'Fun',
    async execute(client, message, args) {
      
        let data = await random.getFact()
    message.lineReplyNoMention(data)
    }
  }
  