const random = require("something-random-on-discord").Random
module.exports = {
    name: "joke2",
    description: 'this is a joke command!',
    cooldown: 5,
    async execute(client, message, args) {
      
        let data = await random.getJoke()
    message.lineReplyNoMention(data)
    }
  }
  