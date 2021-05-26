const random = require("something-random-on-discord").Random
module.exports = {
    name: "fact",
    cooldown: 5,
    description: 'this is a fact command!',
    async execute(client, message, args) {
      
        let data = await random.getFact()
    message.lineReplyNoMention(data)
    }
  }
  