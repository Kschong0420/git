const random = require("something-random-on-discord").Random
module.exports = {
    name: "fact",
    description: 'this is a fact command!',
    async execute(client, message, args) {
      
        let data = await random.getFact()
    message.channel.send(data)
    }
  }
  