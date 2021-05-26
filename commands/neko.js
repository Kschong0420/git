const random = require("something-random-on-discord").Random
module.exports = {
    name: "neko",
    cooldown: 10,
    description: 'this is a Neko command!',
    async execute(client, message, args) {
      
        let data = await random.getNeko()
    message.lineReplyNoMention(data)
    }
  }
  