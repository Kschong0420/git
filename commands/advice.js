const random = require("something-random-on-discord").Random

module.exports = {
    name: "advice",
    cooldown: 5,
    description: 'this is a Advice command!',
    async execute(client, message, args) {
      
        let data = await random.getAdvice()
    message.channel.send(data)
    }
  }
  